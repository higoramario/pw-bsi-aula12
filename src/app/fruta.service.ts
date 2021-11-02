import { Injectable } from '@angular/core';
import { Fruta } from './fruta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FrutaService {
  constructor(private http: HttpClient) {}

  getFrutas(): Observable<Fruta[]> {
    return this.http.get<Fruta[]>('api/frutas');
  }
}
