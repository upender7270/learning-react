import React, { Component } from "react";

import CharacterCard from "./CharacterCard";
import Wrapper from "./Wrapper";
import Header from "./Header";
import GameResult from "./GameResult";
import characters from "./characters.json";
import HowToPlay from "./HowToPlay";

let WIN_COUNT = 12;
class EmojiGame extends Component {
  state = {
    characters,
    highScore: 0,
    currentScore: 0,
    gameState: "PLAYING",
    theme: "light"
  };

  handleClick = id => {
    this.handleScore(id);
    this.shuffleArray();
  };

  handleScore = id => {
    this.state.characters.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        this.setState({ gameState: "LOOSE" });
      }
    });
  };

  resetGame = () => {
    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore });
    }
    this.setState({ currentScore: 0 });
    this.setState({ gameState: "PLAYING" });
    this.state.characters.forEach(element => (element.clicked = false));
  };

  playAgain = () => {
    this.resetGame();
  };

  shuffleArray = () => {
    // Shuffle array of objects
    const shuffledArr = this.shuffle(this.state.characters);
    // Setting 'shuffledArr' as the new state
    this.setState({ shuffledArr });
  };

  // handleIncrement increments this.state.currentScore by 1
  handleIncrement = () => {
    // Using setState method to update component's state
    this.setState({ currentScore: this.state.currentScore + 1 }, () => {
      if (this.state.currentScore === WIN_COUNT) {
        this.setState({ gameState: "WON" });
      }
    });
  };

  // Function that takes an array as a parameter and shuffles it
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  renderGame = () => {
    const { gameState, currentScore, theme } = this.state;

    if (gameState === "PLAYING") {
      return (
        <div
          className={`flex flex-wrap justify-center items-center content-center flex-1 ${
            theme === "light" ? "bg-indigo-100" : "bg-gray-900"
          }`}
        >
          {this.state.characters.map(character => (
            <CharacterCard
              handleClick={this.handleClick}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              occupation={character.occupation}
              theme={theme}
            />
          ))}
        </div>
      );
    } else if (gameState === "WON") {
      return (
        <GameResult
          text="You Won!"
          score={currentScore}
          playAgain={this.playAgain}
          isWon={true}
          theme={theme}
        />
      );
    } else if (gameState === "LOOSE") {
      return (
        <GameResult
          text="You Lose!"
          score={currentScore}
          playAgain={this.playAgain}
          isWon={false}
          theme={theme}
        />
      );
    }
  };
  onChangeTheme = () => {
    const { theme } = this.state;
    if (theme === "dark") {
      this.setState({ theme: "light" });
    } else {
      this.setState({ theme: "dark" });
    }
  };

  render() {
    return (
      <Wrapper>
        <Header
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          theme={this.state.theme}
          onChangeTheme={this.onChangeTheme}
        />
        {this.renderGame()}
        <HowToPlay theme={this.state.theme} />
      </Wrapper>
    );
  }
}

export default EmojiGame;
