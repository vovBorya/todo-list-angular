import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ZoomDirective } from './item/zoom-directive';
import {FormatButtonLabelPipe} from './format-button-label.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactFormComponent } from './react-form/react-form.component';
import { TableComponent } from './table/table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    ReactFormComponent,
    HeaderMenuComponent,
    ZoomDirective,
    FormatButtonLabelPipe,
    ReactFormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
