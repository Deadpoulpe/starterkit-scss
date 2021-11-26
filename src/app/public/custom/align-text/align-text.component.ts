import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-align-text',
  templateUrl: './align-text.component.html',
})
export class AlignText implements OnInit {

  elements: string[] = [
    "left",
    "right",
    "center",
    "justify",
  ];

  /**
   * Constructeur du composant
   */
  constructor(
    public constants: Constants,
    public copyService: CopyService,
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
