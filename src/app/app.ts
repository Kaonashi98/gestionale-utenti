import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gestione-utenti');


  // Questa è una variabile che contiene un array (lista) di oggetti
  utenti = [
    { nome: 'Mario Rossi', ruolo: 'Admin', isAttivo: true },
    { nome: 'Luca Bianchi', ruolo: 'Utente', isAttivo: false },
    { nome: 'Giulia Verdi', ruolo: 'Editor', isAttivo: true },
    { nome: 'Anna Neri', ruolo: 'Utente', isAttivo: true }
  ];
}
