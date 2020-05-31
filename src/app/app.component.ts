import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookappocr';
  constructor(){
    const firebaseConfig = {
      apiKey: 'AIzaSyAPjvj0M910-xU3N6ibyaoPHDF2s9lfrE8',
      authDomain: 'monagence-2631a.firebaseapp.com',
      databaseURL: 'https://monagence-2631a.firebaseio.com',
      projectId: 'monagence-2631a',
      storageBucket: 'monagence-2631a.appspot.com',
      messagingSenderId: '574319756751',
      appId: '1:574319756751:web:74bce658426df79931feba'
    };

    firebase.initializeApp(firebaseConfig);
  }
}
