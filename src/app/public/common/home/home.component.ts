import { Component, OnInit } from '@angular/core';

import { Constants } from '../../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * Constructeur du composant
   */
  constructor(
    public constants: Constants,
  ) { }

  /**
   * Initialisation du composant
   */
  ngOnInit(): void {
  
  }

  /**
   * Destruction du composant
   */
  ngOnDestroy(): void {
  }
}
