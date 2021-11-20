import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { animate, style, transition, trigger } from '@angular/animations';
import { Observable, of, Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { UserDefinationService } from './user-defination.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
// static dropdown
import { UserdefinationServiceD } from '../../../shared/dropdownService/user-defination-dropdown.service'
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime, distinctUntilChanged, first, map, switchMapTo, take, tap } from 'rxjs/operators';

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
  s_email: string;
  // USER_CREATED_AT:string;


}

@Component({
  selector: 'app-user-defination',
  templateUrl: './user-defination.component.html',
  styleUrls: ['./user-defination.component.scss']
})
export class UserDefinationComponent implements OnInit {


  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  userdef: userdefination[];
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
  //Title
  ROLE: Array<IOption> = this.UserdefinationServiceD.getCharacters();
  // ROLE: IOption[];
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;


  server: any;
  username: any;

  emailAlredyExist = "";
  usernameUnique: any;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userdefinationservice: UserDefinationService,
    private UserdefinationServiceD: UserdefinationServiceD,

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
            'http://localhost:4000/user-defination',
            dataTableParameters
          ).subscribe(resp => {
            this.userdef = resp.data;
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
        {
          title: 'Password',
          data: 'PASSWORD',
        },
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
    // this.UserdefinationServiceD.getuserdefinationList().pipe(first()).subscribe(data => {
    //   this.userdef = data;
    // })
    this.runTimer();

    this.dataSub = this.UserdefinationServiceD.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }






  createForm() {
    this.angForm = this.fb.group({


      F_NAME: ['', [Validators.required, Validators.pattern]],
      L_NAME: ['', [Validators.pattern]],
      DOB: [''],
      MOB_NO: ['', [Validators.required, Validators.pattern]],
      EMAIL: ['', [Validators.required, Validators.pattern]],
      // EMAIL : ['', [Validators.required, Validators.email,
      //              Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      ROLE: ['', [Validators.required]],
      USER_NAME: ['', [Validators.required, Validators.pattern,]],
      PASSWORD: ['', [Validators.required, Validators.pattern]],
      STATUS: ['', [Validators.required]],
      // USER_CREATED_AT: ['', [ Validators.pattern]],
      // s_email: [''],


    });
  }


  // uniquevqlue($event){
  //   const unique = this.angForm.value;
  //   const dataToSend = {
  //     'F_NAME': unique.F_NAME,}

  // }



  // method 1 -check for already exist or not 

  userCheckUnique($event) {
    debugger
    console.log('checking value existing or not');
    this.userdefinationservice.userCheckUnique(this.angForm.controls['USER_NAME'].value).subscribe(res => {
      this.username = res;
      // this.userdefinationservice.getFormData($event.target.value).subscribe(data => {
      //   this.updateID = data.value;
      //   this.angForm.setValue({
      //     'value': data.value,
      //   })
        console.log('checking value existing or not');
        if ($event.res === 'value') {
          console.log('value exist');
          this.username = "USER_NAME Alredy Exist";
        }
        else {
          console.log('value not exist');
          this.username = "";
        }
      });
    }







  // userCheckUnique($event) {
  //   debugger
  //   this.userdefinationservice.userCheckUnique(this.angForm.controls['USER_NAME'].value).subscribe(res => {

  //     this.username = res;

  //     this.userdefinationservice.getFormData(id).subscribe(data => {
  //       'USER_NAME' = data.username;
  //       console.log('checking value existing or not');
  //       if ($event.this.username === 'USER_NAME') {
  //         console.log('value exist');
  //         this.emailAlredyExist = "USER_NAME Alredy Exist";
  //       }
  //       else {
  //         console.log('value not exist');
  //         this.emailAlredyExist = "";
  //       }
  //     });
  //   }
  // }

  // userCheckUnique(username) {

  //   this.userdefinationservice.getFormData(username).subscribe(data => {
  //     this.usernameUnique = data.USER_NAME,

  //       'F_NAME': data.F_NAME,
  //       'L_NAME': data.L_NAME,
  //       'DOB': data.DOB,
  //       'MOB_NO': data.MOB_NO,
  //       'EMAIL': data.EMAIL,
  //       'ROLE': data.ROLE,
  //       'USER_NAME': data.USER_NAME,
  //       'PASSWORD': data.PASSWORD,
  //       'STATUS': data.STATUS,
  //       // 'USER_CREATED_AT': data.USER_CREATED_AT,

  //     })
  //   });
  //   const formValuser = this.angForm.value;

  //     'USER_NAME': formValuser.USER_NAME,


  //   }
  //   this.userdefinationservice.get().subscribe(data1 => {
  //     Swal.fire('Success!', 'Data Added Successfully !', 'success');
  //     // to reload after insertion of data
  //     this.rerender();
  //   }, (error) => {
  //     console.log(error)
  //   })
  // }
  // this.userdefinationservice.forEach((element: any) => {
  //        if(element.firstname === firstname ){
  //          alert(' Already exists');
  //        }else{
  //          this.obj= this.students.studentdata(this.angForm.value);
  //        }
  //    });


  // method 2 -check for already exist or not 
  // static createValidator(service: UserDefinationService) {
  //   debugger
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     if (!control.valueChanges || control.pristine) {
  //       return of(null);
  //     } else {
  //       return control.valueChanges.pipe(
  //         debounceTime(300),
  //         distinctUntilChanged(),
  //         take(1),
  //         switchMapTo(service.checkUSER_NAMEExists(control.value)),
  //         tap(() => control.markAsTouched()),
  //         map((data) => (data.exist ? { userExist: true } : null))
  //       );
  //     }
  //   };
  // }

  // method 3 -check for already exist or not
  // emailcheck($event) {
  //   debugger
  //   let emailid = this.angForm.value;
  //   this.userdefinationservice.getServers('EMAIL').subscribe(() => {
  //     this.server = this.server,
  //       (error) => console.log(error)
  //     if ($event.emailid === 'EMAIL') {
  //       console.log("email exist")
  //     }

  //   })

  // }

  // Method to insert data into database through NestJS
  // submit() {
  //   const formVal = this.angForm.value;
  //   let emailid = this.angForm.value;
  //   this.userdefinationservice.getServers('EMAIL').subscribe(() => {
  //     this.server = this.server,
  //       (error) => console.log(error)
  //     if (emailid === 'EMAIL') {
  //       console.log("email exist")
  //     }
  //     else{

  //       const dataToSend = {
  //         'F_NAME': formVal.F_NAME,
  //         'L_NAME': formVal.L_NAME,
  //         'DOB': formVal.DOB,
  //         'MOB_NO': formVal.MOB_NO,
  //         'EMAIL': formVal.EMAIL,
  //         'ROLE': formVal.ROLE,
  //         'USER_NAME': formVal.USER_NAME,
  //         'PASSWORD': formVal.PASSWORD,
  //         'STATUS': formVal.STATUS,
  //         // 'USER_CREATED_AT': formVal.USER_CREATED_AT,
  //       }
  //       this.userdefinationservice.postData(dataToSend).subscribe(data1 => {
  //         Swal.fire('Success!', 'Data Added Successfully !', 'success');
  //         // to reload after insertion of data
  //         this.rerender();
  //       }, (error) => {
  //         console.log(error)
  //       })
  //     }
  //   })



    //To clear form
    // this.angForm.reset();
  // }




  // Method to insert data into database through NestJS
  submit() {
      const formVal = this.angForm.value;
      const dataToSend = {
        'F_NAME': formVal.F_NAME,
        'L_NAME': formVal.L_NAME,
        'DOB': formVal.DOB,
        'MOB_NO': formVal.MOB_NO,
        'EMAIL': formVal.EMAIL,
        'ROLE': formVal.ROLE,
        'USER_NAME': formVal.USER_NAME,
        'PASSWORD': formVal.PASSWORD,
        'STATUS': formVal.STATUS,
        // 'USER_CREATED_AT': formVal.USER_CREATED_AT,
      }
    this.userdefinationservice.postData(dataToSend).subscribe(data1 => {
        Swal.fire('Success!', 'Data Added Successfully !', 'success');
        // to reload after insertion of data
        this.rerender();
      }, (error) => {
        console.log(error)
      })
    }



  //Method for append data into fields
  editClickHandler(id) {
      this.showButton = false;
      this.updateShow = true;
      this.userdefinationservice.getFormData(id).subscribe(data => {
        this.updateID = data.id;
        this.angForm.setValue({
          'F_NAME': data.F_NAME,
          'L_NAME': data.L_NAME,
          'DOB': data.DOB,
          'MOB_NO': data.MOB_NO,
          'EMAIL': data.EMAIL,
          'ROLE': data.ROLE,
          'USER_NAME': data.USER_NAME,
          'PASSWORD': data.PASSWORD,
          'STATUS': data.STATUS,
          // 'USER_CREATED_AT': data.USER_CREATED_AT,

        })
      })
    }
  //Method for update data 
  updateData() {
      let data = this.angForm.value;
      data['id'] = this.updateID;
      this.userdefinationservice.updateData(data).subscribe(() => {
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
}

