import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-size-text',
  templateUrl: './size-text.component.html',
})
export class SizeText implements OnInit {

  elements: string[] = [
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
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
