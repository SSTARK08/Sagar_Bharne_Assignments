import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  template: ` 
    <div class="top" style="margin-top:50px">
      <h2>Dashboard:</h2>
      <a routerLink="/menu" routerLinkActive="active">Menu</a><br><br><br>
      <a routerLink="/restaurant" routerLinkActive="active">Restaurant</a><br><br><br>
      <button (click)="backtohome()"><=</button>
      <button>=></button>
    <div>
 
  `,
  styles: [`
   
  
    a{
      text-decoration:none;
      text-align: center;
      background-color: lightcyan;
      width: 80%;
      margin: 0 auto;
      padding: 10px;
      font-size: 15px;
      border-radius: 25px;;
  }
    .top button{
      margin:0 20px;
      padding:5px;
      background:blue;
      color:white;
      border-radius:25px;
    }
  `
  ]
})
export class AdminComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  backtohome(){
    this.router.navigate(['/']);
  }
}
