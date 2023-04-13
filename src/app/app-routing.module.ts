import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoblistComponent } from './components/joblist/joblist.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:'registration', component: RegistrationComponent},
  {path:'afterlogin', component: JoblistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
