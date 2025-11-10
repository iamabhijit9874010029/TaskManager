import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { LoginComponent } from './login/login.component';
import { CanActiveGuardService } from './can-active-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login on empty path
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[CanActiveGuardService] },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent, canActivate:[CanActiveGuardService] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Use hash-based routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
