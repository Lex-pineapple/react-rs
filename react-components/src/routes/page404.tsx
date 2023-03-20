import React from 'react';
import './page404.css';

class Page404 extends React.Component {
  render() {
    return (
      <div className="page404-container">
        <p className="page404-bigTxt">Whoops!</p>
        <p className="page404-mainTxt">Looks like you got lost.</p>
        <p className="page404-subTxt">
          Go back to the <a href="">home</a> page?
        </p>
      </div>
    );
  }
}

export default Page404;
