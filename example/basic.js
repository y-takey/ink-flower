const { h, render, Component, Text } = require("ink");
const Flower = require("../src/index");

class Example extends Component {
  render() {
    return <Flower color="green" text="ABC" mark="*" />;
  }
}

render(<Example />);
