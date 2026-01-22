import React from "react";

class Class extends React.Component {
  constructor() {
    super();
    this.state = {
      online: false
    };
  }

  toggleStatus = () => {
    this.setState({ online: !this.state.online });
  };

  render() {
    return (
      <div style={boxStyleRed}>
        <h2>Class Component</h2>
        <p>Status: {this.state.online ? "🟢 Online" : "🔴 Offline"}</p>
        <button onClick={this.toggleStatus}>
          Toggle Status
        </button>
      </div>
    );
  }
}

const boxStyleRed = {
  border: "2px solid #ef4444",
  padding: "20px",
  borderRadius: "10px",
  width: "250px"
};

export default Class;
