import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ClientCrudComponent} from './views/client-crud/client-crud.component'; 
import { ClientCreateComponent } from './component/client/client-create/client-create.component';
import { ClientUpdateComponent } from './component/client/client-update/client-update.component';
import { ClientDeleteComponent } from './component/client/client-delete/client-delete.component';
const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'clients',
  component: ClientCrudComponent
},{
  path: 'clients/create',
  component:ClientCreateComponent
},{
  path:'clients/update/:id',
  component: ClientUpdateComponent
},{
  path:'clients/delete/:id',
  component: ClientDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
