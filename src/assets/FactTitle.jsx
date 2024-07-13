/* eslint-disable react/prop-types */
import React from "react";

class FactTitle extends React.Component {
  render() {
    return (
      <div>
        <strong>&quot;{this.props.fact}&quot;</strong>
      </div>
    );
  }
}
export default FactTitle;
