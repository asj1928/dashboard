import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  menuOption = [
    {
      name: "Dashboard",
      link: "#",
      icon: "dashboard"
    },
    {
      name: "Messages",
      link: "/pages/messages",
      icon: "list"
    },
    {
      name: "Courses",
      link: "/pages/courses",
      icon: "list"
    },
    {
      name: "Teachers",
      link: "/pages/teachers",
      icon: "perm_identity"
    },
    {
      name: "Students",
      link: "/pages/students",
      icon: "people"
    },
    {
      name: "Examinations",
      link: "/pages/examinations",
      icon: "menu_book"
    },
    {
      name: "Results",
      link: "/pages/results",
      icon: "list"
    },
    {
      name: "Payments",
      link: "/pages/payments",
      icon: "payment"
    },
    {
      name: "History",
      link: "/pages/history",
      icon: "list"
    }
  ];

  ngOnInit() {
  }

}
