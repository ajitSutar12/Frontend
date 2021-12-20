import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef ,
  ChangeDetectorRef,
  ComponentFactoryResolver,
} from "@angular/core";
import { Observable, Subject, Subscriber } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
// Service File For Handling CRUD Operation
import { CustomerIdService } from "./customer-id.service";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { first } from "rxjs/operators";
import { PrefixMasterDropdownService } from "../../../../shared/dropdownService/prefix-master-dropdown.service";
import { CastMasterService } from "../../../../shared/dropdownService/cast-master-dropdown.service";
import { OccupationMasterService } from "../../../../shared/dropdownService/occupation-master-dropdown.service";
import { SalaryDMasterdropdownService } from "../../../../shared/dropdownService/salary-division-master-dropdown.service";
import { cityMasterService } from "../../../../shared/dropdownService/city-master-dropdown.service";
import { RiskCategoryDropdownService } from "../../../../shared/dropdownService/risk-category-dropdown.service";
import { FileUploader } from "ng2-file-upload";
import { DocumentMasterDropdownService } from "../../../../shared/dropdownService/document-master-dropdown.service";
import { environment } from "../../../../../environments/environment";
import { Router } from "@angular/router";
import { NgSelectComponent } from "@ng-select/ng-select/lib/ng-select.component";
import { ConnectionServiceModule } from "ng-connection-service";
import{StrictNumberOnlyDirective} from '../../../../restrictinput';


// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DocumentMaster {
  id: number;
  NAME: string;
}
interface CustomerMaster {
  AC_NO: number;
  AC_MEMBTYPE: string;
  AC_MEMBNO: string;
  AC_TITLE: string;
  F_NAME: string;
  L_NAME: string;
  M_NAME: string;
  AC_NAME: string;
  AC_CAST: string;
  AC_OCODE: string;
  AC_ADHARNO: string;
  AC_RISKCATG: string;
  AC_BIRTH_DT: string;
  AC_HONO: string;
  AC_WARD: string;
  AC_ADDR: string;
  AC_GALLI: string;
  AC_AREA: string;
  AC_CTCODE: string;
  AC_PIN: number;
  AC_PANNO: number;
  AC_SALARYDIVISION_CODE: string;
  AC_MOBILENO: number;
  AC_PHONE_RES: number;
  AC_PHONE_OFFICE: number;
  AC_EMAILID: string;
  TDSDOCUMNET: boolean;
  AC_IS_RECOVERY: boolean;
  TDS_REQUIRED: boolean;
  SMS_REQUIRED: boolean;
  IS_KYC_RECEIVED: boolean;
  FIN_YEAR: number;
  SUBMIT_DATE: Date;
  FORM_TYPE: string;
  TDS_RATE: number;
  TDS_LIMIT: number;
}

@Component({
  selector: "app-customer-id",
  templateUrl: "./customer-id.component.html",
  styleUrls: ["./customer-id.component.scss"],
})
export class CustomerIdComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() newCustomerEvent = new EventEmitter<string>();
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  @ViewChild('ngSelect') ngSelect: NgSelectComponent;
  custData;
  datemax: any;
  addNewCustomer(value) {
    this.newCustomerEvent.emit(value);
  }
  //api
  url = environment.base_url;
  imageObject = new Array();

  fname = "";
  mname = "";
  lname = "";
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  customerMaster: CustomerMaster[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  dtExportOptions: DataTables.Settings = {};
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = "start";
  active = 1;
  activeKeep = 1;
  // Variables for search
  filterObject: { name: string; type: string }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable to get ID to update
  updateID: number = 0;
  // Filter Variable
  filterData = {};
  prifix: any[];
  castMaster: any[];
  occupation: any[];
  riskCategory: any[];
  salaryDivision: any[];
  city: any[];
  risk: any[];
  documentMaster: DocumentMaster[];
  isDocument: boolean = false;
  isTdsForm: boolean = false;
  isTdsFormA: boolean = false;
  SUBMIT_DATE: boolean = false;
  enablefields: boolean = true;
  hasFocus :boolean =false;
  
  
  

  constructor(
    private http: HttpClient,
    private customerIdService: CustomerIdService,
    private fb: FormBuilder,
    private prefixMaster: PrefixMasterDropdownService,
    private castService: CastMasterService,
    private occupationMaster: OccupationMasterService,
    private salaryDMaster: SalaryDMasterdropdownService,
    private cityMaster: cityMasterService,
    private riskCategoryDropdown: RiskCategoryDropdownService,
    private documentMasterService: DocumentMasterDropdownService,
    public router: Router
  ) {  
       // this.datemax =new Date() ;
       this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
       console.log(this.datemax);
      
  } 

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
            this.url + "/customer-id",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.customerMaster = resp.data;
            console.log(resp.data);
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
        },
        {
          title: " Customer ID",
          data: "AC_NO",
        },
        {
          title: "Member No",
          data: "AC_MEMBNO",
        },
        {
          title: "Member Scheme",
          data: "AC_MEMBTYPE",
        },
        {
          title: "Title",
          data: "AC_TITLE",
        },
        {
          title: "First Name",
          data: "F_NAME",
        },
        {
          title: "Middle Name",
          data: "M_NAME",
        },
        {
          title: "Last Name",
          data: "L_NAME",
        },
        {
          title: "Full Name",
          data: "AC_NAME",
        },
        {
          title: "Cast",
          data: "AC_CAST",
        },
        {
          title: "Occupation",
          data: "AC_OCODE",
        },
        {
          title: "Risk Category",
          data: "AC_RISKCATG",
        },
        {
          title: "Adhar Card No.",
          data: "AC_ADHARNO",
        },
        {
          title: "PAN No.",
          data: "AC_PANNO",
        },
        {
          title: "Birth Date",
          data: "AC_BIRTH_DT",
        },
        // {
        //   title: 'House No',
        //   data: 'AC_HONO'
        // },
        // {
        //   title: 'Ward',
        //   data: 'AC_WARD'
        // },
        // {
        //   title: 'Detail',
        //   data: 'AC_ADDR'
        // },
        // {
        //   title: 'Galli',
        //   data: 'AC_GALLI'
        // },
        // {
        //   title: 'Area',
        //   data: 'AC_AREA'
        // },
        // {
        //   title: 'City',
        //   data: 'AC_CTCODE'
        // },
        // {
        //   title: 'Pin Code',
        //   data: 'AC_PIN'
        // },
        {
          title: "Salary Div.",
          data: "AC_SALARYDIVISION_CODE",
        },
        {
          title: "Mobile Number",
          data: "AC_MOBILENO",
        },
        {
          title: "Recidential(R)",
          data: "AC_PHONE_RES",
        },
        {
          title: "Office(O)",
          data: "AC_PHONE_OFFICE",
        },
        {
          title: "Email ID",
          data: "AC_EMAILID",
        },
        {
          title: "Is Received TDS Document",
          data: "TDSDOCUMNET",
        },
        // {
        //   title: "Recovery",
        //   data: "AC_IS_RECOVERY",
        // },
        {
          title: "TDS Calculation Required?",
          data: "TDS_REQUIRED",
        },
        {
          title: "SMS Facility Required ?",
          data: "SMS_REQUIRED",
        },
        {
          title: "KYC",
          data: "IS_KYC_RECEIVED",
        },
        {
          title: "Financial Year",
          data: "FIN_YEAR",
        },
        {
          title: "Submission Date",
          data: "SUBMIT_DATE",
        },
        {
          title: "Form Type",
          data: "FORM_TYPE",
        },
        {
          title: "TDS Rate %",
          data: "TDS_RATE",
        },
        {
          title: "TDS Limit",
          data: "TDS_LIMIT",
        },
      ],
      dom: "Blrtip",
    };
    this.dtExportOptions = {
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
        this.http
          .post<DataTableResponse>(
            this.url + "/document-master",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.documentMaster = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: resp.data,
            });
          });
      },
      columnDefs: [
        {
          targets: "_all",
          defaultContent: "",
        },
      ],
      columns: [
        {
          title: "Action",
          data: "NAME",
        },
      ],
    };

    this.prefixMaster
      .getPrefixMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.prifix = data;
      });
    this.documentMasterService
      .getDocumentMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.documentMaster = data;
      });
    this.castService
      .getcastList()
      .pipe(first())
      .subscribe((data) => {
        this.castMaster = data;
      });
    this.occupationMaster
      .getoccupationList()
      .pipe(first())
      .subscribe((data) => {
        this.occupation = data;
      });
    this.salaryDMaster
      .getSalaryDMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.salaryDivision = data;
      });
    this.cityMaster
      .getcityList()
      .pipe(first())
      .subscribe((data) => {
        this.city = data;
      });
    this.riskCategoryDropdown
      .getRiskCategoryList()
      .pipe(first())
      .subscribe((data) => {
        this.risk = data;
      });
  }
  uploader: FileUploader = new FileUploader({
    // url: URL,
    isHTML5: true,
  });

  createForm() {
    this.angForm = this.fb.group({
      AC_NO: [""],
      AC_MEMBTYPE: [""],
      AC_MEMBNO: [""],
      AC_TITLE: ["", [Validators.required]],
      F_NAME: ["", [Validators.pattern, Validators.required]],
      M_NAME: ["", [Validators.pattern, Validators.required]],
      L_NAME: ["", [Validators.pattern, Validators.required]],
      AC_NAME: ["", [Validators.pattern]],
      AC_CAST: [""],
      AC_OCODE: [""],
      AC_ADHARNO: ["", [Validators.pattern]],
      AC_RISKCATG: [""],
      AC_BIRTH_DT: [""],
      AC_HONO: ["", [Validators.pattern]],
      AC_WARD: ["", [Validators.pattern]],
      AC_ADDR: ["", [Validators.pattern]],
      AC_GALLI: ["", [Validators.pattern]],
      AC_AREA: ["", [Validators.pattern]],
      AC_CTCODE: ["",[Validators.required]],
      AC_PIN: ["", [Validators.pattern]],
      AC_SALARYDIVISION_CODE: [""],
      AC_PANNO: ["", [Validators.pattern]],
      AC_MOBILENO: ["", [Validators.pattern]],
      AC_PHONE_RES: ["", [Validators.pattern]],
      AC_PHONE_OFFICE: ["", [Validators.pattern]],
      AC_EMAILID: ["", [Validators.pattern]],
      TDSDOCUMNET: [""],
      AC_IS_RECOVERY: [false],
      TDS_REQUIRED: [false],
      SMS_REQUIRED: [false],
      IS_KYC_RECEIVED: [false],
      FIN_YEAR: [""],
      SUBMIT_DATE: [""],
      FORM_TYPE: [""],
      TDS_RATE: ["", [Validators.pattern]],
      TDS_LIMIT: ["", [Validators.pattern]],
      // UPLOADFIELD:[''],
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_NO': formVal.AC_NO,
      'AC_MEMBTYPE': formVal.AC_MEMBTYPE,
      'AC_MEMBNO': formVal.AC_MEMBNO,
      'AC_TITLE': formVal.AC_TITLE,
      'F_NAME': formVal.F_NAME,
      'M_NAME': formVal.M_NAME,
      'L_NAME': formVal.L_NAME,
      'AC_NAME': formVal.L_NAME + ' ' + formVal.F_NAME + ' ' + formVal.M_NAME,
      'AC_CAST': formVal.AC_CAST,
      'AC_OCODE': formVal.AC_OCODE,
      'AC_ADHARNO': formVal.AC_ADHARNO,
      'AC_RISKCATG': formVal.AC_RISKCATG,
      'AC_BIRTH_DT': formVal.AC_BIRTH_DT,
      'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
      'AC_MOBILENO': formVal.AC_MOBILENO,
      'AC_PHONE_RES': formVal.AC_PHONE_RES,
      'AC_PANNO': formVal.AC_PANNO,
      'AC_PHONE_OFFICE': formVal.AC_PHONE_OFFICE,
      'AC_EMAILID': formVal.AC_EMAILID,
      'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
      'TDS_REQUIRED': formVal.TDS_REQUIRED,
      'SMS_REQUIRED': formVal.SMS_REQUIRED,
      'IS_KYC_RECEIVED': formVal.IS_KYC_RECEIVED,
      'TDSDOCUMNET': formVal.TDSDOCUMNET,
      'AC_HONO': formVal.AC_HONO,
      'AC_WARD': formVal.AC_WARD,
      'AC_ADDR': formVal.AC_ADDR,
      'AC_GALLI': formVal.AC_GALLI,
      'AC_AREA': formVal.AC_AREA,
      'AC_CTCODE': formVal.AC_CTCODE,
      'AC_PIN': formVal.AC_PIN,
      'FIN_YEAR': formVal.FIN_YEAR,
      'SUBMIT_DATE': formVal.SUBMIT_DATE,
      'FORM_TYPE': formVal.FORM_TYPE,
      'TDS_RATE': formVal.TDS_RATE,
      'TDS_LIMIT': formVal.TDS_LIMIT,
      'Document': this.imageObject
    }


    this.customerIdService.postData(dataToSend).subscribe(
      (data) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        console.log("submit", data);
        // this.custData = data1.id;
        this.addNewCustomer(data.id);
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

  //disabledate on keyup
  disabledate(data:any){
    
    console.log(data);
    if(data != ""){
      if(data > this.datemax){
        Swal.fire("Invalid Input", "Please insert valid date ", "warning");
        (document.getElementById("AC_BIRTH_DT")as HTMLInputElement).value = "";
        this.myInputField.nativeElement.focus('AC_BIRTH_DT');
      }
    } 
    // else{
    //   //  this.myInputField.nativeElement.focus('AC_BIRTH_DT');
    //   // this.angForm.get('AC_BIRTH_DT').nativeElement.focus();
    // }
  }
    //disabledate on keyup
    disablesubdate(data:any){
    
      console.log(this.datemax);
      if(data != ""){
        if(data > this.datemax){
          Swal.fire("Invalid Input", "Please insert valid date ", "warning");
          (document.getElementById("SUBMIT_DATE")as HTMLInputElement).value = ""
              
        }
      } 
    }
  
  //method for force only numbers input
  onlyNumberKey(evt) {
  
          
    // Only ASCII character in that range allowed
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
      return true;
    }
    else{
     return false;
    }
        // evt.preventDefault();
    // return true;
}

  // Reset Function
  resetForm() {
    this.createForm();
    this.isDocument = false;
    this.isTdsForm = false;
    this.isTdsFormA = false;
  }

  
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  //enabling and disabling fields of photo and adhar card checkbox
  Enablefields(data, id, ele) {
    console.log(data);
    if (ele.target.checked) {
      (document.getElementById("file" + id) as HTMLInputElement).disabled =
        false;
      // (document.getElementById("eyebutton" + id) as HTMLInputElement).disabled =
      //   false;

    } else {
      (document.getElementById("file" + id) as HTMLInputElement).disabled =
        true;
      // (document.getElementById("eyeicon" + id) as HTMLInputElement).disabled =
      //   true;
    }
  }

  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100
    console.log(ele);
    if (ele <= 100) {
      console.log(ele);
    } else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }
 
  //method to add space
  addSpace(data: any) {
    let result = data
      .replace(/\D/g, "")
      .split(/(?:([\d]{4}))/g)
      .filter((s) => s.length > 0)
      .join(" ");
    (document.getElementById("AC_ADHARNO") as HTMLInputElement).value = result;
    console.log(data);
  }

  //method for adding hyphen in date
  addhyphen(data: any) {
 
    // let result = data
    //   .replace(/\D/g, "")
    //   .split(/(?:([\d]{4}))/g)
    //   .filter((s) => s.length > 0)
    //   .join("-");
    
    let date = new Date().getFullYear() + 1;
  

    let result = Number((document.getElementById("FIN_YEAR")as HTMLInputElement).value);
    console.log(result);
    if(result > date){
      Swal.fire("Warning!", "please enter valid Year ", "warning");
      (document.getElementById("FIN_YEAR")as HTMLInputElement).value = "";
     
    }
    else{
      if(data.length == 4){
        result += 1;
        console.log(result);
        (document.getElementById("FIN_YEAR")as HTMLInputElement).value = data + "-" + result;
      }
     
    }
   
    // (document.getElementById("FIN_YEAR") as HTMLInputElement).value = result;
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.customerIdService.getFormData(id).subscribe((data) => {
      console.log("edit", data);
      this.updateID = data.id;
      this.angForm.patchValue({
        AC_NO: data.AC_NO,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        AC_TITLE: data.AC_TITLE,
        F_NAME: data.F_NAME,
        M_NAME: data.M_NAME,
        L_NAME: data.L_NAME,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.AC_CAST,
        AC_OCODE: data.AC_OCODE,
        AC_ADHARNO: data.AC_ADHARNO,
        AC_RISKCATG: data.AC_RISKCATG,
        AC_BIRTH_DT: data.AC_BIRTH_DT,
        AC_HONO: data.custAddress[0].AC_HONO,
        AC_WARD: data.custAddress[0].AC_WARD,
        AC_ADDR: data.custAddress[0].AC_ADDR,
        AC_GALLI: data.custAddress[0].AC_GALLI,
        AC_AREA: data.custAddress[0].AC_AREA,
        AC_CTCODE: data.custAddress[0].AC_CTCODE,
        AC_PIN: data.custAddress[0].AC_PIN,
        AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
        AC_PANNO: data.AC_PANNO,
        AC_IS_RECOVERY: data.AC_IS_RECOVERY,
        AC_MOBILENO: data.AC_MOBILENO,
        AC_PHONE_RES: data.AC_PHONE_RES,
        AC_PHONE_OFFICE: data.AC_PHONE_OFFICE,
        AC_EMAILID: data.AC_EMAILID,
        TDSDOCUMNET: data.AC_EMAILID,
        TDS_REQUIRED: data.TDS_REQUIRED,
        SMS_REQUIRED: data.SMS_REQUIRED,
        IS_KYC_RECEIVED: data.IS_KYC_RECEIVED,
        FIN_YEAR: data.tdsForm.FIN_YEAR,
        SUBMIT_DATE: data.tdsForm.SUBMIT_DATE,
        FORM_TYPE: data.tdsForm.FORM_TYPE,
        TDS_RATE: data.tdsForm.TDS_RATE,
        TDS_LIMIT: data.tdsForm.TDS_LIMIT,
      });
    });
  }

  //Method for update data
  updateData() {
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this.customerIdService.updateData(data).subscribe(() => {
      console.log(data);
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.rerender();
      this.resetForm();
    });
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete Authority master data.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerIdService.deleteData(id).subscribe((data1) => {
          this.customerMaster = data1;
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          (error) => {
            console.log(error);
          };
        // to reload after delete of data
        this.rerender();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }

  ngAfterViewInit(): void {
    //  this.ngSelect.focus();
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

  ngfocus(){
    this.ngSelect.focus();
  }

  isKYC($event) {
    if ($event.target.checked) {
      this.isDocument = true;
    } else {
      this.isDocument = false;
    }
  }

  isChecked($event) {
    if ($event.target.checked) {
      document.getElementById("{{data.value}}").removeAttribute("disabled");
    } else {
      document
        .getElementById("{{data.value}}")
        .setAttribute("disabled", "true");
    }
  }

  isReceivedTds($event) {
    if ($event.target.checked) {
      this.isTdsForm = true;
      this.isTdsFormA = false;
      this.SUBMIT_DATE = true;
    } else {
      this.isTdsForm = false;
      this.isTdsFormA = false;
      this.SUBMIT_DATE = false;
    }
  }
  isForm15A(value) {
    if (value == 1) {
      this.isTdsFormA = true;
    }
    if (value == 2) {
      this.isTdsFormA = false;
    }
    if (value == 3) {
      this.isTdsFormA = false;
    }
  }
  // cancel() {
  //   this.uploader = null;
  // }
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  fileChangeEvent(event: Event, id, valueid) {
    let arr = [];
    let me = this;
    let obj = {};
    let file = (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function () {
      let result =  await reader.result;
      // obj = {
      //   "id" : valueid,
      //   "path":result
      // }
      obj[valueid] = result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };      
    this.imageObject.push(obj);
    console.log(this.imageObject);
  }

  viewImagePreview(ele: any) {
    console.log(ele);
  }
}
