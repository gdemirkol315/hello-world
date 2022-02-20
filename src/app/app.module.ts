import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './courses.service';
import {FavoriteComponent} from './favorite/favorite.component';
import {InputComponent} from './input/input.component';
import {TitleCasePipe} from './title-case.pipe';
import {PanelComponent} from './panel/panel.component';
import {LikeComponent} from './like/like.component';

import {ZippyComponent} from './zippy/zippy.component';

import {PanelSwitchComponent} from './panel-switch/panel-switch.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {FormInputComponent} from './form-input/form-input.component';
import {LowercasePipe} from './lowercase.pipe';
import {SignupFormComponent} from "./signup-form/signup-form.component";


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
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
    LowercasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    //dependency injection - singleton pattern
    //there will be one CoursesService instance which will be used
    //everywhere where it is called in our app
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
