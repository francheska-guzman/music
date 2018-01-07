import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// We import { FormsModule } to be able to use, for i.e.
// the directive [(ngModel)] used in ListOfSongsComponent.
import { FormsModule } from '@angular/forms';

// Importing components.
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOfSongsComponent } from './list-of-songs/list-of-songs.component';
import { FooterComponent } from './footer/footer.component';

import { ConvertToArrowPipe } from './shared/convert-to-arrow.pipe';
import { StarComponent } from './shared/star/star.component';
import { MoreInfoComponent } from './more-info/more-info.component';

@NgModule({
  // Directives components in pipes are declared in declarations array.
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfSongsComponent,
    FooterComponent,
    ConvertToArrowPipe,
    StarComponent,
    MoreInfoComponent
  ],
  // Directives from other sources (including Angular itself) 
  // and third parties are declared here:
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
