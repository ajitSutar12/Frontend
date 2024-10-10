import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// Service File For Handling CRUD Operation
import { RiskCatMasterService } from './risk-category.service'
// Used to Call API
import { HttpClient } from '@angular/common/http';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;

}
// For fetching values from backend
interface RiskMaster {
  CODE: number;
  NAME: string;

}

@Component({
  selector: 'app-risk-catagory',
  templateUrl: './risk-catagory.component.html',
  styleUrls: ['./risk-catagory.component.scss']
})
export class RiskCatagoryComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Created Form Group
  angForm: FormGroup;
  // Store data from backend
  riskMasters: RiskMaster[];
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
  newbtnShow: boolean = false;
  updateID: number = 0;

  // column search
  filterData = {};

  constructor(private fb: FormBuilder,
    private riskCatMasterService: RiskCatMasterService,
    private http: HttpClient,private translate:TranslateService) { this.createForm(); }

  ngOnInit(): void {
    const that = this;
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

        // column filter
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

        that.http
          .post<DataTableResponse>(
            this.url + '/risk-catagory',

            dataTableParameters
          ).subscribe(resp => {
            this.riskMasters = resp.data;


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
          title: this.translate.instant('master.Risk_Category.Action'),
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          }
        },
        {
          title: this.translate.instant('master.Risk_Category.code'),
          data: 'CODE'

        },
        {
          title: this.translate.instant('master.Risk_Category.Description'),
          data: 'NAME'
        }
      ],
      dom: 'Blrtip',

    };
    this.angForm = new FormGroup({
      'CODE': new FormControl(''),
      'NAME': new FormControl(''),


    })

  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({

      CODE: [''],
      NAME: ['', [Validators.pattern, Validators.required]]
    });
  }

  // Method to insert data into database through NestJS
  submit() {

    const formVal = this.angForm.value;
    const dataToSend = {
      "CODE": formVal.CODE,
      "NAME": formVal.NAME,

    }

    this.riskCatMasterService.postData(dataToSend).subscribe(data => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {


    })
    this.resetForm();
  }


  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.riskCatMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'CODE': data.CODE,
        'NAME': data.NAME,


      })

    })
  }
  //Method for update data 
  updateData(id) {

    let data = this.angForm.value;
    data['id'] = this.updateID;

    this.riskCatMasterService.updateData(data).subscribe(() => {
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

  addNewData(){
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //Method for delete data
  delClickHandler(id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Category Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
        this.riskCatMasterService.deleteData(id).subscribe(data1 => {
          this.riskMasters = data1;

        })
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

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


}
