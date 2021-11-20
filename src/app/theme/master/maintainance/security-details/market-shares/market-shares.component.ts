
import { Component, OnInit,ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import{marketsharesomponentservice} from'./market-shares.component.service'
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface MarketMaster {
  SUBMISSION_DATE: Date,
  CO_CODE: number,
      CO_NAME: string,
      MARKET_VALUE: number
      MARGIN: number
      SHARES:number,
      UPDATED_BY: string,
      RELEASE_DATE:Date,
      RELEASE_BY:string,
}

@Component({
  selector: 'app-market-shares',
  templateUrl: './market-shares.component.html',
  styleUrls: ['./market-shares.component.scss']
})
export class MarketSharesComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID:number;
  marketmaster:MarketMaster[];

  // For reloading angular datatable after CRUD operation
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtTrigger: Subject<any> = new Subject();
  constructor(private fb: FormBuilder,private _marketservice:marketsharesomponentservice) { this.createForm(); }
  
  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/security-details.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Co. Code',
          data: 'CO_CODE'
        }, {
          title: 'Company Name ',
          data: 'CO_NAME'
        }, {
          title: 'Market Value',
          data: 'MARKET_VALUE'
        }, {
          title: 'Margin %',
          data: 'MARGIN'
        }, {
          title: 'No. of Shares',
          data: 'SHARES'
        }, {
          title: 'Subm. Date',
          data: 'SUBMISSION_DATE'
        }, {
          title: 'Updated By',
          data: 'UPDATED_BY'
        }, {
          title: 'Release Date',
          data: 'RELEASE_DATE'
        }, {
          title: 'Release By',
          data: 'RELEASE_BY'
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

  createForm() {
    this.angForm = this.fb.group({

      SUBMISSION_DATE: ['', [Validators.required]],
      CO_CODE: ['', [Validators.pattern, Validators.required]],
      CO_NAME: ['', [Validators.pattern, Validators.required]],
      MARKET_VALUE: ['', [Validators.pattern, Validators.required]],
      MARGIN: ['', [Validators.pattern, Validators.required]],
      SHARES: ['', [Validators.pattern]],
      UPDATED_BY: ['', [Validators.pattern, Validators.required]],
      RELEASE_DATE: ['', [Validators.required]],
      RELEASE_BY: ['', [Validators.pattern, Validators.required]]
    });
  }
  submit(data:any) {
    const formVal = this.angForm.value;
    const dataToSend = {
      'SUBMISSION_DATE': formVal.SUBMISSION_DATE,
      'CO_CODE': formVal.CO_CODE,
      'CO_NAME':formVal.CO_NAME,
      'MARKET_VALUE':formVal.MARKET_VALUE,
      'MARGIN':formVal.MARGIN,
      'SHARES':formVal.SHARES,
      'UPDATED_BY':formVal.UPDATED_BY,
      'RELEASE_DATE':formVal.RELEASE_DATE,
      'RELEASE_BY':formVal.RELEASE_BY,
    
    };
    this._marketservice.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        // to reload after insertion of data
        this.rerender();
      },
      (error) => {
        console.log(error);
      }
    );
    //To clear form
    this.resetForm();
  }

  //function for edit button clicked
  editClickHandler(id: any): void {
    this.showButton = false;
    this.updateShow = true;
    this._marketservice.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        'SUBMISSION_DATE': data.SUBMISSION_DATE,
  'CO_CODE': data.CO_CODE,
  'CO_NAME': data.CO_NAME,
  'MARKET_VALUE':data.MARKET_VALUE,
  'MARGIN': data.MARGIN,
  'SHARES': data.SHARES,
  'UPDATED_BY': data.UPDATED_BY,
  'RELEASE_DATE':data.RELEASE_DATE,
  'RELEASE_BY': data.RELEASE_BY,
 
      });
    });
  }
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(id: any): void {
  
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete company code data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._marketservice.deleteData(id).subscribe((data1) => {
          this.marketmaster = data1;
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
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
  resetForm() {
    this.createForm();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}