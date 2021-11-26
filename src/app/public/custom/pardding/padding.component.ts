import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-padding',
  templateUrl: './padding.component.html',
})
export class Padding implements OnInit {

  elements: string[] = [
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
    "auto",
  ];

  directions: any[] = [
    { id: "p", name: "Padding" },
    { id: "pt", name: "Padding top" },
    { id: "pb", name: "Padding bottom" },
    { id: "pr", name: "Padding rigth" },
    { id: "pl", name: "Padding left" },
    { id: "px", name: "Padding right & left" },
    { id: "py", name: "Padding top & bottom" },
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
