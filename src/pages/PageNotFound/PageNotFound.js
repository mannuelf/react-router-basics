import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return <div>
    <h1>Page Not Found</h1>
    please go to out homepage and find something there
      <Link to="/">Click me</Link>
    </div>
}

export default PageNotFound;
