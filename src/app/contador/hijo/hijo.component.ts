import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { divide, multiply } from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  multiplicar() {
    this.store.dispatch(multiply({numero: 3}));
  }

  dividir() {
    this.store.dispatch(divide({numero: 2}));
  }
}
