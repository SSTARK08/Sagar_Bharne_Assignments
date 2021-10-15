import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { ɵangular_packages_forms_forms_d } from '@angular/forms';
import { LogincredsService } from '../logincreds.service';

export interface Resi {
  name: string;
  position: number;
  Location: string;
  Speciality: string;
}

const ELEMENT_DATA: Resi[] = [
  {position: 1, name: 'Babu Vadapav Wala', Location : 'Mumbai', Speciality: 'Maharashtrian food'},
  {position: 2, name: 'Iyer Food', Location: 'Chennai', Speciality: 'South Indian Food'},
  {position: 3, name: 'Cheng Chop Shop', Location: 'Delhi', Speciality: 'Chinese Continental'},
  {position: 4, name: "Ici c'est Paris", Location: 'France', Speciality: 'French foods'},
];
@Component({
  selector: 'app-restaurant',
  template: `
  <form #userForm="ngForm" [class.show]="isAdmin">
  <label for="user">Username:</label>
  <input type="text" value="" name="user" [(ngModel)]="usern"><br><br>{{usern}}

  <label for="pass">Password:</label>
  <input type="password" value="" name="pass" [(ngModel)]="upass">{{upass}}<br><br>
  <input type="submit" (click)="onSubmit()" value="Submit">
</form>

<div [class.show]="!isAdmin">
<div class="top" style="margin-top:50px">
  
<button (click)="backtohome()"><=</button>
<button>=></button>
<br><br>

<div class="demo-button-container">
<button mat-raised-button (click)="addData()" class="demo-button">
  Add data
</button>
<button
    mat-raised-button
    [disabled]="!dataToDisplay.length"
    (click)="removeData()"
    class="demo-button">
  Remove data
</button>
</div>
</div>
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
<!-- Position Column -->
<ng-container matColumnDef="position">
  <th mat-header-cell *matHeaderCellDef>No.</th>
  <td mat-cell *matCellDef="let element">{{element.position}}</td>
</ng-container>

<!-- Name Column -->
<ng-container matColumnDef="name">
  <th mat-header-cell *matHeaderCellDef>Name</th>
  <td mat-cell *matCellDef="let element">{{element.name}}</td>
</ng-container>

<!-- Weight Column -->
<ng-container matColumnDef="Location">
  <th mat-header-cell *matHeaderCellDef>Location</th>
  <td mat-cell *matCellDef="let element">{{element.Location}}</td>
</ng-container>

<!-- Symbol Column -->
<ng-container matColumnDef="Speciality">
  <th mat-header-cell *matHeaderCellDef>Speciality</th>
  <td mat-cell *matCellDef="let element">{{element.Speciality}}</td>
</ng-container>

<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
</div>`,
  styles: [`

  body{
    background-img:url('/2k_stars.jpg');
  }
  .show{
    opacity:0;
  }
  
  form{
    position:relative;
    left:200px;
  }
  
button{
      margin:0 20px;
      padding:0 6px;
      font-size:13px;
      background:blue;
      color:white;
      border-radius:25px;
    }
    .demo-table {
      background-color:lightcyan;
      width: 85%;
    }
    
    .demo-button-container {
      padding-bottom: 16px;
    }
    .demo-button-container .demo-button {
      margin-left: 8px;
      padding:0 10px;
    }`]
})
export class RestaurantComponent implements OnInit {
  public isAdmin=false;
  public isResOwner=false;
  public usern='';
  public upass="";
  creds:any[]=[];
  constructor(private route:ActivatedRoute, private router:Router,private _logincreds:LogincredsService) { }

  ngOnInit(){
    this.creds=this._logincreds.getAdminCred();
    console.log(this.creds);
    console.log(this.creds[0].uname);
    
  }
  backtohome(){
    this.router.navigate(['/']);
  }

  displayedColumns: string[] = ['position', 'name', 'Location', 'Speciality'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [
      ...this.dataToDisplay,
      ELEMENT_DATA[randomElementIndex]
    ];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

  
  onSubmit(){
    for(let i in this.creds){
      if (this.usern===this.creds[i].uname && this.upass===this.creds[i].pass) {
        this.isAdmin=true;
       }
    }
    
  }
}

class ExampleDataSource extends DataSource<Resi> {
  private _dataStream = new ReplaySubject<Resi[]>();

  constructor(initialData: Resi[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Resi[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Resi[]) {
    this._dataStream.next(data);
  }
  
}
