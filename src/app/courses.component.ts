import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>     
        <button (click)="onSave($event)">Save</button> 
    `   
})


export class CoursesComponent {
    title = 'List of Courses';
    courses = [];

    // logic for calling an HTTP service
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    
    onSave($event) {
        console.log('button clicked', $event);
    }
    
}