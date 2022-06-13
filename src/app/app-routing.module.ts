import { NacionaisComponent } from './components/titulos/nacionais/nacionais.component';
import { InternacionaisComponent } from './components/titulos/internacionais/internacionais.component';
import { OrestoComponent } from './components/tecnicos/oresto/oresto.component';
import { JesusComponent } from './components/tecnicos/jesus/jesus.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'tecnicos/jesus', component:JesusComponent},
  {path:'tecnicos/oresto', component:OrestoComponent},
  {path:'titulos/internacionais', component:InternacionaisComponent},
  {path:'titulos/nacionais', component:NacionaisComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
