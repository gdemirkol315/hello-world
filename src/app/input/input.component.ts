import {TitleCasePipe} from '../common/pipes/title-case.pipe';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  title: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }


}
