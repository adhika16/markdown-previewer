// components/NotFound.js
import React from 'react';
import { Container } from 'reactstrap';
import './NotFound.css';

const NotFound = () => {
  return (
    <Container>
      <div className="jumbotron">
        <h1 className="display-3">404 Not Found</h1>
        <p className="lead">The page you're looking for doesn't exist.</p>
      </div>
    </Container>
  );
};

export default NotFound;
