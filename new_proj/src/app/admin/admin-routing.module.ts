import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


const routes: Routes = [
  {path: 'adminHome', component:AdminHomeComponent},
  {path: 'adminlogin',component:AdminLoginComponent},
  {path: 'signUp', component: AdminSignUpComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
