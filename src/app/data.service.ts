import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      frutas: [
        { id: 1, nome: 'Abacate', cor: 'verde', peso: 200 },
        { id: 2, nome: 'Abacaxi', cor: 'amarelo', peso: 800 },
        { id: 3, nome: 'Banana', cor: 'amarelo', peso: 100 },
        { id: 4, nome: 'Caqui', cor: 'vermelho', peso: 150 },
        { id: 5, nome: 'Carambola', cor: 'amarelo', peso: 80 },
      ],
    };
  }
}
