import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { overdraftservice } from './over-draft.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import Swal from "sweetalert2";
import { FormGroup, FormBuilder, Validators, FormControl, } from "@angular/forms";

// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { NgSelectComponent } from '@ng-select/ng-select'
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
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
export class OverDraftComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;

  @ViewChild('PeriodicAmount') PeriodicAmount: ElementRef;
  @ViewChild('tempAmount') tempAmount: ElementRef;
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
  acno
  allScheme // all scheme
  schemeACNo //account no 
  ngscheme: any = null

  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;

  //  for Date
  // effectdate: any = null
  maxDate: any;
  minDate: Date;

  private dataSub: Subscription = null;

  PeriodicallyOverDraftTrue: boolean = true;
  TemporaryOverDraftTrue: boolean = false;
  periodoverdraft: boolean = false

  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = true;
  page: number;

  bankAcno
  actype
  branch_code
  ngBranch: any = null;

  constructor(
    private fb: FormBuilder,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _overdraft: overdraftservice,
    private http: HttpClient,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private ownbranchMasterService: OwnbranchMasterService
  ) {
    // this.maxDate = new Date();
    // this.minDate = new Date();
    // this.minDate.setDate(this.minDate.getDate() - 1);
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
    })
  }

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data

    // this.dtExportButtonOptions = {
    //   pagingType: "full_numbers",
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

    //     dataTableParameters.columns.forEach((element) => {
    //       if (element.search.value != "") {
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
    //     dataTableParameters["filterData"] = this.filterData;
    //     this.http
    //       .post<DataTableResponse>(
    //         this.url + "/over-draft",
    //         dataTableParameters
    //       )
    //       .subscribe((resp) => {
    //         this.overMaster = resp.data;
    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsTotal,
    //           data: [],
    //         });
    //       });
    //   },
    //   columns: [
    //     {
    //       title: "Action",
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
    //       },
    //     },
    //     {
    //       title: "Scheme Code",
    //       data: "AC_TYPE",
    //     },
    //     {
    //       title: "Account No",
    //       data: "AC_NO",
    //     },
    //     {
    //       title: "Account No",
    //       data: "AC_NO",
    //     },
    //   ],
    //   dom: "Blrtip",
    // };

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'CC');
      });
      this.allScheme = filtered;
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })


  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      AC_TYPE: ["", [Validators.required]],
      AC_NO: ["", [Validators.required]],
      radioOverdraft: ["PeriodicallyOverDraft", [Validators.required]],
      AC_SODAMT: ["", [Validators.pattern]],
      AC_ODAMT: ["", [Validators.pattern,]],
      AC_ODDAYS: [0, [Validators.pattern,]],
      AC_ODDATE: [""],
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranch = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.angForm.patchValue({
        'BRANCH_CODE': result.branch.id
      })
      this.ngBranch = result.branch.id
    }
  }


  submit() {
    const formVal = this.angForm.value;
    if (formVal.BRANCH_CODE == "" || formVal.BRANCH_CODE == null) {
      Swal.fire("Warning!", "Please Select Branch!", "warning");
    }
    else if (formVal.AC_TYPE == "" || formVal.AC_TYPE == null) {
      Swal.fire("Warning!", "Please Select Scheme!", "warning");
    }
    else if (formVal.AC_NO == "" || formVal.AC_NO == null) {
      Swal.fire(
        "Warning!",
        "Please Select Account!",
        "warning"
      );
    }
    else if ((Number(this.angForm.controls['AC_ODAMT'].value) != 0 && this.angForm.controls['radioOverdraft'].value == 'TemporaryOverDraft')
      || (Number(this.angForm.controls['AC_SODAMT'].value) != 0 && this.angForm.controls['radioOverdraft'].value == 'PeriodicallyOverDraft')) {
      let effectdate
      this.formSubmitted = true;
      let odDate = moment(formVal.AC_ODDATE, 'DD/MM/YYYY')
      let odDatet = moment(odDate).format('DD/MM/YYYY')
      const dataToSend = {
        AC_TYPE: this.actype,
        ACTYPE: this.ac_type,
        AC_NO: formVal.AC_NO,
        BANKACNO: this.bankAcno,
        AC_SODAMT: formVal.AC_SODAMT,
        AC_ODAMT: formVal.AC_ODAMT,
        AC_ODDAYS: formVal.AC_ODDAYS,
        AC_ODDATE: this.PeriodicallyOverDraftTrue == true ? odDatet : null
      };
      this._overdraft.postData(dataToSend).subscribe(
        (data1) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.PeriodicallyOverDraftTrue = true
          this.TemporaryOverDraftTrue = false
          this.formSubmitted = false;
          //To clear form
          this.resetForm();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    else {
      Swal.fire('info', 'Please fill mandatory fields', 'info')
    }
  }


  updatecheckdata: any
  //  editClickHandler function for edit button clicked
  editClickHandler(id: any): void {
    let effectdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._overdraft.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data
      this.updatecheckdata = data
      this.updateID = data.id;
      if (data.AC_SODAMT != '' && data.AC_SODAMT != null) {
        this.angForm.patchValue({
          radioOverdraft: 'PeriodicallyOverDraft'
        })
      }
      else {
        this.angForm.patchValue({
          radioOverdraft: 'TemporaryOverDraft'
        })
      }
      this.angForm.patchValue({
        AC_TYPE: data.AC_TYPE,
        // AC_NO: data.AC_NO,
        AC_SODAMT: data.AC_SODAMT,
        AC_ODAMT: data.AC_ODAMT,
        AC_ODDAYS: data.AC_ODDAYS,
        AC_ODDATE: data.AC_ODDATE
      });
    });
  }

  // updateData function for update data
  updateData() {
    let effectdate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = true;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    if (this.updatecheckdata.AC_ODDATE != data.AC_ODDATE) {
      (data.AC_ODDATE == 'Invalid date' || data.AC_ODDATE == '' || data.AC_ODDATE == null) ? (effectdate = '', data['AC_ODDATE'] = effectdate) : (effectdate = data.AC_ODDATE, data['AC_ODDATE'] = moment(effectdate).format('DD/MM/YYYY'))
    }
    this._overdraft.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.rerender();
      this.resetForm();
    });
  }

  ac_type
  //get account no according scheme 
  getSchemeAcNO(event) {
    this.ngscheme = null
    this.schemeACNo = []
    this.actype = event.name
    this.ac_type = event.value

    let obj = [this.acno, this.ngBranch]
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
    this.angForm.patchValue({
      AC_ODAMT: 0,
      AC_SODAMT: 0,
      AC_ODDAYS: '',
      AC_ODDATE: '',
      radioOverdraft: 'PeriodicallyOverDraft'
    })
    this.OpenLink(1)
  }
  mem
  getBankAcno(event) {
    this.bankAcno = event.bankacno
    this.mem = [this.actype, this.bankAcno]
    this.http.get(this.url + '/over-draft/check/' + this.mem).subscribe((data) => {
      if (data != null) {
        this.angForm.patchValue({
          AC_ODAMT: Number(data[0]?.AC_ODAMT).toFixed(2),
          AC_SODAMT: Number(data[0]?.AC_SODAMT).toFixed(2),
          AC_ODDAYS: data[0]?.AC_ODDAYS,
          AC_ODDATE: data[0]?.AC_ODDATE,
        })
        debugger
        if (data[0].AC_SODAMT != 0 && data[0].AC_SODAMT != null && data[0].AC_ODDAYS != 0) {
          this.angForm.patchValue({
            radioOverdraft: 'PeriodicallyOverDraft'
          })
        }
        else {
          this.angForm.patchValue({
            radioOverdraft: 'TemporaryOverDraft'
          })
        }

        if (data[0].AC_SODAMT != 0 && data[0].AC_SODAMT != null && data[0].AC_ODDAYS != 0) {
          this.PeriodicallyOverDraftTrue = true
          this.TemporaryOverDraftTrue = false
        }
        else {
          this.TemporaryOverDraftTrue = true
          this.PeriodicallyOverDraftTrue = false
        }
      }
      else {
        this.angForm.patchValue({
          AC_ODAMT: '',
          AC_SODAMT: '',
          AC_ODDAYS: '',
          AC_ODDATE: '',
          radioOverdraft: ''
        })
        this.PeriodicallyOverDraftTrue = false
        this.TemporaryOverDraftTrue = false
      }
    })
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
    // this.dtTrigger.next();
    // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   dtInstance.columns().every(function () {
    //     const that = this;
    //     $("input", this.footer()).on("keyup change", function () {
    //       if (this["value"] != "") {
    //         that.search(this["value"]).draw();
    //       } else {
    //         that.search(this["value"]).draw();
    //       }
    //     });
    //   });
    // });
  }
  // Reset Function
  resetForm() {
    this.acno = null
    this.ngscheme = null
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
    if (val == 1) {
      this.PeriodicallyOverDraftTrue = true;
      this.periodoverdraft = true
      this.TemporaryOverDraftTrue = false;
      this.angForm.controls['AC_ODAMT'].reset()
      // this.PeriodicAmount.nativeElement.focus();
    }
    else if (val == 2) {
      this.angForm.controls['AC_SODAMT'].reset()
      this.PeriodicallyOverDraftTrue = false;
      this.periodoverdraft = false
      this.TemporaryOverDraftTrue = true;
      this.angForm.controls['AC_ODDAYS'].reset()
      this.angForm.controls['AC_ODDATE'].reset()
      this.tempAmount.nativeElement.focus();
    }
  }

  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  selectAllContent($event) {
    $event.target.select();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }
  getODDate() {
    var date1 = this.maxDate
    let expiryT = moment(date1, 'DD/MM/YYYY').add(Number(this.angForm.controls['AC_ODDAYS'].value), 'days').format('DD/MM/YYYY')
    this.angForm.patchValue({
      AC_ODDATE: expiryT
    })
  }

  getODDays() {
    let date1 = this.maxDate
    let expiryD = moment(this.angForm.controls['AC_ODDATE'].value, 'DD/MM/YYYY').diff(moment(date1, 'DD/MM/YYYY'), 'days');
    this.angForm.patchValue({
      AC_ODDAYS: expiryD.toString() == 'NaN' ? 0 : expiryD
    })
  }
  getBranch() {
    this.acno = null
    this.ngscheme = null
    this.schemeACNo = null
  }

  addNewData()
  {
    this.resetForm();
  }

}
