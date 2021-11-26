import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';

import { SharedModule } from '../shared/shared.module';
import { CguComponent } from './common/cgu/cgu.component';
import { HomeComponent } from './common/home/home.component';
import { LegalNoticeComponent } from './common/legal-notice/legal-notice.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { PublicRoutingModule } from './public-routing.module';
import { PersonalDataComponent } from './common/personal-data/personal-data.component';
import { AlignText } from './custom/align-text/align-text.component';
import { ColorBackground } from './custom/color-background/color-background.component';
import { ColorText } from './custom/color-texte/color-text.component';
import { SizeText } from './custom/size-text/size-text.component';
import { StyleText } from './custom/style-text/style-text.component';
import { Margin } from './custom/margin/margin.component';
import { Padding } from './custom/pardding/padding.component';
import { Position } from './custom/position/position.component';
import { Flex } from './custom/flex/flex.component';
import { Border } from './custom/border/border.component';
import { Sizes } from './custom/sizes/sizes.component';
import { OtherStructure } from './custom/other-structure/other-structure.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    CguComponent,
    LegalNoticeComponent,
    PersonalDataComponent,
    AlignText,
    ColorBackground,
    ColorText,
    SizeText,
    StyleText,
    Margin,
    Padding,
    Position,
    Flex,
    Border,
    Sizes,
    OtherStructure
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ClipboardModule,
  ]
})
export class PublicModule { }
