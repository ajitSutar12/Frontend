import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import { GoldsilverService } from "../../../../../shared/dropdownService/goldsilver.service";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { goldandsilverService } from "./gold-and-silver.service";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface GoldMaster {
  id:number;
    AC_ACNOTYPE:string;
    AC_TYPE:number;
  ITEM_TYPE: string;
  SUBMISSION_DATE: Date;
  BAG_RECEIPT_NO: string;
  GOLD_BOX_NO: string;
  MARGIN: number;
  ARTICLE_NAME: string;
  TOTAL_WEIGHT_GMS: number;
  CLEAR_WEIGHT_GMS: number;
  RATE: number;
  TOTAL_VALUE: number;
  REMARK: string;
  NOMINEE: string;
  NOMINEE_RELATION: string;
}

@Component({
  selector: "app-gold-and-silver",
  templateUrl: "./gold-and-silver.component.html",
  styleUrls: ["./gold-and-silver.component.scss"],
})
export class GoldAndSilverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  //passing data form child to parent
  @Output() newGoldsilverEvent = new EventEmitter<string>();
  newItemEvent(value) {
    this.newGoldsilverEvent.emit(value);
  }
   //passing data from parent to child component
   @Input() scheme:any;
   @Input() Accountno:any;
  //api
  url = environment.base_url;
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  simpleOption: Array<IOption> = this._golddrop.getCharacters();
  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  updateID: number; //variable for updating
  // Store data from backend
  goldMaster: GoldMaster[];
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  page: number;
  filterData={};
  clearvalue: any;
  ratevalue: string;
  //varaible for total value calculation
  ClearWeight:number;
  rate:number

  constructor(
    private fb: FormBuilder,
    public _goldsilverService: goldandsilverService,
    private _golddrop: GoldsilverService,
    private http: HttpClient,
    public router: Router
  ) {}

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
            this.url + "/gold-and-silver",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.goldMaster = resp.data;
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
          title: "Item Type",
          data: "ITEM_TYPE",
        },
        {
          title: "Submission Date",
          data: "SUBMISSION_DATE",
        },
        {
          title: "Bag Receipt No.",
          data: "BAG_RECEIPT_NO",
        },
        {
          title: "Gold Box No.",
          data: "GOLD_BOX_NO",
        },
        {
          title: "Margin %",
          data: "MARGIN",
        },
        {
          title: "Article Name",
          data: "ARTICLE_NAME",
        },
        {
          title: "Total Weight",
          data: "TOTAL_WEIGHT_GMS",
        },
        {
          title: "Clear Weight",
          data: "CLEAR_WEIGHT_GMS",
        },
        {
          title: "Rate",
          data: "RATE",
        },
        {
          title: "Total Value",
          data: "TOTAL_VALUE",
        },
        {
          title: "Details",
          data: "REMARK",
        },
        {
          title: "Nominee",
          data: "NOMINEE",
        },
        {
          title: "Nominee Relation",
          data: "NOMINEE_RELATION",
        },
      ],
      dom: "Blrtip",
    };

    this.runTimer();
    this.dataSub = this._golddrop.loadCharacters().subscribe((options) => {
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
      ITEM_TYPE: ["", [Validators.required]],
      SUBMISSION_DATE: ["", [Validators.required]],
      BAG_RECEIPT_NO: ["", [Validators.pattern, Validators.required]],
      GOLD_BOX_NO: ["", [Validators.pattern, Validators.required]],
      MARGIN: ["", [Validators.pattern, Validators.required]],
      ARTICLE_NAME: ["", [Validators.pattern]],
      TOTAL_WEIGHT_GMS: ["", [Validators.pattern, Validators.required]],
      CLEAR_WEIGHT_GMS: ["", [Validators.pattern, Validators.required]],
      RATE: ["", [Validators.pattern]],
      TOTAL_VALUE: ["", [Validators.pattern]],
      REMARK: ["", [Validators.pattern]],
      NOMINEE: ["", [Validators.pattern]],
      NOMINEE_RELATION: ["", [Validators.pattern, Validators.required]],
    });
  }

  submit() {
    
   
    let totalvalueid = (document.getElementById("TotalAmount")as HTMLInputElement).value;
    
    this.angForm.patchValue({
      TOTAL_VALUE:totalvalueid,
     
    });
    const formVal = this.angForm.value;
  
    const dataToSend = {
      AC_TYPE:this.scheme._value[0],
      AC_NO:this.Accountno,
      ITEM_TYPE: formVal.ITEM_TYPE,
      SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      BAG_RECEIPT_NO: formVal.BAG_RECEIPT_NO,
      GOLD_BOX_NO: formVal.GOLD_BOX_NO,
      MARGIN: formVal.MARGIN,
      ARTICLE_NAME: formVal.ARTICLE_NAME,
      TOTAL_WEIGHT_GMS: formVal.TOTAL_WEIGHT_GMS,
      CLEAR_WEIGHT_GMS: formVal.CLEAR_WEIGHT_GMS,
      RATE: formVal.RATE,
      TOTAL_VALUE: formVal.TOTAL_VALUE,
      REMARK: formVal.REMARK,
      NOMINEE: formVal.NOMINEE,
      NOMINEE_RELATION: formVal.NOMINEE_RELATION,
    };
    console.log(dataToSend);
    this._goldsilverService.postData(dataToSend).subscribe(
      (data) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        let info = []
        info.push(data.id)
        info.push("goldSilver")

        this.newItemEvent(info);
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

   //check  if margin values are below 100
checkmargin(ele:any){ 
  //check  if given value  is below 100
  console.log(ele);
  if(ele <= 100){
console.log(ele);
  }
  else{
    Swal.fire("Invalid Input", "Please insert values below 100", "error");
  }
}
  //function for edit button clicked
  editClickHandler(id: any): void {
    this.showButton = false;
    this.updateShow = true;
    this._goldsilverService.getFormData(id).subscribe((data) => {
       //sending values to parent
       let dropdown: any = {};
       dropdown.scheme = data.AC_TYPE;
       dropdown.account = data.AC_NO.toString();

      this.updateID = data.id;
      this.angForm.patchValue({
        AC_TYPE:this.scheme._value[0],
        AC_NO:this.Accountno,
        ITEM_TYPE: data.ITEM_TYPE,
        SUBMISSION_DATE: data.SUBMISSION_DATE,
        BAG_RECEIPT_NO: data.BAG_RECEIPT_NO,
        GOLD_BOX_NO: data.GOLD_BOX_NO,
        MARGIN: data.MARGIN,
        ARTICLE_NAME: data.ARTICLE_NAME,
        TOTAL_WEIGHT_GMS: data.TOTAL_WEIGHT_GMS,
        CLEAR_WEIGHT_GMS: data.CLEAR_WEIGHT_GMS,
        RATE: data.RATE,
        TOTAL_VALUE: data.TOTAL_VALUE,
        REMARK: data.REMARK,
        NOMINEE: data.NOMINEE,
        NOMINEE_RELATION: data.NOMINEE_RELATION,
      });
    });
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._goldsilverService.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    });
  }

  //function for delete button clicked
  delClickHandler(id: any): void {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete Item Type  data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._goldsilverService.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
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
