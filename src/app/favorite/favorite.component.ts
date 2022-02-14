import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean = false;
  @Output() change = new EventEmitter();
  // input decorator can be used without supplying an argument, then it takes
  // the name of the variable. However 'isFavorite' magic string in input 
  // decorator is useful in this case beacause if we change variable name our
  // app will not be efected from it.

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite=!this.isFavorite;
    this.change.emit();
  }

}
