import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from './createstudent.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.scss'],
})

export class CreatestudentComponent implements OnInit {
    public student = {
        name: '',
        email: '',
        department: '',
        college: '',
        place: '',
    }

    constructor (
        private createstudentService: CreatestudentService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createstudentService.GpCreate(this.student).subscribe(data => {
            this.student.name = ''
 	 	this.student.email = ''
 	 	this.student.department = ''
 	 	this.student.college = ''
 	 	this.student.place = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}