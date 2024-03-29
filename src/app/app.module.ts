import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { loaderReducer } from './store/loader-reducer';
import { paginationReducer } from './store/store-pagination/store-pagination-reducer';
import { userReducer } from './store/store-user/store-user-reducer';
import { messageReducer } from './store/store-message/store-message-reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      loader: loaderReducer,
      pagination: paginationReducer,
      user: userReducer,
      message: messageReducer
    }),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
