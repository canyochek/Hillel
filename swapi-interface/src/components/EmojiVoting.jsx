import React, { Component } from "react";

class EmojiVoting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: ["happy", "laugh", "love", "cool", "sad"],
      votes: {},
      winner: null,
    };
  }

  componentDidMount() {
    const savedVotes = JSON.parse(localStorage.getItem("votes"));
    if (savedVotes) {
      this.setState({ votes: savedVotes });
    }
  }

  handleVote = (emoji) => {
    this.setState(
      (prevState) => {
        const newVotes = { ...prevState.votes };
        newVotes[emoji] = (newVotes[emoji] || 0) + 1;
        return { votes: newVotes };
      },
      () => {
        localStorage.setItem("votes", JSON.stringify(this.state.votes));
      }
    );
  };

  showResults = () => {
    const { votes } = this.state;
    let winner = null;
    let maxVotes = 0;

    for (let emoji in votes) {
      if (votes[emoji] > maxVotes) {
        maxVotes = votes[emoji];
        winner = emoji;
      }
    }

    this.setState({ winner });
  };

  clearResults = () => {
    localStorage.removeItem("votes");
    this.setState({ votes: {}, winner: null });
  };

  render() {
    const { emojis, votes, winner } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Голосування за смайлик</h2>
        <div>
          {emojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => this.handleVote(emoji)}
              style={{ fontSize: "30px", margin: "10px", cursor: "pointer" }}
            >
              {emoji} ({votes[emoji] || 0})
            </button>
          ))}
        </div>

        <div style={{ marginTop: "20px" }}>
          <button onClick={this.showResults}>Show Results</button>
          <button onClick={this.clearResults} style={{ marginLeft: "10px" }}>
            Очистити результати
          </button>
        </div>

        {winner && (
          <h3 style={{ marginTop: "20px" }}>
            Переможець: <span style={{ fontSize: "40px" }}>{winner}</span>
          </h3>
        )}
      </div>
    );
  }
}

export default EmojiVoting;