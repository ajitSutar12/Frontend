import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";
import { glTypeService } from "../../../../shared/elements/gl-type.service";
import Swal from "sweetalert2";
import { Subscription } from "rxjs";
import { IOption } from "ng-select";
import { ReportService } from "./gl-report-master.component.service";
import { Subject } from 'rxjs';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
import {environment} from '../../../../../environments/environment'


interface reportinterface {
  Sub_Code: number,
  Sub_Name: string,
  Exp_Code:number,
  Exp_Name: string,
  Daily_Code:number,
  Daily_Name: string,
  Daily_AlternateCode: number,
  Daily_HOLiquidityCode1: number,
  Daily_AlterBalanceCode: number,
  Daily_HOLiquidityCode2: number,
  Daily_SerialNo8: number,
  Daily_input_allowed:boolean,
  Daily_gl_report: boolean,
  Daily_Percentage: number,
  Daily_PercentageOfcode: number,

  CRR_Code: number,
  CRR_Name:string,
  CRR_Type: string,
  CRR_SerialNo:number,

  SLR_Code: number,
  SLR_Name: string,
  SLR_Type: string,

  SLR_SerialNo: number,

  CRAR_Code: number,

  // Code1: ["", [Validators.required, Validators.pattern]],
  CRAR_Name: string,
  CRAR_Type: string,
  CRAR_profit: boolean,
  CRAR_SerialNo1: number,
  CRAR_PercentageOfcode1: number,
  CRAR_Input_allowed:boolean,
  CRAR_gl_report: boolean,
  CRAR_Percentage1: number,
  CRAR_gl_PercentageConsideration:number,

  NIDHI_Code3: number,
  NIDHI_Name3: string,
  NIDHI_SerialNo3: number,

}

@Component({
  selector: "app-gl-report-master",
  templateUrl: "./gl-report-master.component.html",
  styleUrls: ["./gl-report-master.component.scss"],
  animations: [
    trigger("fadeInOutTranslate", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in-out", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        style({ transform: "translate(0)" }),
        animate("400ms ease-in-out", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class GlReportMasterComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  url =environment.base_url;
  angForm: FormGroup;

  dtExportButtonOptions: any = {}; //Datatable variable
  dtExportButtonOptions1: any = {};
  dtExportButtonOptions2: any = {};
  dtExportButtonOptions3: any = {};
  dtExportButtonOptions4: any = {};
  dtExportButtonOptions5: any = {};
  dtExportButtonOptions6: any = {};
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();



  //title select variables
  simpleOption: Array<IOption> = this.glTypeService.getCharacters();
  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number = 0;

  //variable for checkbox and radio button
  isLinkingInputAllowed: boolean = true;
  isIsPrintinGLReport: boolean = true;

  isAddProfitLossAmount: boolean = false;
  isLinkingInputAllowed1: boolean = true;
  isIsPrintinGLReport1: boolean = true;

  //object created to get data when row is clicked
  message = {
    Code: "",
    Name: "",
    Code7: "",
    Name7: "",
    Code8: "",
    Name8: "",
    AlternateCode: "",
    HOLiquidityCode1: "",
    HOLiquidityCode2: "",
    AlterBalanceCode: "",
    SerialNo8: "",
    LinkingInputAllowed: "",
    Percentage: "",
    IsPrintinGLReport: "",
    PercentageOfcode: "",
    Code9: "",
    Name9: "",
    SerialNo9: "",
    Type: "",
    Code10: "",
    Name10: "",
    Type10: "",
    Code1: "",
    Type3: "",
    Name1: "",
    AddProfitLossAmount: "",
    SerialNo1: "",
    PercentageOfcode1: "",
    LinkingInputAllowed1: "",
    IsPrintinGLReport1: "",
    Percentage1: "",
    PercentageConsideration: "",
    Code3: "",
    Name3: "",
    SerialNo3: "",
    SerialNo90: "",
  };

  constructor(
    public glTypeService: glTypeService,
    private fb: FormBuilder,
    private _report: ReportService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: "fake-data/gl_report_master.json",
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return (
              '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' +
              " " +
              '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
            );
          },
        },
        {
          title: "Code",
          data: "Code",
        },
        {
          title: "Name",
          data: "Name",
        },
      ],

      dom: "Bfrtip",
      buttons: ["copy", "print", "excel", "csv"],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $("td", row).off("click");
        $("td", row).on("click", "#editbtn", () => {
          self.editClickHandler(data);
        });
        $("td", row).on("click", "#delbtn", () => {
          self.delClickHandler();
        });
        return row;
      },
    };

    this.dtExportButtonOptions1 = {
      ajax: "fake-data/gl_report1.json",
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return (
              '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' +
              " " +
              '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
            );
          },
        },
        {
          title: "Code",
          data: "Code7",
        },
        {
          title: "Name",
          data: "Name7",
        },
      ],

      dom: "Bfrtip",
      buttons: ["copy", "print", "excel", "csv"],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $("td", row).off("click");
        $("td", row).on("click", "#editbtn", () => {
          self.editClickHandler(data);
        });
        $("td", row).on("click", "#delbtn", () => {
          self.delClickHandler();
        });
        return row;
      },
    };

    this.dtExportButtonOptions2 = {
      ajax: "fake-data/gl_report2.json",
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return (
              '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' +
              " " +
              '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
            );
          },
        },
        {
          title: "Code",
          data: "Code8",
        },
        {
          title: "Name",
          data: "Name8",
        },
        {
          title: "Alternate Code",
          data: "AlternateCode",
        },
        {
          title: "HO Liquidity Code1",
          data: "HOLiquidityCode1",
        },
        {
          title: "HO Liquidity Code2",
          data: "HOLiquidityCode2",
        },
        {
          title: "Alter Balance Code",
          data: "AlterBalanceCode",
        },
        {
          title: "Serial No.",
          data: "SerialNo8",
        },
        {
          title: "Linking Input Allowed?",
          data: "LinkingInputAllowed",
        },
        {
          title: "Percentage",
          data: "Percentage",
        },
        {
          title: "Is Print in GL Report?",
          data: "IsPrintinGLReport",
        },
        {
          title: "Percentage Of code",
          data: "PercentageOfcode",
        },
      ],

      dom: "Bfrtip",
      buttons: ["copy", "print", "excel", "csv"],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $("td", row).off("click");
        $("td", row).on("click", "#editbtn", () => {
          self.editClickHandler(data);
        });
        $("td", row).on("click", "#delbtn", () => {
          self.delClickHandler();
        });
        return row;
      },
    };

    this.dtExportButtonOptions3 = {
      ajax: "fake-data/gl_report3.json",
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return (
              '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' +
              " " +
              '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
            );
          },
        },
        {
          title: "Code",
          data: "Code9",
        },
        {
          title: "Name",
          data: "Name9",
        },
        {
          title: "Type",
          data: "Type",
        },
        {
          title: "Serial No",
          data: "SerialNo9",
        },
      ],

      dom: "Bfrtip",
      buttons: ["copy", "print", "excel", "csv"],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $("td", row).off("click");
        $("td", row).on("click", "#editbtn", () => {
          self.editClickHandler(data);
        });
        $("td", row).on("click", "#delbtn", () => {
          self.delClickHandler();
        });
        return row;
      },
    };

    this.dtExportButtonOptions4 = {
      ajax: "fake-data/gl_report4.json",
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return (
              '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' +
              " " +
              '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
            );
          },
        },
        {
          title: "Code",
          data: "Code10",
        },
        {
          title: "Name",
          data: "Name10",
        },
        {
          title: "Type",
          data: "Type10",
        },
        {
          title: "Serial No",
          data: "SerialNo90",
        },
      ],

      dom: "Bfrtip",
      buttons: ["copy", "print", "excel", "csv"],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $("td", row).off("click");
        $("td", row).on("click", "#editbtn", () => {
          self.editClickHandler(data);
        });
        $("td", row).on("click", "#delbtn", () => {
          self.delClickHandler();
        });
        return row;
      },
    };

    this.dtExportButtonOptions5 = {
      ajax: "fake-data/gl_report5.json",
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return (
              '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' +
              " " +
              '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
            );
          },
        },
        {
          title: "Code",
          data: "Code1",
        },
        {
          title: "Name",
          data: "Name1",
        },
        {
          title: "Type",
          data: "Type3",
        },
        {
          title: "Add Profit Loss Amount",
          data: "AddProfitLossAmount",
        },
        {
          title: "Serial No1",
          data: "SerialNo1",
        },
        {
          title: "Percentage Of code",
          data: "PercentageOfcode1",
        },
        {
          title: "Linking Input Allowed.",
          data: "LinkingInputAllowed1",
        },
        {
          title: "Is Print in GLReport",
          data: "IsPrintinGLReport1",
        },
        {
          title: "Percentage",
          data: "Percentage1",
        },
        {
          title: "Percentage Consideration",
          data: "PercentageConsideration",
        },
      ],

      dom: "Bfrtip",
      buttons: ["copy", "print", "excel", "csv"],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $("td", row).off("click");
        $("td", row).on("click", "#editbtn", () => {
          self.editClickHandler(data);
        });
        $("td", row).on("click", "#delbtn", () => {
          self.delClickHandler();
        });
        return row;
      },
    };

    this.dtExportButtonOptions6 = {
      ajax: "fake-data/gl_report6.json",
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return (
              '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' +
              " " +
              '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
            );
          },
        },
        {
          title: "Code",
          data: "Code3",
        },
        {
          title: "Name",
          data: "Name3",
        },
        {
          title: "Serial No3",
          data: "SerialNo3",
        },
      ],

      dom: "Bfrtip",
      buttons: ["copy", "print", "excel", "csv"],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $("td", row).off("click");
        $("td", row).on("click", "#editbtn", () => {
          self.editClickHandler(data);
        });
        $("td", row).on("click", "#delbtn", () => {
          self.delClickHandler();
        });
        return row;
      },
    };

    this.runTimer();
    this.dataSub = this.glTypeService.loadCharacters().subscribe((options) => {
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
      Sub_Code: [""],
      Sub_Name: ["", [Validators.required, , Validators.pattern]],
      Exp_Code: [""],
      Exp_Name: ["", [Validators.required, Validators.pattern]],
      Daily_Code: ["", [Validators.pattern, Validators.required]],
      Daily_Name: ["", [Validators.required, Validators.pattern]],
      Daily_AlternateCode: ["", [Validators.pattern]],
      Daily_HOLiquidityCode1: ["", [Validators.pattern]],
      Daily_AlterBalanceCode: ["", [Validators.pattern]],
      Daily_HOLiquidityCode2: ["", [Validators.pattern]],
      Daily_SerialNo8: [""],
      Daily_input_allowed: [""],
      Daily_gl_report: [""],
      Daily_Percentage: [""],
      Daily_PercentageOfcode: ["",[Validators.pattern]],

      CRR_Code: ["", [Validators.required, Validators.pattern]],
      CRR_Name: ["", [Validators.required, Validators.pattern]],
      CRR_Type: ["", [Validators.required]],
      CRR_SerialNo: [""],

      SLR_Code: ["", [Validators.required, Validators.pattern]],
      SLR_Name: ["", [Validators.required, Validators.pattern]],
      SLR_Type: ["", [Validators.required]],

      SLR_SerialNo: [""],

      CRAR_Code: ["", [Validators.required, Validators.pattern]],

      // Code1: ["", [Validators.required, Validators.pattern]],
      CRAR_Name: ["", [Validators.required, Validators.pattern]],
      CRAR_Type: ["", [Validators.required]],
      CRAR_profit: [""],
      CRAR_SerialNo1: [""],
      CRAR_PercentageOfcode1: ["", [Validators.pattern]],
      CRAR_Input_allowed: [""],
      CRAR_gl_report: [""],
      CRAR_Percentage1: ["", [Validators.pattern]],
      CRAR_gl_PercentageConsideration: [""],

      NIDHI_Code3: ["", [Validators.required, Validators.pattern]],
      NIDHI_Name3: ["", [Validators.required, Validators.pattern]],
      NIDHI_SerialNo3: [""],
    });
  }

  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'Sub_Code': formVal.Sub_Code,
      'Sub_Name': formVal,
      'Exp_Code':formVal,
      'Exp_Name': formVal,
      'Daily_Code':formVal,
      'Daily_Name': formVal,
      'Daily_AlternateCode': formVal,
      'Daily_HOLiquidityCode1': formVal,
      'Daily_AlterBalanceCode': formVal,
      'Daily_HOLiquidityCode2': formVal,
      'Daily_SerialNo8': formVal,
      'Daily_input_allowed':formVal,
      'Daily_gl_report': formVal,
      'Daily_Percentage': formVal,
      'Daily_PercentageOfcode': formVal,
    
      'CRR_Code': formVal,
      'CRR_Name':formVal,
      'CRR_Type': formVal,
      'CRR_SerialNo':formVal,
    
      'SLR_Code': formVal,
      'SLR_Name': formVal,
      'SLR_Type': formVal,
    
      'SLR_SerialNo': formVal,
    
      'CRAR_Code': formVal,
    
      // Code1: ["", [Validators.required, Validators.pattern]],
      'CRAR_Name': formVal,
      'CRAR_Type': formVal,
      'CRAR_profit': formVal,
      'CRAR_SerialNo1': formVal,
      'CRAR_PercentageOfcode1': formVal,
      'CRAR_Input_allowed':formVal,
      'CRAR_gl_report': formVal,
      'CRAR_Percentage1': formVal,
      'CRAR_gl_PercentageConsideration':formVal,
    
      'NIDHI_Code3': formVal,
      'NIDHI_Name3': formVal,
      'NIDHI_SerialNo3': formVal,
    
    }
    // console.log(this.angForm.value);
  this._report.postData(dataToSend).subscribe(data1 => {
    Swal.fire('Success!', 'Data Added Successfully !', 'success');
    // to reload after insertion of data
    // this.rerender();
  }, (error) => {
    console.log(error)
  })
  }
 

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.Code = info.Code;
    this.message.Name = info.Name;
    this.message.Code7 = info.Code7;
    this.message.Name7 = info.Name7;
    this.message.Code8 = info.Code8;
    this.message.Name8 = info.Name8;
    this.message.AlternateCode = info.AlternateCode;
    this.message.HOLiquidityCode1 = info.HOLiquidityCode1;
    this.message.HOLiquidityCode2 = info.HOLiquidityCode2;
    this.message.AlterBalanceCode = info.AlterBalanceCode;
    this.message.SerialNo8 = info.SerialNo8;
    this.message.LinkingInputAllowed = info.LinkingInputAllowed;
    this.message.Percentage = info.Percentage;
    this.message.IsPrintinGLReport = info.IsPrintinGLReport;
    this.message.PercentageOfcode = info.PercentageOfcode;
    this.message.Code9 = info.Code9;
    this.message.Name9 = info.Name9;
    this.message.SerialNo9 = info.SerialNo9;
    this.message.Type = info.Type;
    this.message.Code10 = info.Code10;
    this.message.Name10 = info.Name10;
    this.message.Type10 = info.Type10;
    this.message.Code1 = info.Code1;
    this.message.Type3 = info.Type3;
    this.message.Name1 = info.Name1;
    this.message.AddProfitLossAmount = info.AddProfitLossAmount;
    this.message.SerialNo1 = info.SerialNo1;
    this.message.PercentageOfcode1 = info.PercentageOfcode1;
    this.message.LinkingInputAllowed1 = info.LinkingInputAllowed1;
    this.message.IsPrintinGLReport1 = info.IsPrintinGLReport1;
    this.message.Percentage1 = info.Percentage1;
    this.message.PercentageConsideration = info.PercentageConsideration;

    this.message.Code3 = info.Code3;
    this.message.Name3 = info.Name3;
    this.message.SerialNo3 = info.SerialNo3;
    this.message.SerialNo90 = info.SerialNo90;

    //code for chekbox
    if (this.message.AddProfitLossAmount == "Yes") {
      this.isAddProfitLossAmount = true; //return boolean value and display checked checkbox
    } else {
      this.isAddProfitLossAmount = false; //return boolean value and display unchecked checkbox
    }

    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your data been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this._report.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
       this.resetForm();
    })
  }
  ngAfterViewInit() {
    this.myInputField.nativeElement.focus();
    }
     // Reset Function
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
