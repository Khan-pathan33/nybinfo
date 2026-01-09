// src/components/PureExample.jsx
import React, { PureComponent } from "react";

export class PureExample extends PureComponent {
  render() {
    console.log("Rendered PureComponent");
    return <div className="p-4 text-green-600 border rounded">{this.props.name}</div>;
  }
}
