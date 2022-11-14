// import { HeaderService } from './header.service';
import { Injectable } from '@angular/core';
import { HeaderData } from './header.data.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    next:'',
    title: 'Home',
    icon: 'house',
    routeUrl: '',
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }
  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
