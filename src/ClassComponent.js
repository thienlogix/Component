import React, { Component } from "react";
import StudentContext from "./StudentContext";

class ClassComponent extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    // first call after rendered component
    this._listAsync();
    this.updatedName();
  }

  componentDidUpdate(prevProps, prevState) {
    // updated each props or state change

    if (prevState.counter !== this.state.counter) {
      // detect counter changed
    }
  }

  componentWillUnmount() {
    // unmount component
    // destroy component when move out of view
  }

  render() {
    console.log("class component outside", this.context);

    return (
      <StudentContext.Consumer>
        {(context) => {
          console.log("class component inside context consumer", context);
          return (
            <>
              <button onClick={this._increase}>
                FunctionComponent {this.state.counter}
              </button>
            </>
          );
        }}
      </StudentContext.Consumer>
    );
  }

  _increase = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));

    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));

    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  _listAsync = async () => {
    // calling API
    // const items = await listAsync();
    // this.setState({
    //   items,
    // });
  };

  updatedName() {
    console.log("updatedName", this.setState);
  }
}

ClassComponent.contextType = StudentContext;
ClassComponent.propTypes = {};
ClassComponent.defaultProps = {};

export default ClassComponent;
