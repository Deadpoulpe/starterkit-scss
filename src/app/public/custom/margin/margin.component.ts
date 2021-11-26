import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-margin',
  templateUrl: './margin.component.html',
})
export class Margin implements OnInit {

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
    { id: "m", name: "Margin" },
    { id: "mt", name: "Margin top" },
    { id: "mb", name: "Margin bottom" },
    { id: "mr", name: "Margin rigth" },
    { id: "ml", name: "Margin left" },
    { id: "mx", name: "Margin right & left" },
    { id: "my", name: "Margin top & bottom" },
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
