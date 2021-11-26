import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
})
export class Position implements OnInit {

  elements: any[] = [
    { id: "fixed", name: "Position" },
    { id: "relative", name: "Position" },
    { id: "absolute", name: "Position" },
    { id: "block", name: "Display" },
    { id: "inline-block", name: "Display" },
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
