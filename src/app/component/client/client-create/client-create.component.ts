import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Client } from './../client.module';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  // coolAttribute = 'cool'
  client: Client = {
    id:0 ,
    name: '',
    profession: '',
    wage:0,
  }

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  createClient(): void {
    this.clientService.create(this.client).subscribe(() => {
      
    this.clientService.showMenssage('Operation executed successfully')

    this.router.navigate(['/clients'])


    })

  }

  deleteClient(): void {
    this.router.navigate(['/clients'])
    // this.clientService.showMenssage('Operation deleted successfully')

  }
  // doingSomething(): void {
  // //  console.log('Doing something!')
  // }
}
