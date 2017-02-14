import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { ProductModule } from './products/product.module'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  //external directives
  imports: [ 
      BrowserModule,      
      HttpModule,      
      ProductModule,
      AppRoutingModule
  ],
  //internal directives
  declarations: [ 
      AppComponent,
      WelcomeComponent
  ], 
  bootstrap: [ AppComponent ]
})
export class AppModule { }
