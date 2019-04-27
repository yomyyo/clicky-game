import React from "react";
import Jumbo from "./HelloBootstrap"
import Picture from "./Picture"

class Score extends React.Component {

    state = {
        score: 0
    }

    handleIncrement = () => {
        console.log(this.state.score)
        this.setState({ score: this.state.score + 1 });
    }

    render() {
        return (
            <div>
                <Jumbo />
                <div className="card-body">
                    <p className="card-text">Click Count: {this.state.score}</p>
                </div>
                <Picture onClick={this.handleIncrement}></Picture>
            </div>
        )
    }
}

export default Score;
