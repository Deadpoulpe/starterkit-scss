import { Component, OnInit } from '@angular/core';

import { Constants } from './../../constants';

/**
 * Composant Header
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
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
