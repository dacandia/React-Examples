import React, { Component } from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome';

export const NotFound = () => (
    <div>
        <h1 className='title'>404</h1>
        <h2 className='subtitle'>Page not found</h2>
        <ButtonBackToHome />
    </div>
)