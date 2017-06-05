import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export interface Header {
    header: string;
    value: string;
}
export declare class ImageService {
    private http;
    constructor(http: Http);
    postImage(url: string, image: File, headers?: Header[], partName?: string, withCredentials?: boolean): Observable<Response>;
}
