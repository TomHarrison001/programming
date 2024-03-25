import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from '../media-item-service/media-item-service.service';
import { lookupListToken } from '../providers';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent {
  // form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService) {}

  // ngOnInit() {
  //   this.form = new formBuilder.group({
  //     medium: this.formBuilder.control('Movies'),
  //     name: this.formBuilder.control('', Validators.compose([
  //       Validators.required,
  //       Validators.pattern('[\\w\\-\\s\\/]+')
  //     ])),
  //     category: this.formBuilder.control(''),
  //     year: this.formBuilder.control(''), //this.yearValidator
  //   });
  // }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear){
      return null;
    } else {
      return {year: true};
    }
  }

  onSubmit(mediaItem: any) {
    this.mediaItemService.add(mediaItem)
      .subscribe();
  }
}
