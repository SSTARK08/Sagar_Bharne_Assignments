import { Component, ForwardRefFn, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { ɵangular_packages_forms_forms_d } from '@angular/forms';

export interface Menui {
  name: string;
  position: number;
  Serves: number;
  Price: number;
}

const ELEMENT_DATA: Menui[] = [
  {position: 1, name: 'Vadapav', Serves : 2, Price: 30},
  {position: 2, name: 'Dosa', Serves: 1, Price: 55},
  {position: 3, name: 'Chicken69', Serves: 3, Price: 130},
  {position: 4, name: 'Ratatouille', Serves: 1, Price: 200},
];

@Component({
  selector: 'app-menu',
  template: `
<form #userForm="ngForm">
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
<ng-container matColumnDef="Serves">
  <th mat-header-cell *matHeaderCellDef>Serves</th>
  <td mat-cell *matCellDef="let element">{{element.Serves}}</td>
</ng-container>

<!-- Symbol Column -->
<ng-container matColumnDef="Price">
  <th mat-header-cell *matHeaderCellDef>Price</th>
  <td mat-cell *matCellDef="let element">{{element.Price | currency:'INR'}}</td>
</ng-container>

<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
</div>
  

  `,
  styles: [`
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
  }
  `]
})

export class MenuComponent implements OnInit {
  public isAdmin=false;
  public usern="";
  public upass="";
  public cred={
    uname:'SStark08',
    pass:'Admin123'
  }
  constructor(private route:ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
  }
  backtohome(){
    this.router.navigate(['/']);
  }

  displayedColumns: string[] = ['position', 'name', 'Serves', 'Price'];
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
    if (this.usern===this.cred.uname && this.upass===this.cred.pass) {
      this.isAdmin=true;
    }
  }
  
}




class ExampleDataSource extends DataSource<Menui> {
  private _dataStream = new ReplaySubject<Menui[]>();

  constructor(initialData: Menui[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Menui[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Menui[]) {
    this._dataStream.next(data);
  }
  
}
