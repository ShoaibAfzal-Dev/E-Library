import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/PageNotFound.css"
const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
      <Link className='ai' to={"/"}>Back</Link>
    </div>
  );
};

export default NotFoundPage;