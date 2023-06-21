import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { animate, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { UserDefinationService } from './user-defination.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
// static dropdown
import { UserdefinationServiceD } from '../../../shared/dropdownService/user-defination-dropdown.service';
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { NgSelectComponent } from '@ng-select/ng-select';
import { data, event } from 'jquery';
import { id } from '@swimlane/ngx-datatable';
import * as moment from 'moment';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface userdefination {
  //id:number
  F_NAME: string;
  L_NAME: String;
  DOB: string;
  MOB_NO: number;
  EMAIL: string;
  ROLE: string;
  USER_NAME: string;
  PASSWORD: string;



  STATUS: boolean;
  // USER_CREATED_AT:string;


}

@Component({
  selector: 'app-user-defination',
  templateUrl: './user-defination.component.html',
  styleUrls: ['./user-defination.component.scss']
})
export class UserDefinationComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  userdef: userdefination[];
  // Created Form Group
  angForm: FormGroup;
  angEditForm: FormGroup;
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
  date:any
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number = 0;
  url = environment.base_url;
  companyCode: any;
  schemeCode: any;

  //for search functionality
  filterData = {};
  //Title
  // ROLE: Array<IOption> = this.userdefinationservice.getRoleList();
  // ROLE: IOption[];
  ROLEX: any;
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  selectedRole :Array<string> = ['1'];F_NAME: any;
  L_NAME: any;
  brachId:any;
  timeLeft = 5;
  barnchData: any;
  userId: any;
  // ROLE:any;
  // din:Array<IOption>;

  showAdd: boolean = true;
  showEdit: boolean = false;

  private dataSub: Subscription = null;
  selectedRoleName: string;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userdefinationservice: UserDefinationService,
    private UserdefinationServiceD: UserdefinationServiceD,
    private _branchMasterServices: OwnbranchMasterService

  ) {
    
  
  }

  ngOnInit(): void {
    
    this.userdefinationservice.getRoleList().subscribe(data => {
      this.ROLEX = data;
    
    });
    this._branchMasterServices.getOwnbranchList().pipe(first()).subscribe(data => {
      this.barnchData = data;
      
    })
    this.createForm();

    // Fetching Server side data
    this.dtExportButtonOptions = {
    
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      searching:true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber = dataTableParameters.start +dataTableParameters.length;

        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;
        dataTableParameters.columns.forEach(element => {
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
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/user-defination',
            dataTableParameters
          ).subscribe(resp => {
            this.userdef = resp.data;
            console.log(this.userdef);
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
          title: 'First Name',
          data: 'F_NAME',
        },
        {
          title: 'Last Name',
          data: 'L_NAME',
        },
        {
          title: 'DOB',
          data: 'DOB',
        },
        {
          title: 'Mobile',
          data: 'MOB_NO',
        },
        {
          title: 'Email',
          data: 'EMAIL',
        },

        {
          title: 'Role',
          data: 'ROLE',
        },

        {
          title: 'User Name',
          data: 'USER_NAME',
        },
        // {
        //   title: 'Password',
        //   data: 'PASSWORD',
        // },
        {
          title: 'Status',
          data: 'STATUS',
        },
        // {
        //   title: 'User Created-at',
        //   data: 'USER_CREATED_AT',
        // }

      ],
      dom: 'Blrtip',
    };
 
    this.runTimer();

    // this.dataSub = this.UserdefinationServiceD.loadCharacters().subscribe((options) => {
    //   this.characters = options;
    //   console.log(this.characters);
      
    // });
    // this.userdefinationservice.getuserdefinationList().pipe(first()).subscribe(data => {
    //   this.userdef = data;
    //     console.log(this.userdef);
      
    //    })
  }
  createForm() {

    this.angEditForm = this.fb.group({
      FULL_NAME: [''],
      Edit_branchId: ['', [Validators.required]],
      EDIT_ROLE: ['', [Validators.required]],
      STATUS1: ['',[Validators.required]]
    });
    this.angForm = this.fb.group({
      F_NAME: ['', [Validators.required, Validators.pattern]],
      L_NAME: ['', [Validators.pattern]],
      DOB: [''],
      MOB_NO: ['', [Validators.required, Validators.pattern]],
      EMAIL: ['', [Validators.required, Validators.pattern]],
      ROLE: ['', [Validators.required]],
      USER_NAME: ['', [Validators.required, Validators.pattern]],
      // PASSWORD: ['', [Validators.required, Validators.pattern]],
      STATUS: new FormControl('active'),
      branchId: ['', [Validators.required]]
      // USER_CREATED_AT: ['', [ Validators.pattern]],
    });
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
 
  // Method to insert data into database through NestJS
  submit() {
    debugger
    const formVal = this.angForm.value;
    const dataToSend = {
      'F_NAME': formVal.F_NAME,
      'L_NAME': formVal.L_NAME,
      'DOB': moment(formVal.DOB).format('DD/MM/YYYY'),
      'MOB_NO': formVal.MOB_NO,
      'EMAIL': formVal.EMAIL,
      'roleId': formVal.ROLE,
      'USER_NAME': formVal.USER_NAME,
      'PASSWORD': 'Admin@21',
      'STATUS': formVal.STATUS,
      'branchId': formVal.branchId
     
      // 'USER_CREATED_AT': formVal.USER_CREATED_AT,
    }
    console.log(dataToSend);
    

    this.userdefinationservice.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
      this.createForm()
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.angForm.reset();
  }
  // newFunction(event:any){
  //  this.selectedRoleName = event.value;    
  //  console.log(this.selectedRoleName);
   
  //  }
    // dater(event:any){
    //   this.date = event.value
    //   console.log(this.date);    
    // }


  //Method for append data into fields
  editClickHandler(id) {
   this.showButton=false
    this.showAdd = true;
    this.updateShow = true;
    // this.showEdit = true;    
    this.userdefinationservice.getFormData(id).subscribe(data=>{
      console.log(data,'edit');
      this.updateID = data.id;
      this.angForm.patchValue({
        'F_NAME': data.F_NAME,
        'L_NAME': data.L_NAME,
        'DOB': data.DOB,
        'MOB_NO': data.MOB_NO,
        'EMAIL': data.EMAIL,
       'roleId': data.RoleDefine[0].RoleId,
       'ROLE': data.RoleDefine[0].RoleId,
      //  'selectedRoleName': data.RoleDefine[0].Role.NAME,
            'branchId':data.branchId,
        'USER_NAME': data.USER_NAME,
        // 'PASSWORD': data.PASSWORD,
        'STATUS': data.STATUS,
        // 'USER_CREATED_AT': data.USER_CREATED_AT,
      })
    })
  }

  
  

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['roleId'] = this.angForm.controls['ROLE'].value;
    this.userdefinationservice.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.createForm()
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
        this.userdefinationservice.deleteData(id).subscribe(data1 => {
          this.userdef = data1;
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
    debugger
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {

          if (this['value'] != '') {
            that
              .search(this['value'])
              .draw();
          } else {
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


  saveEdit(){
    let data = this.angEditForm.value;
    data['id'] = this.userId;
    this.userdefinationservice.updateRoleBranch(data).subscribe(data=>{
      Swal.fire('Success!', 'Role and Branch Update Successfully !', 'success');
      this.rerender();
    },err=>{
      Swal.fire(err.error.error, err.error.message, 'error');
    })
  }

  closeEditForm(){
    this.showAdd = true;
    this.showEdit = false;
  }
  
}


//   // For reloading angular datatable after CRUD operation
  //   @ViewChild(DataTableDirective, { static: false })
  //   dtElement: DataTableDirective;
  //   dtOptions: DataTables.Settings = {};
  //   dtTrigger: Subject<any> = new Subject();
  //   // Store data from backend
  //   userdefination: userdefination[];
  //   // Created Form Group
  //   angForm: FormGroup;
  //   //Datatable variable
  //   dtExportButtonOptions: DataTables.Settings = {};
  //   Data: any;
  //   //variables for pagination
  //   page: number = 1;
  //   passenger: any;
  //   itemsPerPage = 10;
  //   totalItems: any;
  //   currentJustify = 'start';
  //   active = 1;
  //   activeKeep = 1;
  //   // Variables for search 
  //   filterObject: { name: string; type: string; }[];
  //   filter: any;
  //   filterForm: FormGroup;
  //   // Variables for hide/show add and update button
  //   showButton: boolean = true;
  //   updateShow: boolean = false;
  //   //variable to get Id to update
  //   updateID: number = 0;

  //   //option for dropdown
  // //userdef: any;

  //   //Title select variables


  //   private dataSub: Subscription = null
  //   userdef: Array<IOption> = this.UserdefinationServiceD.getCharacters();
  //   selectedOption1 = '3';
  //   isDisabled1 = true;
  //   characters1: Array<IOption>;
  //   selectedCharacter1 = '3';
  //   timeLeft1 = 5;
