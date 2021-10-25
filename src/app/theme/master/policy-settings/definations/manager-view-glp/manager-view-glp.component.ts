import { Component, OnInit } from '@angular/core';
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
  selector: 'app-manager-view-glp',
  templateUrl: './manager-view-glp.component.html',
  styleUrls: ['./manager-view-glp.component.scss']
})
export class ManagerViewGLPComponent implements OnInit {

  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;
  

  message = {
    scheme_type: "",
    int_category: "",
    srno: ""
  };

//function for edit button clicked
  editClickHandler(info: any): void {
    this.message.scheme_type = info.scheme_type;
    this.message.int_category = info.int_category;
    this.message.srno=info.srno;

    this.showButton = false;
    this.updateShow = true;
  }

   //function for delete button clicked
delClickHandler(info:any):void  {
  this.message.srno=info.srno;
      Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to delete srno." + this.message.srno + "  data", 
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#229954',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your data has been deleted.',
        'success'
      )
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire(
        'Cancelled',
        'Your data is safe.',
        'error'
      )
    }
  })
}
  constructor() { }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/manager-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },{
          title: 'Sr. No',
          data: 'srno'
        }, {
          title: 'Type',
          data: 'type'
        }, {
          title: 'Statement Code',
          data: 'statementCode'
        }, {
          title: 'Description',
          data: 'description'
        }, {
          title: '% to W capital',
          data: 'w_capital'
        }, {
          title: 'View',
          data: 'view'
        },
    ],
      dom: 'Bfrtip',
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
      self.delClickHandler(data);
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
