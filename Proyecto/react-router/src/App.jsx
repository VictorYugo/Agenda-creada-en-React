import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Product from './components/Product';
import Products from './components/Products';
import User from './components/User';

const GlobalStyle = createGlobalStyle`
    body{
        font-family:'Lucida Sans', sans-serif;
        text-align: center;
    }
`

const App = () => {

    return (
        <>
        <GlobalStyle></GlobalStyle>
        <Router>
            <Navigation/>
            <Route exact path='/' component={Home}/>
            <Route path='/user' component={User}/>
            <Route exact path='/prod' component={Products}/>
            <Route path='/product/:id' component={Product}/>
            <Route path='/contact' component={Contact}/>
        </Router>
        </>

    )
}

export default App;