import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicModule } from '../public/public.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    PublicModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Le CoreModule est déjà chargé.');
    }
  }
}
