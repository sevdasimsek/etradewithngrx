import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cartReducer } from './store/reducers/cart-reducer';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cartReducer }),
  ],
  providers: [], 
  bootstrap: [AppComponent],
})
export class AppModule {}
