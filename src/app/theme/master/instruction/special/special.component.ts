import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { ExucuteOnService } from '../../../../shared/elements/exucute-on.service';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import{ specialservice } from './special.service'
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";


// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface SpecialMaster {
      
  INSTRUCTION_NO: number;
  INSTRUCTION_DATE: Date;
  TRAN_ACTYPE: string;
  TRAN_ACNO: number;
  FROM_DATE: Date;
  TO_DATE: Date;
  DRCR_APPLY: string;
  IS_RESTRICT: boolean;
  DETAILS: string;
}


@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit, AfterViewInit, OnDestroy {
  angForm: FormGroup;
   //api 
   url = environment.base_url;
   // For reloading angular datatable after CRUD operation
   @ViewChild(DataTableDirective, { static: false })
   dtElement: DataTableDirective;
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();
   // Store data from backend
   specialMaster: SpecialMaster[];
     //filter variable
  filterData = {};


  //Datatable
  dtExportButtonOptions: any = {};

  excuteonOption: Array<IOption> = this.ExucuteOnService.getCharacters();
  a: Array<IOption> = this.Scheme1Service.getCharacters();
  b: Array<IOption> = this.AcountnoService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;
  //variable for checkbox and radio button 
  isIsRestrictTransactionEntry: boolean = false;
  page: number;
  updateID: any;

 

  constructor(private fb: FormBuilder, public ExucuteOnService: ExucuteOnService, public Scheme1Service: Scheme1Service, public AcountnoService: AcountnoService,    private http: HttpClient,private _special:specialservice
    ) {  }

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data
    this.dtExportButtonOptions = {
      pagingType: "full_numbers",
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;

        dataTableParameters.columns.forEach((element) => {
          if (element.search.value != "") {
            let string = element.search.value;
            this.filterData[element.data] = string;
          } else {
            let getColumnName = element.data;
            let columnValue = element.value;
            if (this.filterData.hasOwnProperty(element.data)) {
              let value = this.filterData[getColumnName];
              if (columnValue != undefined || value != undefined) {
                delete this.filterData[element.data];
              }
            }
          }
        });
        dataTableParameters["filterData"] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + "/market-shares",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.specialMaster= resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
       
        {
          title: 'Instruction No',
          data: 'INSTRUCTION_NO'
        }, {
          title: 'Date',
          data: 'INSTRUCTION_DATE'
        },
        {
          title: 'Scheme',
          data: 'TRAN_ACTYPE'
        }, {
          title: 'Account No',
          data: 'TRAN_ACNO'
        },
        {
          title: 'Start From',
          data: 'FROM_DATE'
        },
        {
          title: 'Upto Date',
          data: 'TO_DATE'
        },
       
        {
          title: 'Is Restrict Transaction Entry',
          data: 'IS_RESTRICT'
        },

        {
          title: 'Details',
          data: 'DETAILS'
        },
       
      ],
      dom: 'Blrtip',
     
    };


    this.runTimer();
    this.dataSub = this.ExucuteOnService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Scheme1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.AcountnoService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  createForm() {
    this.angForm = this.fb.group({
      INSTRUCTION_NO: ['',],
      INSTRUCTION_DATE: ['',],
      TRAN_ACTYPE: ['', [Validators.required]],
      TRAN_ACNO: ['', [Validators.required]],
      // ExecuteOn: ['', [Validators.required]], 
      FROM_DATE: ['',[Validators.required]],
      TO_DATE: ['', [ Validators.required]],
      DRCR_APPLY: ['', [Validators.required]],
      IS_RESTRICT: [''],
      DETAILS: ['', [Validators.required,Validators.pattern]],
    });
  }

  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      INSTRUCTION_NO: formVal.INSTRUCTION_NO,
      INSTRUCTION_DATE: formVal.INSTRUCTION_DATE,
      TRAN_ACTYPE: formVal.TRAN_ACTYPE,
      TRAN_ACNO: formVal.TRAN_ACNO,
      FROM_DATE: formVal.FROM_DATE,
      TO_DATE: formVal.TO_DATE,
      DRCR_APPLY: formVal.DRCR_APPLY,
      IS_RESTRICT: formVal.IS_RESTRICT,
      DETAILS: formVal.DETAILS,
    };
    this._special.postData(dataToSend).subscribe(
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
  /**
* @editClickHandler function for edit button clicked
*/

  editClickHandler(id: any): void {
    this.showButton = false;
    this.updateShow = true;
    this._special.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        INSTRUCTION_NO: data.INSTRUCTION_NO,
        INSTRUCTION_DATE: data.INSTRUCTION_DATE,
        TRAN_ACTYPE: data.TRAN_ACTYPE,
        TRAN_ACNO: data.TRAN_ACNO,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
        DRCR_APPLY: data.DRCR_APPLY,
        IS_RESTRICT: data.IS_RESTRICT,
        DETAILS: data.DETAILS,
      });
    });
  }

  /**
  * @updateData function for update data 
  */
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._special.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    });
  }

  /**
  * @delClickHandler function for delete button 
    @Swal sweetalert2
    @Swal.fire open a modal window to display message
  */
  delClickHandler(id: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete  Special Instruction  data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      /* run code if our result  isConfirmed function Swal.fire open a modal window to display message
      else if result is dismiss then it cancel and open a modal window to display cancel message
       */
      if (result.isConfirmed) {
        this._special.deleteData(id).subscribe((data1) => {
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
  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
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
  // Reset Function
  resetForm() {
    this.createForm();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
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
