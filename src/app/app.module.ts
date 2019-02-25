import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({  // Combine Multiple reducer
        tutorial : reducer,  // assign reducer from tutorial reducer 
        // reducerSecond: secondReducer  
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
