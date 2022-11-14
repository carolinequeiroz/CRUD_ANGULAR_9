import { Observable } from 'rxjs';
import { ClientService } from './../client.service';
import { Client } from './../client.module';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-client-delete',
    templateUrl: './client-delete.component.html',
    styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

    client!: Client;

    constructor(
        private clientService: ClientService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.clientService.readById(id).subscribe(client => {
            this.client = client
        });
    }

    deleteClient(): void {
        this.clientService.deleteClient(this.client.id).subscribe(() => {
            this.clientService.showMenssage('Customer successfully deleted')
            this.router.navigate(['/clients'])

        })

        // const Url = `${this.baseUrl}/${id}`;
        // return this.http.delete<Client>(url)
    }

    cancelClient(): void {
        this.router.navigate(['/clients'])
    }


}


//     private route: ActivatedRoute) { }  
//     id(id: any) {
//         throw new Error('Method not implemented.');  
//     }

//   update(): void {
//     this.clientService.update(this.client).subscribe(() => {
//       this.clientService.showMenssage('Client successfully updated.')  
//       this.router.navigate(['/clients'])

//     }) 
//   }


