import { Component, OnInit } from '@angular/core';

import { Constants } from '../../../constants';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],

})
export class PersonalDataComponent implements OnInit {

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

