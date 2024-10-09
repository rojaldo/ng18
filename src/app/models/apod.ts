export class Apod {

    private _date = '';
    private _explanation = '';
    private _hdurl = '';
    private _mediaType = '';
    private _serviceVersion = '';
    private _title = '';
    private _url = '';

    private _isImage = false;
    private _isVideo = false;

    private _videoId = '';

    constructor(json?: any) {
        if (json) {
            this._date = json.date;
            this._explanation = json.explanation;
            this._hdurl = json.hdurl;
            this._mediaType = json.media_type;
            this._serviceVersion = json.service_version;
            this._title = json.title;
            this._url = json.url;                

            this._isImage = this._mediaType === 'image';
            this._isVideo = this._mediaType === 'video';

            if (this._isVideo) {
                this._processVideoUrl();
            }
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

    get isImage(): boolean {
        return this._isImage;
    }

    get isVideo(): boolean {
        return this._isVideo;
    }

    get videoId(): string {
        return this._videoId
    }

    private _processVideoUrl() {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = this._url.match(regExp);
        this._videoId = (match&&match[7].length==11)? match[7] : '';
    }

}