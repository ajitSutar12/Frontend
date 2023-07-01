import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-td-recipt-series-master',
  templateUrl: './td-recipt-series-master.component.html',
  styleUrls: ['./td-recipt-series-master.component.scss']
})
export class TdReciptSeriesMasterComponent implements OnInit {

  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  
 
  message = {
    PurposeCode: "",
    Description: "",
   name:""
    
  };

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.PurposeCode = info.PurposeCode;
    this.message.Description = info.Description;
    this.message.name=info.name;
    
    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    // this.form.reset();
  }

  

  //function for delete button clicked
delClickHandler(info:any):void  {
  this.message.name=info.name;
      Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to delete name." + this.message.name + "  data", 
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
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' +'<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Position',
        data: 'position'
      }, {
        title: 'Office',
        data: 'office'
      }, {
        title: 'Age',
        data: 'age'
      }, {
        title: 'Start Date',
        data: 'date'
      }, {
        title: 'Salary',
        data: 'salary'
      }],
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
        self.delClickHandler(data);
      });
      return row;
    }
    };
    
  }
}
