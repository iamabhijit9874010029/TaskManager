import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class DashboardService {

  constructor() { }

  getTeamMembersSummary(): { Region: string; TeamMembersCount: number; TemporarilyUnavailableMembers: number; }[] {
    let TeamMembersSummary = [
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

    return TeamMembersSummary;
  }
}
