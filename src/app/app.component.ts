import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from './contador/contador.action';
import { AppState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redux-app';

  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(state => {
      console.log(state);
      this.contador = state;
    });
  }

  incrementar() {
    this.store.dispatch( increment() );
  }

  decrementar() {
    this.store.dispatch( decrement() );
  }
}
