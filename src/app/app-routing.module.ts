import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './composants/about/about.component';
import { InscriptionComponent } from "./composants/inscription/inscription.component";
import { PageNotFoundComponent } from './composants/page-not-found/page-not-found.component';


const routes: Routes = [
// {path:'',redirectTo:'/',pathMatch:'full'},
// {path:'about',component:AboutComponent},
// {path:'inscription/:id',component:InscriptionComponent},
// {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
