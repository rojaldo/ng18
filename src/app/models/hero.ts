export class Hero {
  constructor(private _name: string, private _description = '') { }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    set name(name: string) {
        this._name = name;
    }

    set description(description: string) {
        this._description = description;
    }
}