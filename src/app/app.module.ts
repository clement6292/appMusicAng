import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { AboutComponent } from './composants/about/about.component';
import { PageNotFoundComponent } from './composants/page-not-found/page-not-found.component';
import { AlbumComponent } from './album/album.component';
import { AsideComponent } from './aside/aside.component';
import { PaginationComponent } from './composants/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AboutComponent,
    PageNotFoundComponent,
    AlbumComponent,
    AsideComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
