// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code> src / App.js </code> and save to reload.
//         </p>{' '}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     let title = 'leehaeun';
//     if (title.length > 0) title += ' > 0';
//     return <h1>{title}</h1>;
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import classNames from 'classnames/bind';
// import style from './App.css';

// const st = classNames.bind(style);

// class App extends Component {
//   handleClick = (e) => {
//     e.preventDefault();
//     console.log('The link was clicked.');
//     // this.handleClick = this.handleClick.bind(this);
//   };

//   render() {
//     return (
//       <div className={st('App', 'blue')}>
//         <button type="button" onClick={this.handleClick}>
//           클릭!
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import classNames from 'classnames/bind';
// import style from './App.css';

// const st = classNames.bind(style);

// class App extends Component {
//   handleClick() {
//     console.log('handleClick!!!');
//     console.log(this);
//   }

//   render() {
//     return (
//       <div className={st('App', 'blue')}>
//         <button type="button" onClick={this.handleClick.bind(this)}>
//           화살표 함수 클릭!
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';

const st = classNames.bind(style);

class App extends Component {
  idValue = '';

  passValue = '';

  inputChange = (e) => {
    console.log(
      `사용자 ${e.target.matches('#idInput') ? '아이디' : '비밀번호'} 입력중`,
    );
  };

  inputEnter = (e) => {
    if (e.keyCode !== 13 || e.target.value.trim() === '') return;
    console.log(
      `사용자 ${e.target.matches('#idInput') ? '아이디' : '비밀번호'} '${
        e.target.value
      }' 입력`,
    );
  };

  inputAssign = (e) => {
    if (e.target.matches('#idInput')) {
      this.idValue = e.target.value;
      return;
    }
    this.passValue = e.target.value;
  };

  checkValue = ({ target }) => {
    return [...target.parentNode.children].some((node) =>
      node.nodeName !== 'INPUT' ? false : node.value === '',
    );
  };

  btnClick = (e) => {
    if (this.checkValue(e)) {
      console.log('입력란을 모두 입력해 주세요');
      return;
    }
    console.log(`아이디: '${this.idValue}', 비밀번호: '${this.passValue}'`);
    console.log('로그인 시도');
    const [id, pass] = [...e.target.parentNode.children].filter(
      (node) => node.nodeName === 'INPUT',
    );
    id.value = '';
    pass.value = '';
    this.idValue = '';
    this.passValue = '';
  };

  render() {
    return (
      <form action="#" method="post">
        <fieldset>
          <legend>
            <span className={st('label')}>ID</span>
            <input
              type="text"
              id="idInput"
              onChange={this.inputChange}
              onBlur={this.inputAssign}
              onKeyDown={this.inputEnter}
            />
            <span className={st('label')}>PASS</span>
            <input
              type="text"
              id="passInput"
              onChange={this.inputChange}
              onBlur={this.inputAssign}
              onKeyUp={this.inputEnter}
            />
            <button type="button" onClick={this.btnClick}>
              로그인
            </button>
          </legend>
        </fieldset>
      </form>
    );
  }
}

export default App;
