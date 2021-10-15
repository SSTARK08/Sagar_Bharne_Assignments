import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LogincredsService {
 
  constructor() {}

  getAdminCred(){
    return [{
      uname:'SStark08',
      pass:'Admin123'
    },
    {
      uname:'Falcon07',
      pass:'Admin12'
    },
    {
      uname:'UrDad88',
      pass:'Admin13'
    },
    {
      uname:'Soldier',
      pass:'Admin77'
    }
  ];
  
  }
}
