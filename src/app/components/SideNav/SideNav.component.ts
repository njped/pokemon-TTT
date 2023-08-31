import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-SideNav',
  templateUrl: './SideNav.component.html',
  styleUrls: ['./SideNav.component.css']
})

export class SideNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPlayer1() {
    this.router.navigate(['/search', 1])
  }

  goToPlayer2() {
    this.router.navigate(['/search', 2])
  }
}
