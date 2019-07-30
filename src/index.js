import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import Personal from './Personal';
import './normalize.css';
import './main.css';

ReactDOM.render(
    <Portfolio />,
    document.getElementById('portfolio')
);

ReactDOM.render(
    <Personal />,
    document.getElementById('personal')
);
