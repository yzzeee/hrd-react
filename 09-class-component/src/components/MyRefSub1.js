import React, { Component } from "react";

class MyRefSub1 extends Component {
  myDname = React.createRef();
  myLoc = React.createRef();
  myResult = React.createRef();

  render() {
    return (
      <div>
        <h3>MyRefSub1</h3>
        <div>
          <label htmlFor="dname">학과명</label>
          <input type="text" ref={this.myDname} id="dname" />
        </div>

        <div>
          <label htmlFor="loc">학과위치</label>
          <input type="text" ref={this.myLoc} id="loc" />
        </div>
        <h3>
          입력값 : <span ref={this.myResult}></span>
        </h3>

        <button
          onClick={(e) => {
            console.log(this.myDname);
            console.log(this.myLoc);

            const dname = this.myDname.current.value;
            const loc = this.myLoc.current.value;

            this.myResult.current.innerHTML = dname + ", " + loc;
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}

export default MyRefSub1;
