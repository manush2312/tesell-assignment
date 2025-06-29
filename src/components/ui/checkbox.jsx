import React from 'react'

const Checkbox = ({
  id,
  name,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  children,
  className = '',
  size = 'medium', // 'small', 'medium', 'large'
  ...props
}) => {
  const handleChange = (e) => {
    if (onChange && !disabled) {
      onChange(e.target.checked, e)
    }
  }

  const sizeStyles = {
    small: { width: '14px', height: '14px', marginRight: '6px' },
    medium: { width: '18px', height: '18px', marginRight: '8px' },
    large: { width: '18px', height: '18px', marginRight: '10px' }
  }

  return (
    <label
      htmlFor={id}
      className={`checkbox-container ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0px',
        color: '#111827'
      }}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        ref={(input) => {
          if (input) input.indeterminate = indeterminate
        }}
        className="checkbox-input"
        style={{
          ...sizeStyles[size],
          appearance: 'none',
          border: '2px solid #D1D5DB',
          borderRadius: '5px',
          backgroundColor: '#FFFFFF',
          cursor: disabled ? 'not-allowed' : 'pointer',
          position: 'relative',
          transition: 'all 0.2s ease'
        }}
        {...props}
      />
      {children}
    </label>
  )
}

const CheckboxGroup = ({
  name,
  value = [], // array of checked values
  onChange,
  children,
  className = '',
  direction = 'vertical', // 'horizontal' or 'vertical'
  gap = '12px',
  ...props
}) => {
  const handleChange = (checkboxValue, checked, event) => {
    if (onChange) {
      let newValue
      if (checked) {
        newValue = [...value, checkboxValue]
      } else {
        newValue = value.filter(v => v !== checkboxValue)
      }
      onChange(newValue, event)
    }
  }

  return (
    <div
      className={`checkbox-group ${className}`}
      role="group"
      style={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        gap: gap,
        ...props.style
      }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Checkbox) {
          const childValue = child.props.value
          return React.cloneElement(child, {
            name,
            checked: value.includes(childValue),
            onChange: (checked, e) => {
              handleChange(childValue, checked, e)
              if (child.props.onChange) {
                child.props.onChange(checked, e)
              }
            }
          })
        }
        return child
      })}
    </div>
  )
}

export { Checkbox, CheckboxGroup }
