const { h, Text, Component } = require("ink");
const CharMap = require("./char-map");

const emptyLines = ["", "", "", "", "", ""];

class Flower extends Component {
  constructor(props) {
    super(props);

    this.state = { lines: emptyLines };
    this.builtChars = {};
  }

  render() {
    const style = { [this.props.color]: true };

    return this.buildLines().map(line =>
      <div>
        <Text {...style} children={line} />
      </div>
    );
  }

  buildLines() {
    return this.props.text.split("").reduce((ret, char) => {
      return this.character(char).map((val, i) => ret[i] + val);
    }, emptyLines);
  }

  character(char) {
    if (!this.builtChars[char]) {
      this.builtChars[char] = this.buildChar(char);
    }

    return this.builtChars[char];
  }

  buildChar(char) {
    const { mark } = this.props;

    return CharMap[char].map(lines => {
      let cells = " ".repeat(6).split("");
      lines.forEach(i => (cells[i + 1] = mark));
      return cells.join("");
    });
  }
}

Flower.defaultProps = {
  text: "",
  color: "green",
  mark: "#"
};

module.exports = Flower;
