import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodCastComponent } from './pod-cast/pod-cast.component';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
