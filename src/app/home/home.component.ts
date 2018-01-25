import { Component, OnInit  } from '@angular/core';
import {NgModule} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  mostrar: Boolean;
  constructor() {
  }

  ngOnInit() {
  }

  ocultar(): void {

    this.mostrar = true;
  }
}
