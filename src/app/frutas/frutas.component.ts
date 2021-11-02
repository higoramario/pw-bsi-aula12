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
}
