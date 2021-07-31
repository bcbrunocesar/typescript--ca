export default class Pokemon {
  id: number;
  name: string;
  type: number;

  constructor(name: string, type: number) {
    this.name = name;
    this.type = type;
  }
}
