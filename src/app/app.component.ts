import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Unidad 2 - Ejercicio 1';
  subtitulo = "Calculadora";

  valor1: number;
  valor2: number;
  resultado: number;

  constructor() {
    this.resultado = 0;
  }

  sumar(): void {
    this.resultado = +this.valor1 + +this.valor2;
  }

  restar(): void {
    this.resultado = +this.valor1 - +this.valor2;
  }

  multiplicar(): void {
    this.resultado = +this.valor1 * +this.valor2;
  }

  dividir(): void {
    this.resultado = +this.valor1 / +this.valor2;
  }

}
