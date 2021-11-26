import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
})
export class Border implements OnInit {

  widths: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "10",
  ];

  styles: string[] = [
    "solid",
    "dotted",
    "dashed",
    "double",
    "groove",
    "ridge",
  ];

  directions: any[] = [
    { id: "border", name: "Border" },
    { id: "border-t", name: "Border top" },
    { id: "border-r", name: "Border bottom" },
    { id: "border-b", name: "Border rigth" },
    { id: "border-l", name: "Border left" },
    { id: "border-x", name: "Border right & left" },
    { id: "border-y", name: "Border top & bottom" },
  ];

  colors: string[] = [
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

  radius: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "10",
    "15",
    "20",
    "30",
    "40",
    "rond",
    "none",
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
