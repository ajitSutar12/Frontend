
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SecurityCodeService } from './security-code.service';
import { Scheme8Service } from '../../../../../shared/elements/scheme8.service';
import { Int8Service } from '../../../../../shared/elements/int8.service';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment'
import { TranslateService } from '@ngx-translate/core';


// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface SecurityCode {
  SECU_CODE: number;
  SECU_NAME: string;
  MARGIN: number;
  FIRE_POLICY: boolean;
  MARKET_SHARE: boolean;
  BOOK_DEBTS: boolean;
  PLEDGE_STOCK: boolean;
  STOCK_STATEMENT: boolean;
  GOVT_SECU_LIC: boolean;
  PLANT_MACHINARY: boolean;
  FURNITURE_FIXTURE: boolean;
  VEHICLE: boolean;
  OWN_DEPOSIT: boolean;
  LAND_BUILDING: boolean;
  GOLD_SILVER: boolean;
  OTHER_SECURITY: boolean;
  CUST_INSURANCE: boolean;
}

@Component({
  selector: 'app-security-code',
  templateUrl: './security-code.component.html',
  styleUrls: ['./security-code.component.scss'],
})
export class SecurityCodeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  //api 
  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtExportOptions: any = {}

  securityCode: SecurityCode[];
  private dataSub: Subscription = null;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable to get ID to update
  updateID: number = 0;
  page: number = 1;
  //filter variable
  filterData = {};
  check: boolean = true;

  showDialog = false;
  @Input() visible: boolean;
  public config: any;


  constructor(public securityCodeService: SecurityCodeService,
    private http: HttpClient,
    private fb: FormBuilder,
    private translate:TranslateService
  ) { this.createForm(); }


  ngOnInit(): void {
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
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
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        this.page = dataTableParameters.start / dataTableParameters.length;
        this.http
          .post<DataTableResponse>(
            this.url + '/security-code',

            dataTableParameters
          ).subscribe(resp => {
            this.securityCode = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        {
          // title: 'Action',
          title: this.translate.instant('master.Action.Action'),

          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Security_Code'),
          data: 'SECU_CODE'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Description'),
          data: 'SECU_NAME'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Margin'),
          data: 'MARGIN'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Fire_Policy'),
          data: 'FIRE_POLICY'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Market_Shares'),
          data: 'MARKET_SHARE'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Book_Debts'),
          data: 'BOOK_DEBTS'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Pledge_Stock'),
          data: 'PLEDGE_STOCK'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Stock_Statement'),
          data: 'STOCK_STATEMENT'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.LIC'),
          data: 'GOVT_SECU_LIC'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Customer_Insurance'),
          data: 'CUST_INSURANCE'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Plant_Machinary'),
          data: 'PLANT_MACHINARY'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Furniture_Fixture'),
          data: 'FURNITURE_FIXTURE'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Vehicle'),
          data: 'VEHICLE'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Own_Deposit'),
          data: 'OWN_DEPOSIT'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Land_Buildings'),
          data: 'LAND_BUILDING'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Gold_Silver'),
          data: 'GOLD_SILVER'
        }, {
          title: this.translate.instant('master.Security_Code_Maintenance.Other_securities'),
          data: 'OTHER_SECURITY'
        },
      ],
      dom: 'lrtip',



    };
  }

  createForm() {
    this.angForm = this.fb.group({

      SECU_NAME: ['', [Validators.pattern, Validators.required]],
      SECU_CODE: [''],
      MARGIN: ['', [Validators.pattern, Validators.max]],
      FIRE_POLICY: new FormControl('firepolicy'),
      MARKET_SHARE: [''],
      BOOK_DEBTS: [''],
      PLEDGE_STOCK: [''],
      STOCK_STATEMENT: [''],
      GOVT_SECU_LIC: [''],
      PLANT_MACHINARY: [''],
      FURNITURE_FIXTURE: [''],
      VEHICLE: [''],
      OWN_DEPOSIT: [''],
      LAND_BUILDING: [''],
      GOLD_SILVER: [''],
      OTHER_SECURITY: [''],
      CUST_INSURANCE: [''],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'SECU_CODE': formVal.SECU_CODE,
      'SECU_NAME': formVal.SECU_NAME,
      'MARGIN': formVal.MARGIN,
      'FIRE_POLICY': (formVal.FIRE_POLICY == true ? '1' : '0'),
      'MARKET_SHARE': (formVal.MARKET_SHARE == true ? '1' : '0'),
      'BOOK_DEBTS': (formVal.BOOK_DEBTS == true ? '1' : '0'),
      'PLEDGE_STOCK': (formVal.PLEDGE_STOCK == true ? '1' : '0'),
      'STOCK_STATEMENT': (formVal.STOCK_STATEMENT == true ? '1' : '0'),
      'GOVT_SECU_LIC': (formVal.GOVT_SECU_LIC == true ? '1' : '0'),
      'PLANT_MACHINARY': (formVal.PLANT_MACHINARY == true ? '1' : '0'),
      'FURNITURE_FIXTURE': (formVal.FURNITURE_FIXTURE == true ? '1' : '0'),
      'VEHICLE': (formVal.VEHICLE == true ? '1' : '0'),
      'OWN_DEPOSIT': (formVal.OWN_DEPOSIT == true ? '1' : '0'),
      'LAND_BUILDING': (formVal.LAND_BUILDING == true ? '1' : '0'),
      'GOLD_SILVER': (formVal.GOLD_SILVER == true ? '1' : '0'),
      'OTHER_SECURITY': (formVal.OTHER_SECURITY == true ? '1' : '0'),
      'CUST_INSURANCE': (formVal.CUST_INSURANCE == true ? '1' : '0'),
    }
    this.securityCodeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      //To clear form
      this.angForm.reset();
    }, (error) => {
    })

  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100
   
    if (ele.target.value <= 100) {
    }
    else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
      ele.target.value = 0 

    }
  }

  // Reset Function
  resetForm() {
    this.createForm();
  }
  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#informationtable tfoot tr').appendTo('#informationtable thead');
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

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.securityCodeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'SECU_CODE': data.SECU_CODE,
        'SECU_NAME': data.SECU_NAME,
        'MARGIN': data.MARGIN,
        'FIRE_POLICY': (data.FIRE_POLICY == '1' ? true : false),
        'MARKET_SHARE': (data.MARKET_SHARE == '1' ? true : false),
        'BOOK_DEBTS': (data.BOOK_DEBTS == '1' ? true : false),
        'PLEDGE_STOCK': (data.PLEDGE_STOCK == '1' ? true : false),
        'STOCK_STATEMENT': (data.STOCK_STATEMENT == '1' ? true : false),
        'GOVT_SECU_LIC': (data.GOVT_SECU_LIC == '1' ? true : false),
        'PLANT_MACHINARY': (data.PLANT_MACHINARY == '1' ? true : false),
        'FURNITURE_FIXTURE': (data.FURNITURE_FIXTUR == '1' ? true : false),
        'VEHICLE': (data.VEHICLE == '1' ? true : false),
        'OWN_DEPOSIT': (data.OWN_DEPOSIT == '1' ? true : false),
        'LAND_BUILDING': (data.LAND_BUILDING == '1' ? true : false),
        'GOLD_SILVER': (data.GOLD_SILVER == '1' ? true : false),
        'OTHER_SECURITY': (data.OTHER_SECURITY == '1' ? true : false),
        'CUST_INSURANCE': (data.CUST_INSURANCE == '1' ? true : false),

      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['FURNITURE_FIXTURE'] = (data.FURNITURE_FIXTURE == true ? '1' : '0')
    data['MARKET_SHARE'] = (data.MARKET_SHARE == true ? '1' : '0')
    data['VEHICLE'] = (data.VEHICLE == true ? '1' : '0')
    data['BOOK_DEBTS'] = (data.BOOK_DEBTS == true ? '1' : '0')
    data['OWN_DEPOSIT'] = (data.OWN_DEPOSIT == true ? '1' : '0')
    data['PLEDGE_STOCK'] = (data.PLEDGE_STOCK == true ? '1' : '0')
    data['LAND_BUILDING'] = (data.LAND_BUILDING == true ? '1' : '0')
    data['STOCK_STATEMENT'] = (data.STOCK_STATEMENT == true ? '1' : '0')
    data['GOLD_SILVER'] = (data.GOLD_SILVER == true ? '1' : '0')
    data['GOVT_SECU_LIC'] = (data.GOVT_SECU_LIC == true ? '1' : '0')
    data['OTHER_SECURITY'] = (data.OTHER_SECURITY == true ? '1' : '0')
    data['CUST_INSURANCE'] = (data.CUST_INSURANCE == true ? '1' : '0')
    data['PLANT_MACHINARY'] = (data.PLANT_MACHINARY == true ? '1' : '0')
    data['FIRE_POLICY'] = (data.FIRE_POLICY == true ? '1' : '0')
    this.securityCodeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }




  //function for delete button clicked
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete bank master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.securityCodeService.deleteData(id).subscribe(data1 => {
          this.securityCode = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {
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
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
