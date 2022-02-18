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
  courses:any;
  onFavoriteChanged(newValue :FavoriteChangedEventArgs){ //this type declaration is only for intellisense and readability
    console.log("isFavorite value:", newValue);
  }
  
  onAdd(courseName:string){
    let i = this.courses.length;
    this.courses.push({id:i++, name:courseName});
    console.log(this.courses);
  }

  onRemove(course:any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  trackCourse(id:number, course:any){
    return course ? course.id : undefined;
  }

  loadCourses(){
    this.courses = [{id: 1, name:"Physics"},
      {id: 2, name:"Biology"},
      {id: 3, name:"Math"},
      {id: 4, name:"Computer Science"},
    ];
  }

}
