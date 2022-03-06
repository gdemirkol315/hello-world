import {Component, Input, OnInit} from '@angular/core';
import {LowercasePipe} from "../common/pipes/lowercase.pipe";

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input('name') name: string;
  @Input('type') type: string;
  @Input('pattern') pattern: string;
  @Input('minLength') minLength: string;
  @Input('maxLength') maxLength: string;
  @Input('isRequired') isRequired: string = 'false';
  id: string;

  ngOnInit() {
    this.id = this.name.replace(" ", "");
  }

}
