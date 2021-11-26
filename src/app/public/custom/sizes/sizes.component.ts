import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
})
export class Sizes implements OnInit {

  sizes: string[] = [
    "5",
    "10",
    "15",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
    "150",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
    "full",
    "auto",
  ];

  types: string[] = [
    "width",
    "height",
    "line-height",
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
