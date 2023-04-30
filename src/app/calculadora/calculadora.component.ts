import { Component, EventEmitter, OnInit, Output,ChangeDetectorRef  } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class CalculadoraComponent  implements OnInit {

  number1: string = '';
  number2: string = '';
  operator: string = '';
  results: { operation: string, result: string }[] = [];
  result: string | undefined;
  form: any;
  resultados: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}


  addDigit(digit: number) {
    if (this.operator === '') {
      this.number1 += digit;
    } else {
      this.number2 += digit;
    }
  }

  addOperator(operator: string) {
    this.operator = operator;
  }

  calculate() {
    const num1 = parseInt(this.number1, 2);
    const num2 = parseInt(this.number2, 2);
    const result = num1 + num2;
    const operation = `${this.number1} + ${this.number2}`;
  
    this.results.push({ operation, result: result.toString(2) });
    localStorage.setItem('results', JSON.stringify(this.results));

    this.result = result.toString(2);
  }
  ngOnInit() {
    this.loadResults();

    // Adiciona um listener para o evento "storage" do localStorage
    window.addEventListener('storage', () => {
      this.loadResults();
    });
  }

  loadResults() {
    const storedResults = localStorage.getItem('results');
    const results = storedResults ? JSON.parse(storedResults) : [];
    this.results = results;
  }
  adicionarResultado() {
    const operation = this.form.value.operation;
    const result = eval(operation);
    const resultString = `${operation} = ${result}`;
    this.resultados.push({ operation, result });
  
    localStorage.setItem('results', JSON.stringify(this.resultados));
  
    this.form.reset();
    this.changeDetectorRef.detectChanges();
  }


  clear() {
    this.number1 = '';
    this.number2 = '';
    this.operator = '';
    this.result = '';
  }


}
