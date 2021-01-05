import React from 'react'
import { products } from '../asserts/products'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { generate as id } from 'shortid'

const ProductCard = styled.div`
   background-color: #ddd;
   height: 250px;
   width: 400px;
   margin-left: auto;
   margin-right: auto;
   padding: 1rem;
   border-radius: 10px;
   text-align: center;
`
const ProductImg = styled.img`
   display: block;
   margin-left: auto;
   margin-right: auto;
   border-radius: 50%; 
`
const ProductTitle = styled.h2`
    margin: 0;
`

const BackButton = styled(Link)`
    text-decoration: none;
    background: none;
    width: 30px;
    margin-left: auto;
    margin-top: auto;
    color: royalblue;
    border-bottom: 1px solid royalblue;
`

const Product = ({ match }) => {
    const product = products.find(product => product.id === parseInt(match.params.id))

    return (
        <ProductCard key={id()}>
            <ProductImg width='50%' height='50%' src='https://i.linio.com/p/cd11c931c44d559c4e7a0ba8815d4cf9-product.jpg'/>
            <ProductTitle>{product.id} - "{product.name}"</ProductTitle>
            <BackButton to='/prod'>Back</BackButton>
        </ProductCard>
    )
}

export default Product;