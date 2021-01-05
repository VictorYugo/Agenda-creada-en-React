import React from 'react'
import { Link } from 'react-router-dom';
import { products } from '../asserts/products'

import styled from 'styled-components'

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
`
const ProductTag = styled.div`
    background-color: #bbb;
    padding: .5rem;
    text-align: center;
    border-radius: 10px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #222;
`

const Products = () => (
    <ProductContainer>
        {
            products.map(product => (
                <ProductTag>
                    <StyledLink to={`/product/${product.id}`}>
                        {product.name}
                    </StyledLink>
                </ProductTag>
            ))
        }
    </ProductContainer>
)

export default Products;