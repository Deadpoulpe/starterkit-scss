import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';

/**
 * Liste des constantes de l'application
 */
@Injectable({
  providedIn: 'root'
})
export class Constants {
  /**
   * Points d'entrée de l'API
   */
  public API_ENDPOINTS = Object.freeze({
    // Utilisation GET, POST, PUT, DELETE
    // LOGIN_ADMIN: '/auth/admin',
    // LOGIN_ADMIN: '/auth/admin',
  });

  //DATE
  public CURRENT_DATE = Date.now();

  //INFO du site
  public FRONT_URL = environment.FRONT_URL;
  public CURRENT_URL = window.location.href;
  public IMAGE_URL = this.FRONT_URL + 'assets/images/';
  public SITE_NAME = "Starterkit";
  public ORG_FUNDING_DATE = "2000";
  public FOUNDER_NAME = "John Doe";

  //CONTACT
  public CONTACT_NAME = "John Doe";
  public CONTACT_EMAIL = "john.doe@gmail.com";
  public CONTACT_PHONE = "06 05 07 08 09";
  public CONTACT_ADDRESS = "10 rue de la paix";
  public CONTACT_CITY = "Bordeaux";
  public CONTACT_CP = "33000";

  //RESEAU SOCIAUX
  public SN_FACEBOOK_LINK = "https://www.facebook.com/inst";
  public SN_INSTAGRAM_LINK = "https://www.instagram.com/";
  public SN_TWITTER_LINK = "https://twitter.com/";

  //SEO
  public SEO_SITE_TITLE = this.SITE_NAME + " : ";
  public SEO_SITE_DESCRIPTION = "Description SEO";

  //MENTIONS LEGALES
  public ML_DATE = "15/02/2021";
  public ML_ORG_FORM = "Micro Entreprise";
  public ML_ORG_CAPITAL = "NA";
  public ML_ORG_SIREN = "NA";

  //HEBERGEMENT
  public HEBERG_NAME = "NA";
  public HEBERG_ADDRESS = "NA";
  public HEBERG_PHONE = "NA";
  public HEBERG_WEB = "NA";

  //CGU
  public CGU_DATE = "15/02/2021";
  public CGU_SERVICE_WEB = [
    "partage de contenu"
  ];
}
