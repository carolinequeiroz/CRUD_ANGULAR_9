import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeaderService } from './../../component/template/header/header.service';

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor(
    private router:Router,
    private headerService:HeaderService) {
    
    headerService.headerData = {
      next:'',
      title: 'Customers',
      icon:  'group',
      routeUrl:'/clients'
      }
   }

  ngOnInit(): void {
  }

  navigateToClientCreate(): void{
    this.router.navigate(['/clients/create'])
  }
}
