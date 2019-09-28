import HelloWord from '../HelloWorld';
import React from 'react';

const HelloWorldWrapper = props => <div style={{border: 'thin white solid'}}>
    wrapped:
    <HelloWord/>
</div>

export default HelloWorldWrapper;