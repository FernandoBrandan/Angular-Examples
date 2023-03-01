import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  // Para usar el scroll automatico
  //npm install @angular/cdk --save

  table: any;
  hasta: any;
  resultados: any[] = [];
  error = false;

  calcular() {
    //Validar valores
    if (this.table < 1 || this.hasta < 1){
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
      return;
    }

    this.resultados = [];
    for (let i = 0; i < this.hasta; i++) {
      this.resultados.push({
        tabla: this.table,
        resultado: this.table * i,
      });
    }
    console.log(this.resultados);
  }
}
