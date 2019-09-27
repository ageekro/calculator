import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "Clear" || val === "x**2" || val === "sqrt(2)" || val === "+/-";
}

const Button = (props) => (
    <div onClick={() => props.handleClick(props.children)} className={`button-wrapper ${isOperator(props.children) ? "" : "operator"}`}
        style={props.style}>{props.children}</div>
)

export default Button;