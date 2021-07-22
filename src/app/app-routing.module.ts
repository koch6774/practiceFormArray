import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobFormComponent } from './job-form/job-form.component';


const routes: Routes = [
  { path:'form', component:JobFormComponent },
  { path: '',  redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
