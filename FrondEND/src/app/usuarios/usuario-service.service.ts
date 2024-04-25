import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsuarios } from './usuario-model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<ResponseUsuarios> {
    return this.http.get<ResponseUsuarios>(this.url);

  }

}
