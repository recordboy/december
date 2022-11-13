import React from 'react';
import './Main.scss';

// 통신
const runServer = parms => {
  fetch(`http://localhost:4000/users/signup`, {
    method: 'GET',
    header: { 'Content-Type': `application/json` },
  })
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result);
    });
};

runServer();
const Main = () => {
  return (
    <div className="mainWrap">
      <div className="sider">
        <ul>
          <li>계좌</li>
          <li>계좌</li>
          <li>계좌</li>
        </ul>
      </div>
      <div className="inner">
        <div className="header">header</div>
        <div className="contents">contents</div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};

export default Main;
