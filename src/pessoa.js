class Pessoa {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return `--== Nome: ${this.name} ==--`;
  }
}

export default Pessoa;