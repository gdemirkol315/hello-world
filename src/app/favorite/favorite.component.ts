import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  @Input('isFavorite') isFavorite: boolean = false;
  @Output() change = new EventEmitter();
  // input decorator can be used without supplying an argument, then it takes
  // the name of the variable. However 'isFavorite' magic string in input 
  // decorator is useful in this case beacause if we change variable name our
  // app will not be efected from it.

  onClick(){
    this.isFavorite=!this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs{
  newValue:boolean;
}
