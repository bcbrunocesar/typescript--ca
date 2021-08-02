export default class Pokemon {
  private _id: number;
  private _name: string;
  private _type: number;

  constructor(id: number, name: string, type: number) {
    this._id = id;
    this._name = name;
    this._type = type;
  }

  public get getId(): number {
    return this._id;
  }

  public get getName(): string {
    return this._name;
  }

  public get getType(): number {
    return this._type;
  }
}
