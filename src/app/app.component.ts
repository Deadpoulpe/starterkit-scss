import { Component, OnInit } from '@angular/core';

import { Constants } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/**
 * Composant principal
 */
export class AppComponent implements OnInit {
  /**
   * Constructeur du composant
   */
  constructor(
    public constants: Constants,
  ) { }

  /**
   * Initialisation du composant
   */
  ngOnInit(): void {
    let dataStructured = JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": this.constants.SITE_NAME,
        "legalName": this.constants.SITE_NAME,
        "url": this.constants.FRONT_URL,
        "logo": this.constants.IMAGE_URL + "logo.png",
        "foundingDate": this.constants.ORG_FUNDING_DATE,
        "founders": [
          {
            "@type": "Person",
            "name": this.constants.FOUNDER_NAME,
          }],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": this.constants.CONTACT_ADDRESS,
          "addressLocality": this.constants.CONTACT_CITY,
          "postalCode": this.constants.CONTACT_CP,
          "addressCountry": "FR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": this.constants.CONTACT_PHONE,
          "email": this.constants.CONTACT_EMAIL
        },
        "sameAs": [
          this.constants.SN_FACEBOOK_LINK,
          this.constants.SN_INSTAGRAM_LINK,
          this.constants.SN_TWITTER_LINK,
        ]
      }
    );
    let script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = dataStructured;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  /**
   * Destruction du composant
   */
  ngOnDestroy(): void {
  }
}
