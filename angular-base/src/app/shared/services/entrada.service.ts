import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarEntradas(): Observable<Array<Entrada>> {
      return this.httpClient.get<Array<Entrada>>('https://jsonplaceholder.typicode.com/posts');
  }
}
