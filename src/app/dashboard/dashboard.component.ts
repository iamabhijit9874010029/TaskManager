import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation?: string;
  Username?: string;
  NoOfTeamMembers?: number;
  TotalCostOfAllProjects?: number;
  PendingTasks?: number;
  UpComingProjects?: number;
  ProjectCost?: number;
  CurrentExpenditure?: number;
  AvailableFunds?: number;

  ngOnInit() {
    this.Designation = "Project Manager";
    this.Username = "John Doe";
    this.NoOfTeamMembers = 5;
    this.TotalCostOfAllProjects = 100000;
    this.PendingTasks = 3;
    this.UpComingProjects = 2;
    this.ProjectCost = 50000;
    this.CurrentExpenditure = 20000;
    this.AvailableFunds = 30000;
  }
}
