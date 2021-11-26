import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
})
export class Flex implements OnInit {

  elements: string[] = [
    "flex",
    "flex-direction-row",
    "flex-direction-row-reverse",
    "flex-direction-column",
    "flex-direction-column-reverse",
    "flex-nowrap",
    "flex-wrap",
    "flex-wrap-reverse",
    "justify-content-flex-start",
    "justify-content-flex-end",
    "justify-content-center",
    "justify-content-space-between",
    "justify-content-space-around",
    "justify-content-space-evenly",
    "justify-content-start",
    "justify-content-end",
    "justify-content-left",
    "justify-content-right",
    "align-content-flex-start",
    "align-content-flex-end",
    "align-content-space-between",
    "align-content-space-around",
    "align-content-space-evenly",
    "align-content-stretch",
    "align-content-start",
    "align-content-end",
    "align-content-baseline",
    "align-items-stretch",
    "align-items-flex-start",
    "align-items-flex-end",
    "align-items-center",
    "align-items-baseline",
    "align-items-start",
    "align-items-end",
    "align-items-self-start",
    "align-items-self-end",
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
