
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, map, catchError } from 'rxjs';
import { Client } from './client.module';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3001/clients";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']

    })
  }
  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client).pipe(
      map((obj: any) => obj),
      catchError((e: any) => this.errorHandler(e))
    );
  }
  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl).pipe(
      map((obj: any) => obj),
      catchError((e: any) => this.errorHandler(e))
    );
  }

  readById(id:any): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Client>(url).pipe(
      map((obj: any) => obj),
      catchError((e: any) => this.errorHandler(e))
    );
  }

  update(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/${client.id}`;
    return this.http.put<Client>(url, client).pipe(
      map((obj: any) => obj),
      catchError((e: any) => this.errorHandler(e))
    );
  }

  deleteClient(id: number): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Client>(url).pipe(
      map((obj: any) => obj),
      catchError((e: any) => this.errorHandler(e))
    );
  }
  errorHandler(e: any): Observable<any>{
    this.showMenssage('Error, system down',true)
    return EMPTY;
  }
}

