import { Component, OnInit } from '@angular/core';

import { Constants } from '../../../constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {

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
