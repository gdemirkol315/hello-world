import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', //works like css to <courses> refer courses to <div class="courses"> refer ".courses" etc...
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}