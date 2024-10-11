export class GameCard{
    private _flag = '';
    private _rightCountry = '';
    private _wrongCountries: string[] = [];
    private _answers: string[] = [];
    private _answered = false;

    constructor(flag: string, rightCountry: string, wrongCountries: string[]){
        this._flag = flag;
        this._rightCountry = rightCountry;
        this._wrongCountries = wrongCountries;
        this._answers = [rightCountry, ...wrongCountries];
    }

    get flag(): string{
        return this._flag;
    }

    get answers(): string[]{
        return this._answers;
    }

    get answered(): boolean{
        return this._answered;
    }
}