const { h, Text, Component } = require("ink");
const CharMap = require("./char-map");

const CHAR_WIDTH = 5;
const CHAR_HEIGHT = 6;

const blank = (size, element) => {
  return Array.from({ length: size }, () => element);
};

class Flower extends Component {
  constructor(props) {
    super(props);

    this.state = { lines: [] };
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
    const { space, padding } = this.marks();
    const bl = blank(this.props.spacer, space).join("");
    const lines = this.props.text
      .split("")
      .reduce((ret, char) => {
        return this.character(char).map((val, i) => ret[i] + val);
      }, blank(this.props.spacer + CHAR_HEIGHT, ""))
      .map(line => line + bl);
    lines.push(...blank(this.props.spacer, blank(lines[0].length, space)));

    return lines;
  }

  character(char) {
    if (!this.builtChars[char]) {
      this.builtChars[char] = this.buildChar(char);
    }

    return this.builtChars[char];
  }

  buildChar(char) {
    const { spacer } = this.props;
    const { space, padding } = this.marks();

    return [...blank(spacer, []), ...CharMap[char]].map(lines => {
      let cells = space.repeat(CHAR_WIDTH + spacer).split("");
      lines.forEach(i => (cells[i + spacer] = padding));
      return cells.join("");
    });
  }

  marks() {
    const { mark, inverse } = this.props;
    const space = inverse ? mark : " ";
    const padding = inverse ? " " : mark;
    return { space, padding };
  }
}

Flower.defaultProps = {
  text: "",
  color: "green",
  mark: "#",
  spacer: 2,
  inverse: false
};

module.exports = Flower;
