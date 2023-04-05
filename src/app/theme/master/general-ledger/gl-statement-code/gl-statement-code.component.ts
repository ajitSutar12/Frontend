
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { StatementTypeService } from '../../../../shared/dropdownService/statement-type.service';
import { AlternetCodeDropdownService } from '../../../../shared/dropdownService/alternet-code-dropdown.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { GlStatementCodeService } from './gl-statement-code.service';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { environment } from '../../../../../environments/environment'
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { newArray } from '@angular/compiler/src/util';
import { toChildArray } from 'preact';
import { id } from '@swimlane/ngx-datatable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
interface GlStatementCodeMaster {
  A_BALCODE: string;
  A_ACHEAD: string;
  A_ACTYPE: string;
  ALTERNATE_CODE: string;
  IS_PRINT_HEAD_IN_ONESIDE: boolean;
}

@Component({
  selector: 'app-gl-statement-code',
  templateUrl: './gl-statement-code.component.html',
  styleUrls: ['./gl-statement-code.component.scss'],

})

export class GlStatementCodeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("statement_head") myInputField: ElementRef;//autofocus input field
  @ViewChild('triggerhide') triggerhide: ElementRef;
  //api 
  url = environment.base_url;
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  glStatementCodeMaster: GlStatementCodeMaster[];
  dtExportButtonOptions: DataTables.Settings = {}; //Datatable variable
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject()
  angForm: FormGroup;
  updateID: number = 0;
  StatementData = [];
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable for checkbox and radio button 
  isPrintHeadInOneSide: boolean = false;

  //title select variables
  statementType: Array<IOption> = this.StatementTypeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  alternate: any;
  // Filter Variable
  filterData = {};
  glCodeList: any;
  parentCode: any;
  newCode: any;
  newCode1: any;
  parentId: any;
  parentCodeArray = new Array();
  childArray: any;
  posArray
  sortArray: any;


  //constructor
  constructor(
    public StatementTypeService: StatementTypeService,
    public alternateCodeService: AlternetCodeDropdownService,
    private glStatementCodeService: GlStatementCodeService,
    private alternateCode: AlternetCodeDropdownService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder) {
  }



  ngOnInit(): void {
    this.treeview();
    this.createForm();

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
            this.url + '/gl-statement-code',
            dataTableParameters
          ).subscribe(resp => {
            this.glStatementCodeMaster = resp.data;

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
          title: 'Action'
        },
        {
          title: 'Statement Code',
          data: 'A_BALCODE'
        },
        {
          title: 'Statement Head',
          data: 'A_ACHEAD'
        },
        {
          title: 'Statement Type',
          data: 'A_ACTYPE'
        },
        {
          title: 'Alternate Code',
          data: 'ALTERNATE_CODE'
        },
        {
          title: 'Is Print Head In One Side',
          data: 'IS_PRINT_HEAD_IN_ONESIDE'
        }
      ],
      dom: 'Blrtip',
    };

    this.runTimer();
    this.dataSub = this.StatementTypeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    //     this.alternateCode.getAlternetCodeList().pipe(first()).subscribe(data => {
    //       this.alternate = data;
    //  })


  }


  ///get treeview data
  treeview() {
    this.parentCodeArray = [];
    this.glStatementCodeService.getCodeList().subscribe(data => {
      this.glCodeList = data;
      // console.log(this.glCodeList);
      this.glCodeList.forEach(element => {
        if (element.parent_node == 0) {
          this.parentCodeArray.push(element);
        }
      });

      // console.log(this.parentCodeArray);
      this.parentCodeArray.forEach((ele, index) => {
        let newArray = new Array();

        this.glCodeList.forEach(element => {
          let subArray = new Array();

          if (element.parent_node == ele.id) {
            this.glCodeList.forEach(ele1 => {
              if (ele1.parent_node == element.id) {
                subArray.push(ele1)
              }
            });
            let subarr = this.sort_by_key(subArray, 'position')
            element['child'] = subarr;
            newArray.push(element);
          }
        })
        let parentCodeArray = this.sort_by_key(newArray, 'position')
        this.parentCodeArray[index]['child'] = parentCodeArray;

      })
    })
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
      A_BALCODE: ['', [Validators.pattern]],
      A_ACHEAD: ['', [Validators.pattern, Validators.required]],
      ALTERNATE_CODE: ['', [Validators.pattern]],
      A_ACTYPE: ['', [Validators.required]],
      IS_PRINT_HEAD_IN_ONESIDE: [false]

    });
  }

  // // Method to insert data into database through NestJS
  // submit() {

  //   const formVal = this.angForm.value;
  //   const dataToSend = {
  //     "A_BALCODE": formVal.A_BALCODE,
  //     "A_ACHEAD": formVal.A_ACHEAD,
  //     "A_ACTYPE": formVal.A_ACTYPE,
  //     "ALTERNATE_CODE": formVal.ALTERNATE_CODE,
  //     "IS_PRINT_HEAD_IN_ONESIDE": formVal.IS_PRINT_HEAD_IN_ONESIDE,
  //   }

  //   this.glStatementCodeService.postData(dataToSend).subscribe(data => {
  //     Swal.fire('Success!', 'Data Added Successfully !', 'success');

  //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //       dtInstance.ajax.reload()
  //     });
  //   }, (error) => {
  //   })

  //   //To clear form
  //   this.resetForm();


  // }
  // addNewData() {
  //   this.showButton = true;
  //   this.updateShow = false;
  //   this.newbtnShow = false;
  //   this.resetForm();
  // }
  // //Method for append data into fields
  // editClickHandler(id) {
  //   this.showButton = false;
  //   this.updateShow = true;
  //   this.newbtnShow = true;
  //   this.glStatementCodeService.getFormData(id).subscribe(data => {
  //     this.updateID = data.id;
  //     this.angForm.setValue({
  //       "A_BALCODE": data.A_BALCODE,
  //       "A_ACHEAD": data.A_ACHEAD,
  //       "A_ACTYPE": data.A_ACTYPE,
  //       "ALTERNATE_CODE": data.ALTERNATE_CODE,
  //       "IS_PRINT_HEAD_IN_ONESIDE": data.IS_PRINT_HEAD_IN_ONESIDE

  //     }) 
  //   })
  // }
  // //Method for delete data
  // delClickHandler(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to delete city master data.",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#229954',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.glStatementCodeService.deleteData(id).subscribe(data1 => {
  //         this.glStatementCodeMaster = data1;
  //         Swal.fire(
  //           'Deleted!',
  //           'Your data has been deleted.',
  //           'success'
  //         )
  //       }), (error) => {

  //       }
  //       // to reload after delete of data
  //       this.rerender();
  //     } else if (
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your data is safe.',
  //         'error'
  //       )
  //     }
  //   })
  // }
  // //Method for update data 
  // updateData(id) {

  //   let data = this.angForm.value;
  //   data['id'] = this.updateID;

  //   this.glStatementCodeService.updateData(data).subscribe(() => {
  //     Swal.fire('Success!', 'Record Updated Successfully !', 'success');
  //     this.showButton = true;
  //     this.updateShow = false;
  //     this.newbtnShow = false;

  //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //       dtInstance.ajax.reload()
  //     });
  //     //To clear form
  //     this.resetForm();
  //   })
  // }

  ngAfterViewInit(): void {
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

  // Reset Function
  resetForm() {
    this.createForm();
    this.alternateCode.getAlternetCodeList().pipe(first()).subscribe(data => {
      this.alternate = data;
    })
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  AddnewHead(id, name) {
    this.parentCode = name;
    this.parentId = id;
  }

  submitNewCode() {
    if (this.newCode == undefined) {
      Swal.fire('Warning!', 'Please add new Code!', 'warning');
      this.closeBtnClick()
    } else {
      let obj = {
        'parentid': this.parentId,
        'newCode': this.newCode
      }

      this.glStatementCodeService.insertNewCode(obj).subscribe(data => {
        Swal.fire('Success!', 'new Code Added Successfully!', 'success');
        this.treeview();
        // this.triggerhide.nativeElement.click();

      }, err => {
        console.log(err);
      })
      this.closeBtnClick()
    }
  }

  //for edit head name
  EditnewHead(id, name) {
    this.parentCode = name;
    this.parentId = id;
  }

  //for update head name
  updateNewCode() {

    if (this.newCode1 == undefined) {
      Swal.fire('Warning!', 'Please add new Code!', 'warning');
      this.closeBtnClick()
    }
    else {
      let obj = {
        'parentid': this.parentId,
        'parentCode': this.newCode1
      }
      this.treeview();
      // this.triggerhide.nativeElement.click();

      this.glStatementCodeService.updateNewCode(obj).subscribe(data => {
        Swal.fire('Success!', 'Name Updated Successfully!', 'success');
        this.treeview();
        // this.triggerhide.nativeElement.click();
      },
        err => {
          console.log(err);
        })
      this.closeBtnClick()
    }
  }

  shuffleHead(id, name) {
    this.parentCode = name;
    this.parentId = id;

    let list = this.glCodeList.filter(function (parentCode) {

      if (parentCode.id == id) {
        return (parentCode)
      }

    });
    this.childArray = list[0]['child']

    // console.log(this.childArray)

    let position = this.childArray.filter(function (id) {
      if (id = 0) {
        return (id + 1)
      }
      else {
        return (id)
      }

    });
    this.posArray = position[0]['child']

  }

  getColumnValue(id, columnValue: number) {


    let position
    let ele1 = (this.childArray.filter(ele => ele['newPosition'] == Number(columnValue)))
    // console.log(ele1.newPosition)
    let result = this.childArray.map(ele => ele.newPosition);

    if (Number(columnValue) == result) {
      Swal.fire('Warning!', 'Duplicate Position', 'warning');
    }


    else if (this.childArray.length != 0) {
      if (this.childArray.some(item => item.id === id)) {
        this.childArray.forEach((element) => {
          if (element.id == id) {
            // console.log(element)
            element['newPosition'] = Number(columnValue)
            position = element['position']
            return
          }
        })
      }


      // if (this.childArray.some(item => item.id === ele1.id)) {

      //   let element = this.childArray.filter(ele => ele['position'] == Number(columnValue))
      //   element['newPosition'] = position
      //   this.childArray.forEach((ele) => {
      //     if (ele.id == ele1.id) {
      //       ele['newPosition'] = position
      //       console.log(ele,position)
      //       return
      //     }
      //   }) 
      // }
    }


  }

  lengthArr(ele: any) {
    let arrLength = this.childArray.length

    if (ele.target.value > arrLength || ele.target.value == 0) {

      Swal.fire("Invalid Input", `Please Insert Values Equal To ${arrLength} and above 0`, "error");
      ele.target.value == ""
    }


  }

  shuffleCode() {

    this.glStatementCodeService.updatePosition(this.childArray).subscribe(data => {
      this.treeview();
      // this.triggerhide.nativeElement.click();
      Swal.fire('Success!', 'Position Shuffled', 'success');
      this.closeBtnClick()
    })


  }

  sort_by_key(array: any, key: any) {
    return array.sort(function (a: any, b: any) {
      let p = a[key];
      let q = b[key];
      return (p < q) ? -1 : ((p > q) ? 1 : 0)
    });
  }

  addModalWindow(targetModal: NgbModal) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'sm',
    });
  }
  modalChangeWindow(targetModal: NgbModal) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
  closeBtnClick() {
    this.modalService.dismissAll();
  }
  selectAllContent($event) {
    $event.target.select();
  }
}
