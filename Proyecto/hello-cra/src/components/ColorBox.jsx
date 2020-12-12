import React from 'react'
import styled from 'styled-components';

const LabelColor = styled.label`
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-top: .5rem;
    margin-left: 5px;
    background-color: ${({color}) => color};
    border-radius: 5px;
`

const InputRadio = styled.input`
    display: none;
    &:checked + label{
        border: 1px solid #fff;
    }
`

const ColorBox = ({color, handleChangeColor, isChecked}) => (
    <div>
        <InputRadio
            defaultChecked={isChecked}
            id={color}
            name="color"
            onChange={()=>handleChangeColor(color)}
            type="radio"></InputRadio>
        <LabelColor htmlFor={color} color={color}></LabelColor>
    </div>
)

export default ColorBox;