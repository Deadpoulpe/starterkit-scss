import { Component, OnInit } from '@angular/core';

import { Constants } from './../../constants';

/**
 * Composant Footer
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
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
