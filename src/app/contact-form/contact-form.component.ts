import {Component} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  minLength: number = 3;
  chosenContactMethod: number;
  contactMethods = [{id: 1, name: 'E-mail'},
    {id: 2, name: 'SMS'},
    {id: 3, name: 'Phone call'}];

  submit(f: any) {
    console.log(f);
    console.log(f.value);
    // f.value is a json representation of our form
    // we can send this to an API
  }
}
