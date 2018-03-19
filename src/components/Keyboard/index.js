import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const mainKeys = (onChange) => {
    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '.'];
    return nums.map(num => 
        <Key key={num} content={num} color="primary" onClick={onChange}/>);
}

const operatorKeys = (onChange) => {
    const operators = ['+', '-', '*', '/'];
    return operators.map(op => 
        <Key key={op} content={op} color="warning" size="12" onClick={onChange}/>);
}

const Keyboard = ({onChange}) => (
    <div class="keyboard row no-gutters">
        <div class="col-9 row no-gutters">
            {mainKeys(onChange)}
        </div>
        <div class="col-3 row no-gutters">
            {operatorKeys(onChange)}          
        </div>
        <Key content="=" color="danger" size="12" onClick={onChange}/>
    </div>
);

const Key = ({content, size, color, onClick}) => (
    <div class={`col-${size | 4}`}>
        <div class="test">
            <button class={`key bg-${color}`} onClick={(e) => onClick(content)}>
                {content}
            </button>
        </div>
    </div>
);

Keyboard.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Keyboard;