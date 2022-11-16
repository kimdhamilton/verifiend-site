import React from 'react';
import { Container, Col, Row, Form } from "react-bootstrap";
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import Header from './components/Header';



const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <React.Fragment>
      <div className="App">
        <div className="header"><Header /></div>
        <div className="container">
          <main className="main"><App /></main>
        </div>
      </div>
    </React.Fragment>
);

    /*<React.Fragment>
        <GlobalHeader />
    </React.Fragment>*/

           // <div className="footer">Footer</div>

