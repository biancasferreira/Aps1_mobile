import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {CalculadoraComponent} from '../calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule, NgFor]
})
export class HistoricoComponent  implements OnInit {

  storedResult: { operation: string, result: string }[] = [];
  results: any;
  form: any;
  resultados: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}


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


  limparHistorico() {
    localStorage.removeItem('results');
    this.results = [];
  }

}
