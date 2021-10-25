import { Component, OnInit } from '@angular/core';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-reports-with-searching',
  templateUrl: './all-reports-with-searching.component.html',
  styleUrls: ['./all-reports-with-searching.component.scss']
})
export class AllReportsWithSearchingComponent implements OnInit {

  
  // dtExportButtonOptions: any = {}; //Datatable variable
 
  // dataSub: any;
  // StatementTypeService: any;
  // characters: any;
  // timeLeft: number;


     //object created to get data when row is clicked
    //  message = {
    //   Code: "",
     
    // };

  //function for delete button clicked
  // delClickHandler(info:any):void  {
  //   this.message.Code=info.Code;
  //       Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to delete Statement Code." + this.message.Code + "  data", 
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#229954',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your data has been deleted.',
  //         'success'
  //       )
  //     } else if (
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your data is safe.',
  //         'error'
  //       )
  //     }
  //   })
  // } 


  constructor() { }

  ngOnInit(): void {

    // this.dtExportButtonOptions = {
    //   ajax: 'fake-data/0.RepoDataDemo.json',
    //   columns: [
    //     {
    //       title: 'Action',
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
    //       }
    //     },
    //     {
    //       data: 'id',
    //       title: 'id'
    //     },
    //     {
    //       data: 'firstName',
    //       title: 'firstName'
    //     },
    //     {
    //       data: 'lastName',
    //       title: 'lastName'
    //     },
    //     {
    //       data: 'id',
    //       title: 'id'
    //     },
    //     {
    //       data: 'firstName',
    //       title: 'firstName'
    //     },
    //     {
    //       data: 'lastName',
    //       title: 'lastName'
    //     },
    //     {
    //       data: 'firstName',
    //       title: 'firstName'
    //     },
    //     {
    //       data: 'lastName',
    //       title: 'lastName'
    //     },
    //     {
    //       data: 'firstName',
    //       title: 'firstName'
    //     },
    //     {
    //       data: 'lastName',
    //       title: 'lastName'
    //     },{
    //       data: 'firstName',
    //       title: 'firstName'
    //     },
    //     {
    //       data: 'lastName',
    //       title: 'lastName'
    //     }
        
        
        

    //    ],
    //   dom: 'Bfrtip',
    //   buttons: [
    //     'copy',
    //     'print',
    //     'excel',
    //     'csv'
    //   ],
    //    //row click handler code
    //    rowCallback: (row: Node, data: any[] | Object, index: number) => {
    //     const self = this;
    //     $('td', row).off('click');
    //     $('td', row).on('click', '#editbtn', () => {
    //       self.editClickHandler(data);
    //     });
    //     $('td', row).on('click', '#delbtn', () => {
    //       self.delClickHandler(data);
    //     });
    //     return row;
    //   }
    //  };
    // this.runTimer();
    // this.dataSub = this.StatementTypeService.loadCharacters().subscribe((options) => {
    //   this.characters = options;
    // });
  }
  // editClickHandler(data: Object | any[]) {
  //   throw new Error('Method not implemented.');
  // }
  // runTimer() {
  //   const timer = setInterval(() => {
  //     this.timeLeft -= 1;
  //     if (this.timeLeft === 0) {
  //       clearInterval(timer);
  //     }
  //   }, 1000);
 
  // }
  

}
