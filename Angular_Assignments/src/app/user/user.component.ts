import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user',
  template: `
  <div class="top" style="margin-top:50px">
  
  <button (click)="backtohome()"><=</button>
  <button>=></button>
<div>
  `,
  styles: [`
  .top button{
    margin:0 20px;
    padding:5px;
    background:blue;
    color:white;
    border-radius:25px;
  }`]
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  backtohome(){
    this.router.navigate(['/']);
  }
}
