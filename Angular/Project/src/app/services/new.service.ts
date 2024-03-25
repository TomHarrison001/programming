import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor() { }

  getCourses() {
    return ["1", "2", "3"];
  }
}
