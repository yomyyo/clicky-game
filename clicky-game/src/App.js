//imports dependencies and files
import React, { Component } from "react";
import Jumbo from "./components/HelloBootstrap"
import Picture from "./components/Picture";
import DBZ from "./DBZ.json";

//sets state to 0 or empty
class App extends Component {
  state = {
    DBZ,
    clickedDBZ: [],
    score: 0
  };

//when you click on a card ... the DBZ is taken out of the array
  imageClick = event => {
    const currentDBZ = event.target.alt;
    const DBZAlreadyClicked =
      this.state.clickedDBZ.indexOf(currentDBZ) > -1;

//if you click on a DBZ that has already been selected, the game is reset and cards reordered
    if (DBZAlreadyClicked) {
      this.setState({
        DBZ: this.state.DBZ.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedDBZ: [],
        score: 0
      });

//if you click on an available DBZ, your score is increased and cards reordered
    } else {
      this.setState(
        {
          DBZ: this.state.DBZ.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedDBZ: this.state.clickedDBZ.concat(
            currentDBZ
          ),
          score: this.state.score + 1
        },
//if you get all 12 DBZ corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            this.setState({
              DBZ: this.state.DBZ.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedDBZ: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, Jumbo, Picture, footer 
  render() {
    return (
      <div>
        <Jumbo />
        score={this.state.score}
          {this.state.DBZ.map(DBZ => (
            <Picture
              imageClick={this.imageClick}
              id={DBZ.id}
              key={DBZ.id}
              image={DBZ.image}
            />
          ))}
      </div>
    );
  }
}
export default App;