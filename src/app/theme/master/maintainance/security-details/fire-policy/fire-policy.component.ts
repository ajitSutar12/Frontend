import { Component, OnInit,ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import{firepolicycomponentservice} from "./fire-policy.component.service"
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
interface FireMaster {
  SUBMISSION_DATE: Date,
  POLICY_DUE_DATE: Date,
  POLICY_NO:string,
  POLICY_AMT: number,
  POLICY_NATURE:string,
  INSU_CO_CODE: number,
  ADDRESS: string,
  CITY: string,
  PREMIUM: number,
  PREMIUM_DUE_DATE: Date,
}
@Component({
  selector: 'app-fire-policy',
  templateUrl: './fire-policy.component.html',
  styleUrls: ['./fire-policy.component.scss']
})

export class FirePolicyComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID:number;
  firemaster:FireMaster[];
 // For reloading angular datatable after CRUD operation
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtTrigger: Subject<any> = new Subject();


  constructor(private fb: FormBuilder,private _fire:firepolicycomponentservice) { this.createForm(); }

 
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
          title: 'Submission Date',
          data: 'SUBMISSION_DATE'
        }, {
          title: 'Policy Due Date',
          data: 'POLICY_DUE_DATE'
        }, {
          title: 'Policy No.',
          data: 'POLICY_NO'
        }, {
          title: 'Policy Amount',
          data: 'POLICY_AMT'
        }, {
          title: 'Policy Nature',
          data: 'POLICY_NATURE'
        }, {
          title: 'Insurance Code',
          data: 'INSU_CO_CODE'
        }, {
          title: 'Address',
          data: 'ADDRESS'
        }, {
          title: 'City',
          data: 'CITY'
        }, {
          title: 'Premium Amount',
          data: 'PREMIUM'
        }, {
          title: 'Premium Due Date',
          data: 'PREMIUM_DUE_DATE'
        },
      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
    //   //row click handler code
    //   rowCallback: (row: Node, data: any[] | Object, index: number) => {
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
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      SUBMISSION_DATE: ['', [Validators.required]],
      POLICY_DUE_DATE: ['', [Validators.required]],
      POLICY_NO: ['', [Validators.pattern, Validators.required]],
      POLICY_AMT: ['', [Validators.pattern, Validators.required]],
      POLICY_NATURE: ['', [Validators.pattern, Validators.required]],
      INSU_CO_CODE: ['', [Validators.pattern, Validators.required]],
      CITY: ['', [Validators.pattern, Validators.required]],
      PREMIUM: ['', [Validators.pattern, Validators.required]],
      PREMIUM_DUE_DATE: ['', [Validators.required]],
      ADDRESS: ['', [Validators.pattern]]
    });
  }

  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'SUBMISSION_DATE': formVal.SUBMISSION_DATE,
      'POLICY_DUE_DATE': formVal.POLICY_DUE_DATE,
      'POLICY_NO':formVal.POLICY_NO,
      'POLICY_AMT':formVal.POLICY_AMT,
      'POLICY_NATURE':formVal.POLICY_NATURE,
      'INSU_CO_CODE':formVal.INSU_CO_CODE,
      'CITY':formVal.CITY,
      'PREMIUM':formVal.PREMIUM,
      'PREMIUM_DUE_DATE':formVal.PREMIUM_DUE_DATE,
      'ADDRESS':formVal.ADDRESS,
    };
    this._fire.postData(dataToSend).subscribe(
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
    this._fire.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        'SUBMISSION_DATE': data.SUBMISSION_DATE,
  'POLICY_DUE_DATE': data.POLICY_DUE_DATE,
  'POLICY_NO': data.POLICY_NO,
  'POLICY_AMT':data.POLICY_AMT,
  'POLICY_NATURE': data.POLICY_NATURE,
  'INSU_CO_CODE': data.INSU_CO_CODE,
  'CITY': data.CITY,
  'PREMIUM':data.PREMIUM,
  'PREMIUM_DUE_DATE': data.PREMIUM_DUE_DATE,
 'ADDRESS': data.ADDRESS,
      });
    });
  }
  
  updateData() {
 
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this._fire.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    })
  }

  //function for delete button clicked
  delClickHandler(id: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Submission Date data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._fire.deleteData(id).subscribe((data1) => {
          this.firemaster = data1;
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
