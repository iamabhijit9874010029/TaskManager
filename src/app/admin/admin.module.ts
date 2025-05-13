import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule, //AppModule does not require CommonModule because it already imports BrowserModule, which includes all the features of CommonModule (and more) Only import BrowserModule once, in the root AppModule. All feature modules (like AdminModule, UserModule, etc.) should import CommonModule, not BrowserModule.
  ],
  exports: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ],
  providers:[
    DashboardService
  ]
})
export class AdminModule { }
