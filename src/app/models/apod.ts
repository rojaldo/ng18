export class Apod {

    private _date = '';
    private _explanation = '';
    private _hdurl = '';
    private _mediaType = '';
    private _serviceVersion = '';
    private _title = '';
    private _url = '';

    constructor(json?: any) {
        if (json) {
            this._date = json.date;
            this._explanation = json.explanation;
            this._hdurl = json.hdurl;
            this._mediaType = json.mediaType;
            this._serviceVersion = json.serviceVersion;
            this._title = json.title;
            this._url = json.url;                
        }
    }

    get date(): string {
        return this._date;
    }

    get explanation(): string {
        return this._explanation;
    }

    get hdurl(): string {
        return this._hdurl;
    }

    get mediaType(): string {
        return this._mediaType;
    }

    get serviceVersion(): string {
        return this._serviceVersion;
    }

    get title(): string {
        return this._title;
    }

    get url(): string {
        return this._url;
    }

}