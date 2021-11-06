import { Injectable } from '@angular/core';
import { Fruta } from './fruta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FrutaService {
  frutasUrl = 'api/frutas/';
  constructor(private http: HttpClient) {}

  getFrutas(): Observable<Fruta[]> {
    return this.http.get<Fruta[]>(this.frutasUrl);
  }

  criarFruta(
    umNome: string,
    umaCor: string,
    umPeso: number
  ): Observable<Fruta> {
    const aFruta = { id: 6, nome: umNome, cor: umaCor, peso: umPeso };
    return this.http.post<Fruta>(this.frutasUrl, aFruta);
  }

  editarFruta(id: number, fruta: Fruta): Observable<any> {
    return this.http.put(this.frutasUrl + id, fruta);
  }

  deletarFruta(id: number): Observable<any> {
    return this.http.delete(this.frutasUrl + id);
  }
}
