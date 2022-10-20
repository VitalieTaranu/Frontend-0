import React from "react";
import ReactDOM from "react-dom/client";

console.log("Script runing");

("use strict");

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

function Container() {
  return (
    <main id="main-container">
      Container
      <LikeButton />
      <Hello />
    </main>
  );
}

function Hello() {
  return <p>Hello</p>;
}

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <LikeButton />
      <Container />
    </div>
  );
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
