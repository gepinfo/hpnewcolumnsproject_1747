import { Component, OnInit } from '@angular/core';
import { GetallstudentService } from './getallstudent.service';

@Component({
  selector: 'app-getallstudent',
  templateUrl: './getallstudent.component.html',
  styleUrls: ['./getallstudent.component.scss'],
})

export class GetallstudentComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Email', field: 'email'  },{ headerName: 'Department', field: 'department'  },{ headerName: 'College', field: 'college'  },{ headerName: 'Place', field: 'place'  },];
    public student = {
        name: '',
        email: '',
        department: '',
        college: '',
        place: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallstudentService: GetallstudentService,
    ) { }

    ngOnInit() {
    }
}