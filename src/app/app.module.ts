import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RajuComponent } from './raju/raju.component';
import { RaniComponent } from './rani/rani.component';
import { FormsModule } from '@angular/forms';
// import { AppModuleServerTsComponent } from './app.module.server.ts/app.module.server.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    RajuComponent,
    RaniComponent,
    // AppModuleServerTsComponent
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
