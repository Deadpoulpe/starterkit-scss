import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-color-text',
  templateUrl: './color-text.component.html',
})
export class ColorText implements OnInit {

  elements: string[] = [
    "blue",
    "brown",
    "orange",
    "green",
    "cyan",
    "purple",
    "red",
    "yellow",
    "brown-logo",
    "pink",
    "black",
    "light-black",
    "grey",
    "light-grey",
    "white",
    "transparent",
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
