import React from 'react'

import { CTA, Brand, Navbar } from "./components";
import { Header, Blog, Features, Possibility, WhatGPT3, Footer } from "./containers";

import './App.scss'

function App() {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Header />
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App
