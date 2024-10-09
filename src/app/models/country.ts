export class Country {
    private _name = '';
    private _capital = '';
    private _region = '';
    private _subregion = '';
    private _population = 0;
    private _area = 0;
    private _flag = '';

    constructor(json?: any) {
        if (json) {
            this._name = json.name.common;
            this._capital = json.capital;
            this._region = json.region;
            this._subregion = json.subregion;
            this._population = json.population;
            this._area = json.area;
            this._flag = json.flags.png;
        }
    }

    get name(): string {
        return this._name;
    }

    get capital(): string {
        return this._capital;
    }

    get region(): string {
        return this._region;
    }

    get subregion(): string {
        return this._subregion;
    }

    get population(): number {
        return this._population;
    }

    get area(): number {
        return this._area;
    }

    get flag(): string {
        return this._flag;
    }

    toString(): string {
        return `${this._name} - ${this._capital} - ${this._region} - ${this._subregion} - ${this._population} - ${this._area} - ${this._flag}`;
    }


}