import React from 'react'
import styled from 'styled-components'

const color = 'royalblue'
const padding= '2rem'

const StyledButton = styled.button`
    background-color: ${color};
    color: white;
    padding: ${padding};

    &:hover{
        background-color: white;
        color: ${color};  
    }
`

const Benviar = () => {
    return (
        <StyledButton>Enviar</StyledButton>
    )
}

export default Benviar;