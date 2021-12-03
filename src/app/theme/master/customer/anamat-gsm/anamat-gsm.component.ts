import { AfterViewInit,Component,OnDestroy,OnInit, ViewChild} from "@angular/core";

//animation
import { animate, style, transition, trigger } from "@angular/animations";

import { Subject } from "rxjs";

// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

// Displaying Sweet Alert
import Swal from "sweetalert2";

// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";

// Used to Call API
import { HttpClient } from "@angular/common/http";
import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import { first } from "rxjs/operators";
import { environment } from "../../../../../environments/environment";

// Service File For Handling CRUD Operation
import { anamatGSMService } from "./anamat-gsm.service";

//service file for fetching records from customer ID
import { CustomerIdService } from "../customer-id/customer-id.service"; 

//Service file of dropdown
import { CustomerIDMasterDropdownService } from "../../../../shared/dropdownService/customer-id-master-dropdown.service";
import { cityMasterService } from "../../../../shared/dropdownService/city-master-dropdown.service";
import { SchemeCodeDropdownService } from "../../../../shared/dropdownService/scheme-code-dropdown.service";
import { PrefixMasterDropdownService } from "src/app/shared/dropdownService/prefix-master-dropdown.service";
import {SystemMasterParametersService} from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service"


// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface anamatinf {
  //id:number
  AC_ACNOTYPE: number;
  AC_TYPE: string;
  AC_NO: String;
  AC_CUSTID: string;
  AC_TITLE: string;
  AC_NAME: string;
  AC_MEMBTYPE: string;
  AC_MEMBNO: string;
  AC_HONO: string;
  AC_WARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_AREA: string;
  AC_CTCODE: string;
  AC_PIN: string;
  AC_OPDATE: Date;
  AC_IS_RECOVERY: string;
  DEBIT: boolean;
  AC_PARTICULAR: string;
}

@Component({
  selector: "app-anamat-gsm",
  templateUrl: "./anamat-gsm.component.html",
  styleUrls: ["./anamat-gsm.component.scss"],
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

export class AnamatGSMComponent implements OnInit, AfterViewInit, OnDestroy {
   //api
   url = environment.base_url;
  
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // Store data from backend
  anamat: anamatinf[];

  // Created Form Group
  angForm: FormGroup;

  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
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
 
  //for search functionality
  filterData = {};

  // Dropdown Options
  scheme: any[];//scheme code from schemast(S_ACNOTYPE)
  Cust_ID: any[]; //customer id from idmaster
  city: any[];//city from customer id from idmaster

  prifix: any;
  AC_CUSTID: any;

  // for new customer
  newCustomerID;
  
  updateID: number = 0;

  //Scheme type variable
  schemeType: string = 'GS'
 
  timeLeft = 5;
  
  id: any = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private anamatGSMService: anamatGSMService,
    public customerIdService: CustomerIdService,
    private prefixMaster: PrefixMasterDropdownService,
    private cityMasterService: cityMasterService, 
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private customerID: CustomerIDMasterDropdownService,
    private systemParameter:SystemMasterParametersService
  ) { }

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
          if (element.search.value != '') {
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
            this.url + "/anamat-gsm",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.anamat = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      columnDefs: [
        {
          targets: "_all",
          defaultContent: '',
        },
      ],
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        {
          title: 'Type',
          data: 'AC_ACNOTYPE'
        },
        {
          data: "AC_TYPE",
          title: "Scheme",
        },
        {
          data: "AC_NO",
          title: "Account",
        },
        {
          data: "AC_CUSTID",
          title: "Customer ID",
        },
        {
          data: "AC_TITLE",
          title: "Title",
        },
        {
          data: "AC_NAME",
          title: "Name",
        },
        {
          data: "AC_MEMBTYPE",
          title: "Member Scheme",
        },
        {
          data: "AC_MEMBNO",
          title: "Member No",
        },

        {
          data: "AC_HONO",
          title: "House",
        },
        {
          data: "AC_WARD",
          title: "Ward",
        },
        {
          data: "AC_TADDR",
          title: "Detail",
        },
        {
          data: "AC_TGALLI",
          title: "Galli",
        },
        {
          data: "AC_AREA",
          title: "Area",
        },
        {
          data: "AC_CTCODE",
          title: "City",
        },
        {
          data: "AC_PIN",
          title: "Pincode",
        },
        {
          data: "AC_OPDATE",
          title: "opening bal. date",
        },
        {
          data: "AC_IS_RECOVERY",
          title: "Recovery",
        },
        {
          data: "DEBIT",
          title: "opening bal",
        },
        {
          data: "AC_PARTICULAR",
          title: "Reason",
        },
      ],
      dom: "Blrtip",
    };

    this.runTimer();

    this.prefixMaster.getPrefixMasterList().pipe(first()).subscribe(data => {
      this.prifix = data;
    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
    })

    this.cityMasterService
      .getcityList()
      .pipe(first())
      .subscribe((data) => {
        this.city = data;
      });

    this.customerID
      .getCustomerIDMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.Cust_ID = data;
      });
  }


  //check  if require values
  checkRequire(ele:any){ 
  
   
    if(ele <= 100){
  console.log(ele);
    }
    else{
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }

checkCUST_No(){
  if (this.AC_CUSTID = ''){
console.log(this.AC_CUSTID)
  }
  else{
    Swal.fire("Invalid Input", "Please insert Customer ID", "error");
  }
}


  addNewCustomer(newCustomer) {
    this.customerID
      .getCustomerIDMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.Cust_ID = data;
        this.id = newCustomer;
        this.getCustomer(newCustomer);
      });
  }
  getCustomer(id) {
    this.customerIdService.getFormData(id).subscribe(data => {
      this.angForm.patchValue({
        AC_CUSTID: id.toString(),
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.AC_CAST,
        AC_OCODE: data.AC_OCODE,
        AC_MEM_BIRTH_DT: data.AC_BIRTH_DT,
        AC_ADDFLAG: data.custAddress[0].AC_ADDFLAG,
        AC_HONO: data.custAddress[0].AC_HONO,
        AC_WARD: data.custAddress[0].AC_WARD,
        AC_ADDR: data.custAddress[0].AC_ADDR,
        AC_GALLI: data.custAddress[0].AC_GALLI,
        AC_AREA: data.custAddress[0].AC_AREA,
        AC_CTCODE: data.custAddress[0].AC_CTCODE,
        AC_PIN: data.custAddress[0].AC_PIN,
        AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,
        AC_EMAIL: data.AC_EMAILID,
        AC_IS_RECOVERY: data.AC_IS_RECOVERY,
        AC_THONO: data.custAddress.AC_THONO,
        AC_TWARD: data.custAddress.AC_TWARD,
        AC_TADDR: data.custAddress.AC_TADDR,
        AC_TGALLI: data.custAddress.AC_TGALLI,
        AC_TAREA: data.custAddress.AC_TAREA,
        AC_TCTCODE: data.custAddress.AC_TCTCODE,
        AC_TPIN: data.custAddress.AC_TPIN,
      })
      console.log(data)
    })
  }
 

    //set open date, appointed date and expiry date
    getSystemParaDate() {
      this.systemParameter.getFormData(1).subscribe(data => {
        this.angForm.patchValue({
          AC_OPDATE: data.CURRENT_DATE,
          DATE_APPOINTED: data.CURRENT_DATE,
          DATE_EXPIRY: data.CURRENT_DATE
        })
      })
    }

  createForm() {
    this.angForm = this.fb.group({
      AC_ACNOTYPE: ['GS'],
      AC_TYPE: ['',[Validators.required]],
      AC_NO: ['',[Validators.required]],
      AC_CUSTID: [''],
      AC_TITLE: [''],
      AC_NAME: ['', [Validators.required,Validators.pattern]],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      AC_HONO: ['',[Validators.pattern]],
      AC_WARD: ['',[Validators.pattern]],
      AC_TADDR: ['',[Validators.pattern]],
      AC_TGALLI: ['',[Validators.pattern]],
      AC_AREA: ['',[Validators.pattern]],
      AC_CTCODE: ['',[Validators.pattern]],
      AC_PIN: [''],
      AC_OPDATE: ['',[Validators.required]],
      AC_IS_RECOVERY: [''],
      DEBIT: new FormControl('Credit') ,
      AC_PARTICULAR: ['',[Validators.required,Validators.pattern]],
     
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      AC_ACNOTYPE: formVal.AC_ACNOTYPE,
      AC_TYPE: formVal.AC_TYPE,
      AC_NO: formVal.AC_NO,
      AC_CUSTID: formVal.AC_CUSTID,
      // AC_TITLE: formVal.AC_TITLE,
      // AC_NAME: formVal.AC_NAME,
      // AC_MEMBTYPE: formVal.AC_MEMBTYPE,
      // AC_MEMBNO: formVal.AC_MEMBNO,
      // AC_HONO: formVal.AC_HONO,
      // AC_WARD: formVal.AC_WARD,
      // AC_TADDR: formVal.AC_TADDR,
      // AC_TGALLI: formVal.AC_TGALLI,
      // AC_AREA: formVal.AC_AREA,
      // AC_CTCODE: formVal.AC_CTCODE,
      // AC_PIN: formVal.AC_PIN,
      AC_OPDATE: formVal.AC_OPDATE,
      Recovery: formVal.Recovery,
      DEBIT: formVal.DEBIT,
      AC_PARTICULAR: formVal.AC_PARTICULAR,
    };

    this.anamatGSMService.postData(dataToSend).subscribe(
      (data1) => {
        
        Swal.fire("Success!", "Data Added Successfully !", "success");
        // to reload after insertion of data
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload();
        });
      },
      (error) => {
        console.log(error);
      }
    );

    //To clear form
    this.angForm.reset();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.anamatGSMService.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      this.angForm.patchValue({
        AC_ACNOTYPE: data.AC_ACNOTYPE,
        AC_TYPE: data.AC_TYPE,
        AC_NO: data.AC_NO,
        AC_CUSTID: data.AC_CUSTID,
        // AC_TITLE: data.AC_TITLE,
        // AC_NAME: data.AC_NAME,
        // AC_MEMBTYPE: data.AC_MEMBTYPE,
        // AC_MEMBNO: data.AC_MEMBNO,
        // AC_HONO: data.AC_HONO,
        // AC_WARD: data.AC_WARD,
        // AC_TADDR: data.AC_TADDR,
        // AC_TGALLI: data.AC_TGALLI,
        // AC_AREA: data.AC_AREA,
        // AC_CTCODE: data.AC_CTCODE,
        // AC_PIN: data.AC_PIN,
        AC_OPDATE: data.AC_OPDATE,
        AC_IS_RECOVERY: data.AC_IS_RECOVERY,
        DEBIT: data.DEBIT,
        AC_PARTICULAR: data.AC_PARTICULAR,
      });
    });
  }

  //Method for update data
  updateData() {
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this.anamatGSMService.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.angForm.reset();
    });
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  // Reset Function
  resetForm() {
    this.createForm();
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete narration data.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.anamatGSMService.deleteData(id).subscribe((data1) => {
          this.anamat = data1;
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
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $("input", this.footer()).on("keyup change", function () {
          if (this["value"] != '') {
            that.search(this["value"]).draw();
          } else {
            that.search(this["value"]).draw();
          }
        });
      });
    });
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

    
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

 
}
