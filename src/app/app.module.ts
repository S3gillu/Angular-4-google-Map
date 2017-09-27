import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { App } from "./app.component";
@NgModule({
  declarations: [
    App
  ],
  imports: [
     AgmCoreModule.forRoot({
     
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [App],
  bootstrap: [App]
})
export class AppModule { }
