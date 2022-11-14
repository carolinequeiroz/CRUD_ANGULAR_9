import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { RedDirective } from './directives/red.directive';
import { ClientCreateComponent } from './component/client/client-create/client-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ClientReadComponent } from './component/client/client-read/client-read.component';
import { ClientRead2Component } from './component/client/client-read2/client-read2.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { ClientUpdateComponent } from './component/client/client-update/client-update.component';
import { ClientDeleteComponent } from './component/client/client-delete/client-delete.component';

registerLocaleData(localeEn);

// import { HeaderService } from './component/template/header/header.service';
// import { ForDirective } from './directives/for.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClientCrudComponent,
    RedDirective,
    ClientCreateComponent,
    ClientReadComponent,
    ClientRead2Component,
    ClientUpdateComponent,
    ClientDeleteComponent,
    // HeaderService

    // ForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'en',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
  