import { Component, OnInit } from '@angular/core';

import { Constants } from '../../constants';

/**
 * Composant Header
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],

})

export class NavComponent implements OnInit {
  menu !: number;


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

  OnClick(id: number) {
    if (this.menu === id) {
      this.menu = 0
    }
    else {
      this.menu = id;

    }
  }
  /**
   * Destruction du composant
   */
  ngOnDestroy(): void {
  }
}
