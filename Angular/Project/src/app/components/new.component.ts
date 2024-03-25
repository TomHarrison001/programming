import { Component } from '@angular/core';
import { NewService } from '../services/new.service';

@Component({
  selector: 'selector',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  title = "New Component";
  courses;

  constructor(service: NewService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
