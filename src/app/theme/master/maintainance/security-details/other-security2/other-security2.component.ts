import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-other-security2',
  templateUrl: './other-security2.component.html',
  styleUrls: ['./other-security2.component.scss']
})
export class OtherSecurity2Component implements OnInit {

  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;
  

  message = {
    subm_date: "",
    short_details:"",
    total_value:"",
    margin:"",
    security_details:"",

  };
  
//function for edit button clicked
editClickHandler(info: any): void {
  this.message.short_details = info.short_details;
  this.message.total_value = info.total_value;
  this.message.margin = info.margin;
  this.message.subm_date = info.subm_date;
  this.message.security_details = info.security_details;
  this.showButton = false;
  this.updateShow = true;
}

//function for delete button clicked
  delClickHandler() {
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe.',
          'error'
        )
      }
    })
  }
constructor() { }

ngOnInit(): void {
  this.dtExportButtonOptions = {
    ajax: 'fake-data/security-details.json',
    columns: [
      {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
        }
      },{
      title: 'Date of Submission',
      data: 'subm_date'
    }, {
      title: 'Short Details',
      data: 'short_details'
    }, {
      title: 'Total Valuet',
      data: 'total_value'
    }, {
      title: 'Margin %',
      data: 'margin'
    }, {
      title: 'Security Details',
      data: 'security_details'
    },
  ],
    dom: "Blrtip",
    buttons: [
      'copy',
      'print',
      'excel',
      'csv'
    ],
    //row click handler code
  rowCallback: (row: Node, data: any[] | Object, index: number) => {
    const self = this;
    $('td', row).off('click');
    $('td', row).on('click', '#editbtn', () => {
      self.editClickHandler(data);
    });
    $('td', row).on('click', '#delbtn', () => {
      self.delClickHandler();
    });
    return row;
  }
  };
}


updateData() {
this.showButton = true;
this.updateShow = false;
}

}
