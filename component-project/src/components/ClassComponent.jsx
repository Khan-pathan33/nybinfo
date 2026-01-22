import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="bg-green-100 p-6 rounded-lg shadow-md w-72">
        <h2 className="text-xl font-bold mb-2">
          Class Component
        </h2>
        <p className="mb-3">Count: {this.state.count}</p>
        <button
          onClick={this.increment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default ClassComponent;
