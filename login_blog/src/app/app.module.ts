import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http'
import { ArticleEffect } from './effects/article.effects';
import { ItemEffect } from './effects/item.effect'
import { StoreModule } from '@ngrx/store';
import { articleReducer } from './reducers/article.reducers';
import { itemReducer } from './reducers/item.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    EffectsModule.forRoot([
      ArticleEffect,
      ItemEffect
    ]),
    StoreModule.forRoot({
      article:articleReducer,
      item:itemReducer
    }),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
