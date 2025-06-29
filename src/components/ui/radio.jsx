import React from 'react'

const Radio = ({
    id,
    name,
    value,
    checked = false,
    onChange,
    disabled = false,
    children,
    className = '',
    ...props
}) => {
    const handleClick = () => {
        if (onChange && !disabled) {
            onChange(value)
        }
    }

    const handleKeyDown = (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault()
            handleClick()
        }
    }

    return (
        <label
            htmlFor={id}
            className={`radio-container ${disabled ? 'disabled' : ''} ${className}`}
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
            onClick={handleClick}
        >
            {/* Custom radio circle */}
            <div
                role="radio"
                aria-checked={checked}
                aria-labelledby={id}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={handleKeyDown}
                className="custom-radio"
                style={{
                    width: '18px',
                    height: '18px',
                    marginRight: '8px',
                    border: `2px solid ${checked ? '#0d47a1' : '#D1D5DB'}`,
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    outline: 'none'
                }}
            >
                {/* Blue fill dot - now we have complete control over size */}
                {checked && (
                    <div
                        style={{
                            width: '6px',  // Smaller than the default HTML radio
                            height: '6px',
                            backgroundColor: '#0d47a1',
                            borderRadius: '50%',
                            transition: 'all 0.2s ease'
                        }}
                    />
                )}
            </div>

            {/* Hidden input for form compatibility */}
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={() => { }} // Handled by div click
                disabled={disabled}
                style={{
                    position: 'absolute',
                    opacity: 0,
                    pointerEvents: 'none',
                    width: 0,
                    height: 0
                }}
                tabIndex={-1}
                {...props}
            />

            {children}
        </label>
    )
}

const RadioGroup = ({
    name,
    value,
    onChange,
    children,
    className = '',
    direction = 'horizontal', // 'horizontal' or 'vertical'
    gap = '16px',
    ...props
}) => {
    const handleChange = (selectedValue) => {
        if (onChange) {
            onChange(selectedValue)
        }
    }

    return (
        <div
            className={`radio-group ${className}`}
            role="radiogroup"
            style={{
                display: 'flex',
                flexDirection: direction === 'vertical' ? 'column' : 'row',
                gap: gap,
                ...props.style
            }}
            {...props}
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === Radio) {
                    return React.cloneElement(child, {
                        name,
                        checked: child.props.value === value,
                        onChange: handleChange
                    })
                }
                return child
            })}
        </div>
    )
}

export { Radio, RadioGroup }
