import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CguComponent } from './common/cgu/cgu.component';
import { HomeComponent } from './common/home/home.component';
import { LegalNoticeComponent } from './common/legal-notice/legal-notice.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { PersonalDataComponent } from './common/personal-data/personal-data.component';
import { AlignText } from './custom/align-text/align-text.component';
import { Border } from './custom/border/border.component';
import { ColorBackground } from './custom/color-background/color-background.component';
import { ColorText } from './custom/color-texte/color-text.component';
import { Flex } from './custom/flex/flex.component';
import { Margin } from './custom/margin/margin.component';
import { Padding } from './custom/pardding/padding.component';
import { Position } from './custom/position/position.component';
import { SizeText } from './custom/size-text/size-text.component';
import { StyleText } from './custom/style-text/style-text.component';
import { Sizes } from './custom/sizes/sizes.component';
import { OtherStructure } from './custom/other-structure/other-structure.component';
import { Image } from './custom/image/image.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: HomeComponent,
  },
  {
    path: 'page-404',
    component: NotFoundComponent
  },
  {
    path: 'mentions-legales',
    component: LegalNoticeComponent
  },
  {
    path: 'conditions-generales-d-utilisation',
    component: CguComponent
  },
  {
    path: 'donnees-personnelles',
    component: PersonalDataComponent
  },
  {
    path: 'size-text',
    component: SizeText,
  },
  {
    path: 'align-text',
    component: AlignText,
  },
  {
    path: 'style-text',
    component: StyleText,
  },
  {
    path: 'color-text',
    component: ColorText,
  },
  {
    path: 'color-background',
    component: ColorBackground,
  },
  {
    path: 'margin',
    component: Margin,
  },
  {
    path: 'padding',
    component: Padding,
  },
  {
    path: 'position',
    component: Position,
  },
  {
    path: 'flex',
    component: Flex,
  },
  {
    path: 'border',
    component: Border,
  },
  {
    path: 'sizes',
    component: Sizes,
  },
  {
    path: 'other-structure',
    component: OtherStructure,
  },
  {
    path: 'image',
    component: Image,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
