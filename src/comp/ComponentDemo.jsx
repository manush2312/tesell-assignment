import React, { useState } from 'react'
import { Radio, RadioGroup } from '../components/ui/radio'
import { Checkbox, CheckboxGroup } from '../components/ui/checkbox'

const ComponentDemo = () => {
    const [radioValue, setRadioValue] = useState('option1')
    const [singleCheckbox, setSingleCheckbox] = useState(false)
    const [checkboxGroup, setCheckboxGroup] = useState(['option1'])

    return (
        <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
            <h2>Custom Components Demo</h2>

            <div style={{ marginBottom: '30px' }}>
                <h3>Radio Buttons</h3>
                <RadioGroup
                    name="demo-radio"
                    value={radioValue}
                    onChange={setRadioValue}
                    direction="horizontal"
                    gap="20px"
                >
                    <Radio id="option1" value="option1">Option 1</Radio>
                    <Radio id="option2" value="option2">Option 2</Radio>
                    <Radio id="option3" value="option3">Option 3</Radio>
                </RadioGroup>
                <p>Selected: {radioValue}</p>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>Single Checkbox</h3>
                <Checkbox
                    id="single-checkbox"
                    checked={singleCheckbox}
                    onChange={setSingleCheckbox}
                >
                    I agree to the terms and conditions
                </Checkbox>
                <p>Checked: {singleCheckbox.toString()}</p>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>Checkbox Group</h3>
                <CheckboxGroup
                    name="demo-checkboxes"
                    value={checkboxGroup}
                    onChange={setCheckboxGroup}
                    direction="vertical"
                    gap="10px"
                >
                    <Checkbox value="option1">Option 1</Checkbox>
                    <Checkbox value="option2">Option 2</Checkbox>
                    <Checkbox value="option3">Option 3</Checkbox>
                </CheckboxGroup>
                <p>Selected: {checkboxGroup.join(', ')}</p>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>Disabled Components</h3>
                <Radio id="disabled-radio" value="disabled" disabled>Disabled Radio</Radio>
                <br /><br />
                <Checkbox id="disabled-checkbox" disabled>Disabled Checkbox</Checkbox>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>Different Sizes</h3>
                <Checkbox id="small" size="small">Small Checkbox</Checkbox>
                <br /><br />
                <Checkbox id="medium" size="medium">Medium Checkbox</Checkbox>
                <br /><br />
                <Checkbox id="large" size="large">Large Checkbox</Checkbox>
            </div>
        </div>
    )
}

export default ComponentDemo
