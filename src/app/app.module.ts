import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './services/courses.service';
import {FavoriteComponent} from './favorite/favorite.component';
import {InputComponent} from './input/input.component';
import {TitleCasePipe} from './common/pipes/title-case.pipe';
import {PanelComponent} from './panel/panel.component';
import {LikeComponent} from './like/like.component';

import {ZippyComponent} from './zippy/zippy.component';

import {PanelSwitchComponent} from './panel-switch/panel-switch.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {FormInputComponent} from './form-input/form-input.component';
import {LowercasePipe} from './common/pipes/lowercase.pipe';
import {SignupFormComponent} from "./signup-form/signup-form.component";
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import {PostsComponent} from './posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    InputComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    PanelSwitchComponent,
    ContactFormComponent,
    SignupFormComponent,
    FormInputComponent,
    LowercasePipe,
    NewCourseFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //dependency injection - singleton pattern
    //there will be one CoursesService instance which will be used
    //everywhere where it is called in our app
    CoursesService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
