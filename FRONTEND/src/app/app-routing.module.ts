import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {CatalogueComponent} from "./catalog/catalogue/catalogue.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'client', loadChildren: () => import('./client/form-client/client.module').then(m => m.ClientModule) },
  { path: 'catalogue', loadChildren: () => import('./catalog/catalogue/catalogue.module').then(m => m.CatalogueModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
