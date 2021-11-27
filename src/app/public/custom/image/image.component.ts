import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
})
export class Image implements OnInit {

  elements: any[] = [
    { id: "sm-square", width: "50", height: "50" },
    { id: "md-square", width: "100", height: "100" },
    { id: "lg-square", width: "200", height: "200" },
    { id: "xl-square", width: "300", height: "300" },
    { id: "xxl-square", width: "400", height: "400" },
    { id: "sm-rectangular", width: "100", height: "50" },
    { id: "md-rectangular", width: "200", height: "100" },
    { id: "lg-rectangular", width: "400", height: "200" },
    { id: "xl-rectangular", width: "600", height: "300" },
    { id: "xxl-rectangular", width: "800", height: "400" },
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
