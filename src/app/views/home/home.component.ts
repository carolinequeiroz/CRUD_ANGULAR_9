import { HeaderService } from './../../component/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService:HeaderService) { 
    headerService.headerData = {
    next:'',
    title: 'Home',
    icon:  'house',
    routeUrl:''
    }
  }
  ngOnInit(): void {
  }

}
