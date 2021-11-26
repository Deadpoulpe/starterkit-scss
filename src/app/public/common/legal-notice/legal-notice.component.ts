import { Component, OnInit } from '@angular/core';

import { Constants } from '../../../constants';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent implements OnInit {

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
