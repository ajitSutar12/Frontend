import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import { SchemeCodeService } from "../../../../shared/elements/scheme-code.service";
import { AcountnoService } from "../../../../shared/elements/acountno.service";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { overdraftservice } from "./over-draft.service";
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
interface OverMaster {
  AC_TYPE: string;
  AC_NO: number;
  AC_SODAMT: string;
  AC_ODAMT: number;
  AC_ODDAYS: number;
  AC_ODDATE: Date;
}
@Component({
  selector: "app-over-draft",
  templateUrl: "./over-draft.component.html",
  styleUrls: ["./over-draft.component.scss"],
})
export class OverDraftComponent implements OnInit {
  //api
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  overMaster: OverMaster[];

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  a: Array<IOption> = this.SchemeCodeService.getCharacters();
  b: Array<IOption> = this.AcountnoService.getCharacters();

  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;

  private dataSub: Subscription = null;

  PeriodicallyOverDraftTrue = true;
  TemporaryOverDraftTrue = false;

  showButton: boolean = true;
  updateShow: boolean = false;
  page: number;

  constructor(
    private fb: FormBuilder,
    public SchemeCodeService: SchemeCodeService,
    public AcountnoService: AcountnoService,
    private _overdraft: overdraftservice,
    private http: HttpClient
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
            this.url + "/market-shares",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.overMaster = resp.data;
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
          title: "Scheme Code",
          data: "AC_TYPE",
        },
        {
          title: "Account No",
          data: "AC_NO",
        },
        {
          title: "Account No",
          data: "AC_NO",
        },
      ],
      dom: "Blrtip",
    };

    this.dataSub = this.SchemeCodeService.loadCharacters().subscribe(
      (options) => {
        this.characters = options;
      }
    );
    this.dataSub = this.AcountnoService.loadCharacters().subscribe(
      (options) => {
        this.characters = options;
      }
    );
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
      AC_TYPE: ["", [Validators.required]],
      AC_NO: ["", [Validators.required]],
      AC_SODAMT: [""],
      AC_ODAMT: ["", [Validators.pattern, Validators.required]],
      AC_ODDAYS: ["", [Validators.pattern, Validators.required]],
      AC_ODDATE: ["", [Validators.required]],
      // Date: ['', [Validators.required]]
    });
  }

  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      AC_TYPE: formVal.AC_TYPE,
      AC_NO: formVal.AC_NO,
      AC_SODAMT: formVal.AC_SODAMT,
      AC_ODAMT: formVal.AC_ODAMT,
      AC_ODDAYS: formVal.AC_ODDAYS,
      AC_ODDATE: formVal.AC_ODDATE,
    };
    this._overdraft.postData(dataToSend).subscribe(
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

  //  editClickHandler function for edit button clicked
  editClickHandler(id: any): void {
    this.showButton = false;
    this.updateShow = true;
    this._overdraft.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        AC_TYPE: data.AC_TYPE,
        AC_NO: data.AC_NO,
        AC_SODAMT: data.AC_SODAMT,
        AC_ODAMT: data.AC_ODAMT,
        AC_ODDAYS: data.AC_ODDAYS,
        AC_ODDATE: data.AC_ODDATE,
      });
    });
  }

  // updateData function for update data
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._overdraft.updateData(data).subscribe(() => {
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
      title: "Are you sure?",
      text: "Do you want to delete Over Draft data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      /* run code if our result  isConfirmed function Swal.fire open a modal window to display message
      else if result is dismiss then it cancel and open a modal window to display cancel message
       */
      if (result.isConfirmed) {
        this._overdraft.deleteData(id).subscribe((data1) => {
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

  OpenLink(val) {
    //
    if (val == 1) {
      this.PeriodicallyOverDraftTrue = true;
      this.TemporaryOverDraftTrue = false;
    }
    if (val == 2) {
      this.PeriodicallyOverDraftTrue = false;
      this.TemporaryOverDraftTrue = true;
    }
  }
}
