import React, { Component } from "react";

class MyPropsSub extends Component {
  render() {
    console.group("MyPropsSub");
    console.dir(this.props);
    console.groupEnd();

    return (
      <div>
        <h3>MyPropsSub</h3>
        <p>
          제 이름은 <b>{this.props.name}</b>이고 나이는 <b>{this.props.age}</b>
        </p>
      </div>
    );
  }
}

MyPropsSub.defaultProps = {
  name: "이름없음",
  age: 20,
};

export default MyPropsSub;
