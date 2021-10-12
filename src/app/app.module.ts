import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharDisplayComponent } from './char-display/char-display.component';
import { FooterComponent } from './footer/footer.component';
import { FaceComponent } from './face/face.component';

@NgModule({
  declarations: [
    AppComponent,
    CharDisplayComponent,
    FooterComponent,
    FaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
