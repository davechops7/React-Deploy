import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headline from './Headline.js';

const green = '#39D1B4';
const yellow = '#FFD712';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{ background: this.state.color }}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
				</button>
      </div>
    );
  }
}

// ReactDOM.render(<Toggle />, document.getElementById('app'));

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
