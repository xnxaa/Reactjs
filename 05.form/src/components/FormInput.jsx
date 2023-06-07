import PropTypes from 'prop-types';
import { useState } from 'react';

export const TextField = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const handleChange = (event) => {
        setErrorMessage('');
        if (props.validationFunction) {
            const validationResult = props.validationFunction(event.target.value)
            if (validationResult !== true) {
                setErrorMessage(validationResult)
            }
        }
        if (props.onChange) {
            props.onChange(event.target.value)
        }
    }
    return (
        <div>
            <h2>{props.name}</h2>
            <input name={props.name} value={props.value} 
            onchange={handleChange} type={props.type}/> <br/>
            {errorMessage !== '' && <span> {errorMessage} </span>}
        </div>
    );
};

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onchange:PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    validationFunction: PropTypes.func
};

export const SelectField = (props) => {
    const handleChange = (event) => {
        if (props.onchange) {
            props.onchange(event.target.value)
        }
    }
    return (
        <div>
            <h2>{props.name}</h2>
            <select name={props.name} value={props.value} onchange={handleChange}>
                {props.options.map((option, index) => {
                    return (
                    <option 
                    key={`index-${index}`} 
                    value={option}>
                        {option}
                    </option>)
                })}
            </select>
        </div>
        
    );
};

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
    validationFunction: PropTypes.func
};

