import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './components/new.component';
import { NewService } from './services/new.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MediaItemComponent } from './media/media-item/media-item.component';
import { MediaItemFormComponent } from './media/media-item-form/media-item-form.component';
import { MediaItemListComponent } from './media/media-item-list/media-item-list.component';
import { FavouriteDirective } from './media/favourite.directive';
import { CategoryListPipe } from './media/category-list.pipe';
import { MockXhrBackend } from './media/mock-xhr-backend';
import { lookupListToken, lookupLists } from './media/providers';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    MediaItemComponent,
    MediaItemFormComponent,
    MediaItemListComponent,
    FavouriteDirective,
    CategoryListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    NewService,
    { provide: HttpXhrBackend, useClass: MockXhrBackend}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
