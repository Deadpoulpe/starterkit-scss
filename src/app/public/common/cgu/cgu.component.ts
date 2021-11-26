import { Component, OnInit } from '@angular/core';

import { Constants } from '../../../constants';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrls: ['./cgu.component.scss'],
})
export class CguComponent implements OnInit {

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
