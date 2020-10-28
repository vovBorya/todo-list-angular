import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import {FormsModule} from '@angular/forms';
import { ZoomDirective } from './item/zoom-directive';
import {FormatButtonLabelPipe} from './format-button-label.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    HeaderMenuComponent,
    ZoomDirective,
    FormatButtonLabelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
