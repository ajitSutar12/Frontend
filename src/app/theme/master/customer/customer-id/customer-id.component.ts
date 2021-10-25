import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { CustomerIdService } from './customer-id.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { Id1Service } from '../../../../shared/elements/id1.service';
import { MemberService } from '../../../../shared/elements/member.service';
import { MsService } from '../../../../shared/elements/ms.service';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface CustomerMaster {
  AC_NO: number
  AC_MEMBTYPE: string
  AC_MEMBNO: string
  AC_TITLE: string
  AC_NAME: string
  AC_CAST: string
  AC_OCODE: string
  AC_ADHARNO: string
  AC_RISKCATG: string
  AC_BIRTH_DT: string
  AC_PANNO: number
  AC_SALARYDIVISION_CODE: string
  AC_ADDR1: string
  AC_ADDR2: string
  AC_ADDR3: string
  AC_IS_RECOVERY: boolean
  AC_CTCODE: string
  AC_PIN: number
  AC_MOBILENO: number
  AC_PHONE_RES: number
  AC_PHONE_OFFICE: number
  AC_EMAILID: string
  TDS_REQUIRED: boolean
  SMS_REQUIRED: boolean
  IS_KYC_RECEIVED: boolean
}

@Component({
  selector: 'app-customer-id',
  templateUrl: './customer-id.component.html',
  styleUrls: ['./customer-id.component.scss'],
})

export class CustomerIdComponent implements OnInit, AfterViewInit, OnDestroy {

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
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable to get ID to update
  updateID: number = 0;

  simpleOption: Array<IOption> = this.StatementTypeService.getCharacters();
  a: Array<IOption> = this.Id1Service.getCharacters();
  b: Array<IOption> = this.MemberService.getCharacters();
  c: Array<IOption> = this.MsService.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  GuarantorTrue = false;
  ATrue = false;

  constructor(public StatementTypeService: StatementTypeService,
    private http: HttpClient,
    public Id1Service: Id1Service,
    public MemberService: MemberService,
    public MsService: MsService,
    public customerIdService: CustomerIdService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
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
        if (dataTableParameters.search.value != '') {
          this.filter = dataTableParameters.search.value;
          this.filterObject = [
            // { name: "A_BALCODE", type: "default" },
            // { name: "A_ACHEAD", type: "default" },
            // { name: "A_ACTYPE", type: "default" }
          ]
          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length,
            filter: dataTableParameters.search.value,
            filter_in: this.filterObject
          }
        }
        else {
          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length
          }
        }
        this.http
          .post<DataTableResponse>(
            'http://localhost:4000/customer-id',
            dataTableParameters
          ).subscribe(resp => {
            this.customerMaster = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: 'Action',
        },

        {
          title: ' Customer ID',
        },
        {
          title: 'Member Scheme',
        },
        {
          title: 'Member No.',
        },
        {
          title: 'Title',
        },
        {
          title: 'Cast',
        },
        {
          title: 'Occupation',
        },
        {
          title: 'Adhar Card No.',
        },
        {
          title: 'Risk Category',
        },
        {
          title: 'Birth Date',
        },
        {
          title: 'PAN No.',
        },
        {
          title: 'Salary Div.',
        },
        {
          title: 'Address Text',
        },
        {
          title: 'Address Text',
        },
        {
          title: 'Address Text',
        },
        {
          title: 'Recovery',
        },
        {
          title: 'City',
        },
        {
          title: 'Pin',
        },
        {
          title: 'Mobile',
        },
        {
          title: 'Recidential(R)',
        },
        {
          title: 'Office(O)',
        },
        {
          title: 'Email',
        },
        {
          title: 'TDS Calculation Required?',
        },
        {
          title: 'SMS Facility Required ?',
        },
        {
          title: 'KYC',
        }
      ],
      dom: 'Bfrtip',
    };

    this.runTimer();
    this.dataSub = this.StatementTypeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Id1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.MemberService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.MsService.loadCharacters().subscribe((options) => {
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

  OpenLink(val) {
    if (val == 1) {
      this.GuarantorTrue = true;
    }
    if (val == 2) {
      this.ATrue = true;
    }
  }


  createForm() {
    this.angForm = this.fb.group({
      AC_NO: ['',],
      AC_MEMBTYPE: ['', [Validators.pattern]],
      AC_MEMBNO: ['', [Validators.pattern]],
      AC_TITLE: ['',[Validators.required]],
      AC_NAME: ['', [Validators.pattern, Validators.required]],
      AC_CAST: ['', [Validators.pattern]],
      AC_OCODE: ['', [Validators.pattern]],
      AC_ADHARNO: ['', [Validators.pattern]],
      AC_RISKCATG: ['', [Validators.pattern]],
      AC_BIRTH_DT: ['',],
      AC_PANNO: ['', [Validators.pattern]],
      AC_SALARYDIVISION_CODE: ['', [Validators.pattern]],
      AC_ADDR1: ['', [Validators.pattern]],
      AC_ADDR2: ['', [Validators.pattern]],
      AC_ADDR3: ['', [Validators.pattern]],
      AC_IS_RECOVERY: [false],
      AC_CTCODE: ['', [Validators.pattern]],
      AC_PIN: ['', [Validators.pattern]],
      AC_MOBILENO: ['', [Validators.pattern]],
      AC_PHONE_RES: ['', [Validators.pattern]],
      AC_PHONE_OFFICE: ['', [Validators.pattern]],
      AC_EMAILID: ['', [Validators.pattern]],
      TDS_REQUIRED: [false],
      SMS_REQUIRED: [false],
      IS_KYC_RECEIVED: [false],
      // FIN_YEAR: ['',[Validators.pattern]],
      // SUBMIT_DATE: [''],
      // FORM_TYPE: [''],
      // TDS_RATE: ['',[Validators.pattern,Validators.required]],
      // TDS_LIMIT: ['',[Validators.pattern,Validators.required]],
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
      'AC_NAME': formVal.AC_NAME,
      'AC_CAST': formVal.AC_CAST,
      'AC_OCODE': formVal.AC_OCODE,
      'AC_ADHARNO': formVal.AC_ADHARNO,
      'AC_RISKCATG': formVal.AC_RISKCATG,
      'AC_BIRTH_DT': formVal.AC_BIRTH_DT,
      'AC_PANNO': formVal.AC_PANNO,
      'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
      'AC_ADDR1': formVal.AC_ADDR1,
      'AC_ADDR2': formVal.AC_ADDR2,
      'AC_ADDR3': formVal.AC_ADDR3,
      'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
      'AC_CTCODE': formVal.AC_CTCODE,
      'AC_PIN': formVal.AC_PIN,
      'AC_MOBILENO': formVal.AC_MOBILENO,
      'AC_PHONE_RES': formVal.AC_PHONE_RES,
      'AC_PHONE_OFFICE': formVal.AC_PHONE_OFFICE,
      'AC_EMAILID': formVal.AC_EMAILID,
      'TDS_REQUIRED': formVal.TDS_REQUIRED,
      'SMS_REQUIRED': formVal.SMS_REQUIRED,
      'IS_KYC_RECEIVED': formVal.IS_KYC_RECEIVED
    }
    this.customerIdService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.angForm.reset();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.customerIdService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'AC_NO': data.AC_NO,
        'AC_MEMBTYPE': data.AC_MEMBTYPE,
        'AC_MEMBNO': data.AC_MEMBNO,
        'AC_TITLE': data.AC_TITLE,
        'AC_NAME': data.AC_NAME,
        'AC_CAST': data.AC_CAST,
        'AC_OCODE': data.AC_OCODE,
        'AC_ADHARNO': data.AC_ADHARNO,
        'AC_RISKCATG': data.AC_RISKCATG,
        'AC_BIRTH_DT': data.AC_BIRTH_DT,
        'AC_PANNO': data.AC_PANNO,
        'AC_SALARYDIVISION_CODE': data.AC_SALARYDIVISION_CODE,
        'AC_ADDR1': data.AC_ADDR1,
        'AC_ADDR2': data.AC_ADDR2,
        'AC_ADDR3': data.AC_ADDR3,
        'AC_IS_RECOVERY': data.AC_IS_RECOVERY,
        'AC_CTCODE': data.AC_CTCODE,
        'AC_PIN': data.AC_PIN,
        'AC_MOBILENO': data.AC_MOBILENO,
        'AC_PHONE_RES': data.AC_PHONE_RES,
        'AC_PHONE_OFFICE': data.AC_PHONE_OFFICE,
        'AC_EMAILID': data.AC_EMAILID,
        'TDS_REQUIRED': data.TDS_REQUIRED,
        'SMS_REQUIRED': data.SMS_REQUIRED,
        'IS_KYC_RECEIVED': data.IS_KYC_RECEIVED

      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.customerIdService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.angForm.reset();
    })
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Authority master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerIdService.deleteData(id).subscribe(data1 => {
          this.customerMaster = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {
          console.log(error)
        }
        // to reload after delete of data
        this.rerender();
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