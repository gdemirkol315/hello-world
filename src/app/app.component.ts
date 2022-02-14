import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hello-world';
  post = {
    title: this.title,
    isLiked: true,
    likeCount: 100
  }

  onFavoriteChanged(newValue :FavoriteChangedEventArgs){ //this type declaration is only for intellisense and readability
    console.log("isFavorite value:", newValue);
  }

}
