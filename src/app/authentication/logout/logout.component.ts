import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    axios.get('http://localhost:3000/logout')
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => { console.log(error) });
  }
}
