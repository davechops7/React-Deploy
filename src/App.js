import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    var myStyle = {
      fontSize: 100,
      color: '#FF0000'
    }
    return (
      <div>
        <h1 style={myStyle}>Header</h1>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           Chops Social Media Accounts, enjoy!
//         </h1>
//         <a
//           className="App-link"
//           href="https://www.facebook.com/David.kavana7"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Facebook
//         </a>
//         <a
//           className="App-link"
//           href="https://www.instagram.com/chops_and_dogs/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Instagram
//         </a>
//         <a
//           className="App-link"
//           href="https://twitter.com/Dave_kav"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Twitter
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
