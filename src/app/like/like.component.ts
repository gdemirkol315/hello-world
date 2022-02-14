import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class LikeComponent {
  @Input('isLiked') isLiked: boolean;
  @Input('likeCount') likeCount: number;


  onClick(){
    this.isLiked ? this.likeCount-- : this.likeCount++
    this.isLiked = !this.isLiked;
  }
  
}



