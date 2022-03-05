import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ACMasterDropdownService } from '../../../shared/dropdownService/ac-master-dropdown.service';
import {ReconciliationEntryService} from './reconciliation-entry.service'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface ReconciliationEntry {
  id: number;
  GL_AC: string;
  FROM_DATE:Date;
  TO_DATE:Date;
}
@Component({
  selector: 'app-reconciliation-entry',
  templateUrl: './reconciliation-entry.component.html',
  styleUrls: ['./reconciliation-entry.component.scss']
})
export class ReconciliationEntryComponent implements OnInit {
  formSubmitted = false;
   //api
   url = environment.base_url;
  //  Formgroup variable
   angForm: FormGroup;
  //  dropdown variables
   glaccount: any=null;
   ACMasterDropdown: any[];
   schemeACNo: any[];
   todate:any=null;
  dtExportButtonOptions: any = {};

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  

  // Store data from backend
  reconciliationentry:ReconciliationEntry[];

  // date variables
  fromdate:any=null
  minDate: Date;
  maxDate: Date;
  showButton: boolean;
  updateShow: boolean;
  newbtnShow: boolean;
  filterData: any;
  page: number;
 
  
  

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private reconciliation:ReconciliationEntryService,
    public ACMasterDropdownService:ACMasterDropdownService,
    private config: NgSelectConfig,
  ) { 
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  ngOnInit(): void {
    this.createForm()
    this.ACMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {

      this.ACMasterDropdown = data;
    })

    // Fetching Server side data
    // this.dtExportButtonOptions = {
    //   pagingType: 'full_numbers',
    //   paging: true,
    //   pageLength: 10,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTableParameters: any, callback) => {
    //     dataTableParameters.minNumber = dataTableParameters.start + 1;
    //     dataTableParameters.maxNumber =
    //       dataTableParameters.start + dataTableParameters.length;
    //     let datatableRequestParam: any;
    //     this.page = dataTableParameters.start / dataTableParameters.length;

    //     dataTableParameters.columns.forEach(element => {

    //       if (element.search.value != '') {
    //         let string = element.search.value;
    //         this.filterData[element.data] = string;
    //       } else {
    //         let getColumnName = element.data;
    //         let columnValue = element.value;
    //         if (this.filterData.hasOwnProperty(element.data)) {

    //           let value = this.filterData[getColumnName];
    //           if (columnValue != undefined || value != undefined) {
    //             delete this.filterData[element.data];
    //           }
    //         }
    //       }
    //     });
    //     dataTableParameters['filterData'] = this.filterData;
    //     this.http
    //       .post<DataTableResponse>(
    //         this.url + '/bank-other-details',
    //         dataTableParameters
    //       ).subscribe(resp => {
    //         this.reconciliationentry = resp.data;
    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsTotal,
    //           data: []
    //         });
    //       });
    //   },
    //   columnDefs: [{
    //     targets: '_all',
    //     defaultContent: ""
    //   }],
    //   columns: [
    //     // {
    //     //   title: 'Action',
    //     // },
    //     // {
    //     //   title: 'Date',
    //     //   data: ' '
    //     // },
    //     // {
    //     //   title:'Type',
    //     //   data:' '
    //     // },
    //     // {
    //     //   title:'Cheque Number',
    //     //   data:' '
    //     // },
    //     // {
    //     //   title:'Particulars',
    //     //   data:' '
    //     // },
        
    //     // {
    //     //   title:'Debit amount',
    //     //   data:' '
    //     // },
    //     // {
    //     //   title:'Credit amunt',
    //     //   data:' '
    //     // },
    //     // {
    //     //   title:'Statement Date',
    //     //   data:' '
    //     // },
        
        
    //   ],
    //   dom: 'Blrtip',
    // }
    
    
  }
  createForm(){
    this.angForm = this.fb.group({
      GL_AC:['',[Validators.required]],
      ENTRIES:[''],
      FROM_DATE:['',[Validators.required]],
      TO_DATE:['',[Validators.required]],
      WITH_DRAW:['',[Validators.required,Validators.pattern]]
    })
  }
  // Method to insert data into database through NestJS
  submit(event) {
    
    event.preventDefault();
    this.formSubmitted = true;

    
    if (this.angForm.valid) {

      const formVal = this.angForm.value;
      const dataToSend = {
        'GL_AC': formVal.AC_NO,
        'FROM_DATE': formVal.AC_MEMBTYPE,
        'TO_DATE': formVal.AC_MEMBNO,
        
      }

      this.reconciliation.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Account Created successfully!',
            html:
              '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
              '<b>ACCOUNT NO : </b>' + data.AC_NO + '<br>'
          })
          this.formSubmitted = false;
          
          // to reload after insertion of data
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload()
          });
        },
        (error) => {
          console.log(error);
        }
      );
      
      //To clear form
      this.resetForm();
      

    } else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }
  resetForm(){

  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id){

  }

  ngAfterViewInit(): void {
    //  this.ngSelect.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('#reconciliationentrytable tfoot tr').appendTo('#reconciliationentrytable thead');
        $("input", this.footer()).on("keyup change", function () {
          if (this["value"] != "") {
            that.search(this["value"]).draw();
          } else {
            that.search(this["value"]).draw();
          }
        });
      });
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


}
