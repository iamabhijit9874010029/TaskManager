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

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: { Region: string; TeamMembersCount: number; TemporarilyUnavailableMembers: number; }[] = [];
  TeamMembers: { Region: string, Members: { ID: number, Name: string, Status: string }[] }[] = [];

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

    this.Clients = ["ABC Infotech Ltd", "DEF Software Solutions", "GHI Industries"];

    this.Projects = ["Project A", "Project B", "Project C", "Project D"];

    for (let i = 2010; i <= 2025; i++) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      {
        Region: "East",
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4
      },
      {
        Region: "West",
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 2
      },
      {
        Region: "South",
        TeamMembersCount: 12,
        TemporarilyUnavailableMembers: 3
      },
      {
        Region: "North",
        TeamMembersCount: 10,
        TemporarilyUnavailableMembers: 1
      }
    ]

    this.TeamMembers = [
      {
        Region: "East",
        Members: [
          { ID: 1, Name: "Ford", Status: "Available" },
          { ID: 2, Name: "Miller", Status: "Available" },
          { ID: 3, Name: "Jones", Status: "Busy" },
          { ID: 4, Name: "James", Status: "Busy" },
        ]
      },
      {
        Region: "West",
        Members: [
          { ID: 5, Name: "Smith", Status: "Available" },
          { ID: 6, Name: "Johnson", Status: "Available" },
          { ID: 7, Name: "Brown", Status: "Busy" },
          { ID: 8, Name: "Davis", Status: "Busy" },
        ]
      },
      {
        Region: "South",
        Members: [
          { ID: 9, Name: "Wilson", Status: "Available" },
          { ID: 10, Name: "Taylor", Status: "Available" },
          { ID: 11, Name: "Anderson", Status: "Busy" },
          { ID: 12, Name: "Thomas", Status: "Busy" },
        ]
      },
      {
        Region: "North",
        Members: [
          { ID: 13, Name: "Jackson", Status: "Available" },
          { ID: 14, Name: "White", Status: "Available" },
          { ID: 15, Name: "Harris", Status: "Busy" },
          { ID: 16, Name: "Martin", Status: "Busy" },
        ]
      }
    ]
  }



  onProjectChanges($event: MouseEvent) {
    // $event.preventDefault();
    if (($event.target as HTMLElement).innerHTML === "Project A") {
      this.ProjectCost = 50000;
      this.CurrentExpenditure = 20000;
      this.AvailableFunds = 30000;
    }
    else if (($event.target as HTMLElement).innerHTML === "Project B") {
      this.ProjectCost = 70000;
      this.CurrentExpenditure = 30000;
      this.AvailableFunds = 40000;
    }
    else if (($event.target as HTMLElement).innerHTML === "Project C") {
      this.ProjectCost = 90000;
      this.CurrentExpenditure = 40000;
      this.AvailableFunds = 50000;
    }
    else if (($event.target as HTMLElement).innerHTML === "Project D") {
      this.ProjectCost = 120000;
      this.CurrentExpenditure = 50000;
      this.AvailableFunds = 70000;
    }
    else {
      this.ProjectCost = 0;
      this.CurrentExpenditure = 0;
      this.AvailableFunds = 0;
    }
    // console.log($event.target);
  }
}
