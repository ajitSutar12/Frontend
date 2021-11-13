import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { animate, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { anamatGSMService } from './anamat-gsm.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
// static dropdown
//import { anamatGSMServiceD} from '../../../shared/dropdownService/user-defination-dropdown.service'
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { first } from 'rxjs/operators';
//dropdown
 import { TitleService } from '../../../../shared/elements/title.service';
 import { MsService } from '../../../../shared/elements/ms.service';
 import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
 import { CustomeridService } from '../../../../shared/elements/customerid.service';
 import { City3Service } from '../../../../shared/elements/city3.service';


// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface glsubmaster {
  //id:number
  AC_ACNOTYPE:number;
  AC_TYPE: string;
  AC_NO: String;
  AC_CUSTID:string;
  AC_TITLE:string;
  AC_NAME: string;
  AC_MEMBTYPE:string;
  AC_MEMBNO:string;
  AC_HONO: string;
  AC_WARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_AREA: string;
  AC_CTCODE:string;
  AC_PIN:string;
  AC_OPDATE:Date;
  Recovery:string;
  Debit:boolean;
  AC_PARTICULAR:string;



}

 @Component({
   selector: 'app-anamat-gsm',
   templateUrl: './anamat-gsm.component.html',
   styleUrls: ['./anamat-gsm.component.scss'],
   animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
 })

 export class AnamatGSMComponent implements  OnInit, AfterViewInit, OnDestroy  {
  // newCustomerID = [];
  newCustomerID;

  newCustomer(newCustomer) {
    console.log("new customer")
    // this.newCustomerID.push(newCustomer)
    this.newCustomerID = newCustomer
    console.log(this.newCustomerID)
    this.angForm.setValue({
      'AC_TITLE': this.newCustomerID.AC_TITLE,
      'AC_NAME': this.newCustomerID.AC_NAME,
      'AC_CAST': this.newCustomerID.AC_CAST,
      'AC_OCODE': this.newCustomerID.AC_OCODE,
      'AC_ADHARNO': this.newCustomerID.AC_ADHARNO,
      'AC_RISKCATG': this.newCustomerID.AC_RISKCATG,
      'AC_BIRTH_DT': this.newCustomerID.AC_BIRTH_DT,
      'AC_HONO': this.newCustomerID.AC_HONO,
      'AC_WARD': this.newCustomerID.AC_WARD,
      'AC_TADDR': this.newCustomerID.AC_TADDR,
      'AC_TGALLI': this.newCustomerID.AC_TGALLI,
      'AC_AREA': this.newCustomerID.AC_AREA,
      'AC_CTCODE': this.newCustomerID.AC_CTCODE,
      'AC_PIN': this.newCustomerID.AC_PIN,
      'AC_PANNO': this.newCustomerID.AC_PANNO,
      'AC_SALARYDIVISION_CODE': this.newCustomerID.AC_SALARYDIVISION_CODE,
      'AC_MOBILENO': this.newCustomerID.AC_MOBILENO,
      'AC_PHONE_RES': this.newCustomerID.AC_PHONE_RES,
      'AC_PHONE_OFFICE': this.newCustomerID.AC_PHONE_OFFICE,
      'AC_EMAILID': this.newCustomerID.AC_EMAILID,
      'AC_IS_RECOVERY': this.newCustomerID.AC_IS_RECOVERY,
      'TDS_REQUIRED': this.newCustomerID.TDS_REQUIRED,
      'SMS_REQUIRED': this.newCustomerID.SMS_REQUIRED,
      'IS_KYC_RECEIVED': this.newCustomerID.IS_KYC_RECEIVED,
      'FIN_YEAR': this.newCustomerID.FIN_YEAR,
      'SUBMIT_DATE': this.newCustomerID.SUBMIT_DATE,
      'FORM_TYPE': this.newCustomerID.FORM_TYPE,
      'TDS_RATE': this.newCustomerID.TDS_RATE,
      'TDS_LIMIT': this.newCustomerID.TDS_LIMIT,

    })
  }
  basicTab;
  otherTab;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
 
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  anamat: glsubmaster[];
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
  updateID: number = 0;

  companyCode: any;
  schemeCode: any;

  //for search functionality
  filterData = {};


  //title select variables
  d: Array<IOption> = this.City3Service.getCharacters();
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  itemtypeoption: Array<IOption> = this.TitleService.getCharacters();
   scheme: Array<IOption> = this.MsService.getCharacters();
   Ac_NO: Array<IOption> = this.accountCodeService.getCharacters();
   CustomerID: Array<IOption> = this.customerIdService.getCharacters();
   selectedOption = '3';
  isDisabled = true;
   characters: Array<IOption>;
   selectedCharacter = '3';
   timeLeft = 5;

  private dataSub: Subscription = null;

     //variables for  add and update button
  //  showButton: boolean = true;
  //  updateShow: boolean = false;

   //variable for checkbox and radio button 
      isRecovery: boolean = false;
      isDebit: boolean = true;

  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private anamatGSMService: anamatGSMService,
    public TitleService: TitleService,
     public MsService: MsService, 
     public customerIdService: CustomeridService,
      public accountCodeService: AccountcodeService,
      public City3Service: City3Service,
     
  //  private anamatGSMServiceDa: anamatGSMServiceDa,
  
  ) { }

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
        dataTableParameters.columns.forEach(element => {
          if(element.search.value !=''){
  
            let string = element.search.value;
            this.filterData[element.data] = string;
          }else{
  
            let getColumnName = element.data;
            let columnValue = element.value;
            if(this.filterData.hasOwnProperty(element.data)){
                let value = this.filterData[getColumnName];
                if(columnValue != undefined || value != undefined){
                  delete this.filterData[element.data];
                } 
            }
          }
        });
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
           'http://localhost:4000/user-defination',
            dataTableParameters
          ).subscribe(resp => {
            this.anamat = resp.data;
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
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          }
        },
                  {
                    data: 'AC_TYPE',
                    title: 'Scheme'
                  },
                  {
                    data: 'AC_NO',
                    title: 'Account'
                  },
                  {
                    data: 'AC_CUSTID',
                    title: 'Customer ID'
                  },
                  {
                    data: 'AC_TITLE',
                    title: 'Title'
                  },
                  {
                    data: 'AC_NAME',
                    title: 'Name'
                  },
                  {
                    data: 'AC_MEMBTYPE',
                    title: 'Member Scheme'
                  },
                  {
                    data: 'AC_MEMBNO',
                    title: 'Member No'
                  },
                  
                  {
                    data: 'AC_HONO',
                    title: 'House'
                  },
                  {
                    data: 'AC_WARD',
                    title: 'Ward'
                  },
                  {
                    data: 'AC_TADDR',
                    title: 'Detail'
                  },
                  {
                    data: 'AC_TGALLI',
                    title: 'Galli'
                  },
                  {
                    data: 'AC_AREA',
                    title: 'Area'
                  },
                  {
                    data: 'AC_CTCODE',
                    title: 'City'
                  },
                  {
                    data: 'AC_PIN',
                    title: 'Pincode'
                  },
                  {
                    data: 'AC_OPDATE',
                    title: 'opening bal. date'
                  },
                  {
                    data: 'Recovery',
                    title: 'Recovery'
                  },
                  {
                    data: 'Debit',
                    title: 'opening bal'
                  },
                  {
                    data: 'AC_PARTICULAR',
                    title: 'Reason'
                  },
             
      ],
      dom: 'Blrtip',
    };
   
    // this.anamatGSMServiceD.getuserdefinationList().pipe(first()).subscribe(data => {
    //   this.anamat = data;
    // })
    this.runTimer();
        this.dataSub = this.TitleService.loadCharacters().subscribe((options) => {
           this.characters = options;
         });
    
         this.dataSub = this.MsService.loadCharacters().subscribe((options) => {
           this.characters = options;
         });
         this.dataSub = this.accountCodeService.loadCharacters().subscribe((options) => {
           this.characters = options;
         });
         this.dataSub = this.customerIdService.loadCharacters().subscribe((options) => {
           this.characters = options;
         });
         this.dataSub = this.City3Service.loadCharacters().subscribe((options) => {
          this.characters = options;
        });
  
  }
  createForm() {
    this.angForm = this.fb.group({
    
      
      AC_TYPE: ['', [Validators.required,Validators.pattern]],
      AC_NO: ['', [ Validators.pattern]],
      AC_CUSTID: [''],
      AC_TITLE: ['', [Validators.required, Validators.pattern]],
      AC_NAME: ['', [Validators.required, Validators.pattern]],
      AC_MEMBTYPE: ['', [Validators.required]],
      AC_MEMBNO: ['', [Validators.required, Validators.pattern]],
      AC_HONO: ['', [Validators.required, Validators.pattern]],
      AC_WARD: ['', [Validators.required]],
      AC_TADDR:[''],
      AC_TGALLI:[''],
      AC_AREA:[''],
      AC_CTCODE:[''],
      AC_PIN:[''],
      AC_OPDATE:[''],
      Recovery:[''],
      Debit:[''],
      AC_PARTICULAR:[''],
      


    });
  }
    // Method to insert data into database through NestJS
    submit() {
      const formVal = this.angForm.value;
      const dataToSend = {
        'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
        'AC_TYPE': formVal.AC_TYPE,
        'AC_NO': formVal.AC_NO,
        'AC_CUSTID': formVal.AC_CUSTID,
        'AC_TITLE': formVal.AC_TITLE,
        'AC_NAME': formVal.AC_NAME,
        'AC_MEMBTYPE': formVal.AC_MEMBTYPE,
        'AC_MEMBNO': formVal.AC_MEMBNO,
        'AC_HONO': formVal.AC_HONO,
        'AC_WARD': formVal.AC_WARD,
        'AC_TADDR': formVal.AC_TADDR,
        'AC_TGALLI': formVal.AC_TGALLI,
        'AC_AREA': formVal.AC_AREA,
        'AC_CTCODE': formVal.AC_CTCODE,
        'AC_PIN': formVal.AC_PIN,
        'AC_OPDATE': formVal.AC_OPDATE,
        'Recovery': formVal.Recovery,
        'Debit': formVal.Debit,
        'AC_PARTICULAR': formVal.AC_PARTICULAR,
  
      }
      this.anamatGSMService.postData(dataToSend).subscribe(data1 => {
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
      this.anamatGSMService.getFormData(id).subscribe(data => {
        this.updateID = data.id;
        this.angForm.setValue({
          'AC_ACNOTYPE': data.AC_ACNOTYPE,
          'AC_TYPE': data.AC_TYPE,
          'AC_NO': data.AC_NO,
          'AC_CUSTID': data.AC_CUSTID,
          'AC_TITLE': data.AC_TITLE,
          'AC_NAME': data.AC_NAME,
          'AC_MEMBTYPE': data.AC_MEMBTYPE,
          'AC_MEMBNO': data.AC_MEMBNO,
          'AC_HONO': data.AC_HONO,
          'AC_WARD': data.AC_WARD,
          'AC_TADDR': data.AC_TADDR,
          'AC_TGALLI': data.AC_TGALLI,
          'AC_AREA': data.AC_AREA,
          'AC_CTCODE': data.AC_CTCODE,
          'AC_PIN': data.AC_PIN,
          'AC_OPDATE': data.AC_OPDATE,
          'Recovery': data.Recovery,
          'Debit': data.Debit,
          'AC_PARTICULAR': data.AC_PARTICULAR,
        
        })
      })
    }
    //Method for update data 
    updateData() {
      let data = this.angForm.value;
      data['id'] = this.updateID;
      this.anamatGSMService.updateData(data).subscribe(() => {
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
        text: "Do you want to delete narration data.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#229954',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.anamatGSMService.deleteData(id).subscribe(data1 => {
            this.anamat = data1;
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
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('input', this.footer()).on('keyup change', function () {
         
            if (this['value'] != '') {
              that
                .search(this['value'])
                .draw();
            }else{
              that
              .search(this['value'])
              .draw();
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
    runTimer() {
      const timer = setInterval(() => {
        this.timeLeft -= 1;
        if (this.timeLeft === 0) {
          clearInterval(timer);
        }
      }, 1000);
    }
   
}

