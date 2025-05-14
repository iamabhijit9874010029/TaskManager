import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule, //AppModule does not require CommonModule because it already imports BrowserModule, which includes all the features of CommonModule (and more) Only import BrowserModule once, in the root AppModule. All feature modules (like AdminModule, UserModule, etc.) should import CommonModule, not BrowserModule.
    HttpClientModule
  ],
  exports: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  providers: [
    DashboardService
  ]
})
export class AdminModule { }
