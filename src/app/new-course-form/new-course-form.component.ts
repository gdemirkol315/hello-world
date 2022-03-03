import {Component} from '@angular/core';
import {AbstractControl, Form, FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({topics: new FormArray([])});

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
  }

  get topics() {
    return (this.form.get('topics') as FormArray);
  }

  removeTopic(topic: AbstractControl) {

    let index = this.topics.controls.indexOf(topic as FormControl);
    this.topics.removeAt(index);
  }

}
