import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { JesusComponent } from './components/tecnicos/jesus/jesus.component';
import { OrestoComponent } from './components/tecnicos/oresto/oresto.component';
import { NacionaisComponent } from './components/titulos/nacionais/nacionais.component';
import { InternacionaisComponent } from './components/titulos/internacionais/internacionais.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    JesusComponent,
    OrestoComponent,
    NacionaisComponent,
    InternacionaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
