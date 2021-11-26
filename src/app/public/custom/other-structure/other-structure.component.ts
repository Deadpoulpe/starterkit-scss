import { Component, OnInit } from '@angular/core';

import { CopyService } from 'src/app/core/services/copy.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-other-structure',
  templateUrl: './other-structure.component.html',
})
export class OtherStructure implements OnInit {

  elements: any[] = [
    { id: "hidden", name: "Rend l'élément invisible" },
    { id: "visible", name: "Rend l'élément visible" },
    { id: "no-selection", name: "Supprime la sélection de l'élément" },
    { id: "selection", name: "Active la sélection de l'élément" },
    { id: "no-scroll", name: "Empêche le scroll sur la page" },
    { id: "inactive", name: "Empêche le clic" },
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
