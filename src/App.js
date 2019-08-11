import React, { Component } from 'react';
import './App.css';
import { Body, Jumbotron, Navbar, Footer } from "./components"
// import Navbar from "./components/Navbar"

class App extends Component {
  state = {
    cardNameArray: ["beth", "birdperson", "evilmorty", "gianthead", "goldenford",
      "jerry", "jessica", "meeseeks", "morty", "mr", "rick", "summer"],
    score: 0,
    topScore: 0,
    selected: [],
    message: "Click an image to begin!"
  }

  cardClick = (e) => {
    console.log(e.target.name);
    if (this.state.selected.includes(e.target.name)) {
      // restart game
      this.setState({ score: 0, selected: [], message: "You have clicked this already, try again!" })
    } else {
      // increment score
      this.incrementScore();
      this.storeSelected(e);
    }
    // reshuffle pictures
    this.setState({
      cardNameArray: this.state.cardNameArray.sort(
        () => { return (Math.random() * 2 - 1) }
      )
    })
  }
  incrementScore = () => {
    if (this.state.topScore <= this.state.score) {
      this.setState({ topScore: this.state.topScore + 1 })
    }
    this.setState({ score: this.state.score + 1, message: "You got this one right!" });

  }
  storeSelected = (e) => {
    const newArray = this.state.selected
    newArray.push(e.target.name)
    this.setState({ selected: newArray })
  }
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
        <Jumbotron />
        <Body cardNameArray={this.state.cardNameArray} cardClick={this.cardClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
