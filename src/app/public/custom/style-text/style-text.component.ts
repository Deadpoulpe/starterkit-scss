import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-style-text',
  templateUrl: './style-text.component.html',
})
export class StyleText implements OnInit {

  elements: string[] = [
    "light",
    "normal",
    "semibold",
    "bold",
    "underline",
    "uppercase",
    "capitalize",
    "lowercase",
    "italic",
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
