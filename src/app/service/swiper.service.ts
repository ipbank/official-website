import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject"

@Injectable()
export class SwiperService {

    /*-----Constructor Part-----*/

    currentPage: Subject<any> = new Subject<any>();

    constructor() {

    }

    /*-----Methods Part-----*/

    getPageObservable(): Observable<any> {
        return this.currentPage.asObservable();
    }

    setCurrentPage(page){
        this.currentPage.next({currentPage:page})
    }

}
