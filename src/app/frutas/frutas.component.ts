import { Component, OnInit } from '@angular/core';
import { Fruta } from '../fruta';
import { FrutaService } from '../fruta.service';

@Component({
  selector: 'frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css'],
})
export class FrutasComponent implements OnInit {
  frutas: Fruta[];

  constructor(private frutaService: FrutaService) {}

  private getFrutas() {
    this.frutaService.getFrutas().subscribe((frutas) => (this.frutas = frutas));
  }
  ngOnInit() {
    this.getFrutas();
  }

  adicionar(nome: string, cor: string, peso: number) {
    this.frutaService
      .criarFruta(nome, cor, peso)
      .subscribe((frutaAtual) => this.frutas.push(frutaAtual));
  }

  renomear(fruta: Fruta, novoNome: string, novaCor: string, novoPeso: number) {
    const aFruta = {
      id: fruta.id,
      nome: novoNome,
      cor: novaCor,
      peso: novoPeso,
    };

    this.frutaService.editarFruta(fruta.id, aFruta).subscribe(() => {
      this.frutas.find((fruta) => fruta.id).nome = novoNome;
      this.frutas.find((fruta) => fruta.id).cor = novaCor;
      this.frutas.find((fruta) => fruta.id).peso = novoPeso;
    });
    this.getFrutas();
  }

  remover(fruta: Fruta) {
    this.frutaService
      .deletarFruta(fruta.id)
      .subscribe(() => this.frutas.filter((umaFruta) => umaFruta !== fruta));
    this.getFrutas();
  }
}
