import React from 'react';
import './App.css';
import axios from "axios";
import List from "./components/List";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData: [],
      favoritePlayer: "Megan Rapinoe"
    }
  }


  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // console.log(res, "res from initial axios request")
        this.setState({
          githubData: res.data
        });
      })
      // .then(res => {
      //   console.log(this.setState.githubData)
      // })
      .catch(err => {
        console.log(err)
      });
  }
  componentDidUpdate(prevState) {
    if (prevState.favPlayer !== this.state.favoritePlayer) {
      this.setState({ favoritePlayer: this.state.favoritePlayer });
    }
  }

  render() {

    return (
      <div className="App">
        <h1>Choose Your Favorite Player:</h1>
        <h3>{`My player is: ${this.state.favoritePlayer}`}</h3>
        <Form favoritePlayer={this.state.favoritePlayer}></Form>
        <List githubData={this.state.githubData}></List>
        <p>Alex Morgan</p>

      </div>
    );

  };
};

export default App;
