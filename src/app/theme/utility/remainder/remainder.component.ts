import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { UserDefinationService } from '../user-defination/user-defination.service';
import Swal from 'sweetalert2';
import { UserdefinationServiceD } from '../../../shared/dropdownService/user-defination-dropdown.service';
import { AdminComponent } from 'src/app/layout/admin/admin.component';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {
  @Output() child = new EventEmitter<string>();
  @Output() narrationsEmitter = new EventEmitter<string[]>();
  @ViewChild(AdminComponent) adminComponent!: AdminComponent;
  angForm: FormGroup;
  ngbranch: any;
  branchName: any;
  branchOption: any = [];
  todate: any = null;
  minDate: any;
  fromtodate: any;
  uptodate: any;
  maxDate: any;
  user: any;
  fromdate: moment.Moment;
  gettable: any = [];
  options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
  model1: any = {};
  ROLEX = [
    { id: 1, label: 'Admin' },
    { id: 2, label: 'Clerk' },
    { id: 3, label: 'Head Office' }
  ];
  
  showsubmit = true;
  showupdate = false;
  cancelshow = true;
  items: any = [];
  url = environment.base_url;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private userdefinationservice: UserDefinationService,
    private UserdefinationServiceD: UserdefinationServiceD
  ) { 
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.createForm();
    
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      this.ngbranch = result.branch.id;
      this.branchName = result.branch.NAME;
    });

    // Uncomment and implement if needed
    // this.userdefinationservice.getRoleList().subscribe(data => {
    //   this.ROLEX = data;
    // });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });
    // this.showtable();
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      time: [''],
      FROM_DATE: [''],
      UPTO_DATE: [''],
      USER: [''],
      FREQUENCY: [''],
      DETAILS: ['']
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id === 1) {
      this.angForm.controls['BRANCH_CODE'].enable();
      this.ngbranch = result.branch.id;
      this.branchName = result.branch.NAME;
    } else {
      this.angForm.controls['BRANCH_CODE'].disable();
      this.ngbranch = result.branch.id;
      this.branchName = result.branch.NAME;
    }
  }

  getBranch(event) {
    this.ngbranch = event.value;
    this.branchName = event.branchName;
  }

  submit() {
    let formvalues = this.angForm.value;
    let obj = {
      "BRANCH_CODE":formvalues.BRANCH_CODE,
      "ENTRY_DATE": moment(formvalues.END_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      "FROM_DATE": moment(formvalues.FROM_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      "UPTO_DATE": moment(formvalues.UPTO_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      "FREQUENCY": formvalues.FREQUENCY,
      "DETAILS": formvalues.DETAILS,
      "USERID":formvalues.USER,
      "INOUTTIME":formvalues.time
    };

    this.http.post(this.url + '/user-defination/insertremainder', obj).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data submitted successfully',
        });
        this.showsubmit = true;
        this.showupdate = false;
        this.cancelshow = true;
        this.items.push(this.angForm.value);
        this.saveItems();
        console.log('Items after submit:', this.items);
        this.onReset();
        // this.emitVariable();
      }
    );
  }
  narration
  targetFromDate: Date;
  targetToDate: Date;
  filteredNarrations: string[] = [];
  getUser(event){
    this.showtable();
  }
  showtable() {
    let formvalues = this.angForm.value;
    let obj={
      "USERID":formvalues.USER,
    }
    this.http.post(this.url + '/user-defination/getremainderdata', obj).subscribe(
      (response) => {
        this.gettable = response;
        this.narration = this.gettable[0]?.DETAILS;
        // this.narrationEmitter.emit(this.narration);

        this.filteredNarrations = [];

        this.gettable.forEach((item: any) => {
          let fromDate = item.FROM_DATE;
          let endDate =item.UPTO_DATE;
          let formvalues = this.angForm.value;
          // const endDate = formvalues.END_DATE;
          if (fromDate >= endDate){
            this.filteredNarrations.push(item.DETAILS);
          }
        });
        if (this.adminComponent) {
          this.adminComponent.narrations = this.filteredNarrations;
        }
        this.narrationsEmitter.emit(this.filteredNarrations);

      }
    );
  }

  // emitVariable() {
  //   this.child.emit(this.narration);
  // }

  saveItems() {
    localStorage.setItem('tableData', JSON.stringify(this.items));
    console.log('Items saved to local storage:', this.items);
  }

  loadItems() {
    const savedItems = localStorage.getItem('tableData');
    this.items = savedItems ? JSON.parse(savedItems) : [];
    console.log('Items loaded from local storage:', this.items);
  }

  onReset(): void {
    this.angForm.reset();
    this.showsubmit = true;
    this.showupdate = false;
  }

  deletedata(i: number) {
    this.items.splice(i, 1); // Use splice to remove item from array
    Swal.fire("Success", "Data deleted successfully", 'success');
  }
  recordId
  editTransferAccount(index: any) {
    let selectedItem = this.gettable[index];
    this.angForm.patchValue({
      BRANCH_CODE: selectedItem.BRANCH_CODE,
      END_DATE: moment(selectedItem.ENTRY_DATE, 'DD/MM/YYYY').toDate(),
      FROM_DATE: moment(selectedItem.FROM_DATE, 'DD/MM/YYYY').toDate(),
      UPTO_DATE: moment(selectedItem.UPTO_DATE, 'DD/MM/YYYY').toDate(),
      FREQUENCY: selectedItem.FREQUENCY,
      DETAILS: selectedItem.DETAILS,
      USER: selectedItem.USERID,
      time: selectedItem.INOUTTIME,
    });
    this.recordId = index;
    // Toggle buttons
    this.showsubmit = false;
    this.showupdate = true;
    this.cancelshow = true;
  }
  update(id){
    let selectedItem = this.gettable[id];
    let formvalues = this.angForm.value;
    let obj = {
      "BRANCH_CODE":formvalues.BRANCH_CODE,
      "ENTRY_DATE": moment(formvalues.END_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      "FROM_DATE": moment(formvalues.FROM_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      "UPTO_DATE": moment(formvalues.UPTO_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      "FREQUENCY": formvalues.FREQUENCY,
      "DETAILS": formvalues.DETAILS,
      "USERID":formvalues.USER,
      "INOUTTIME":formvalues.time,
      "ID": selectedItem
    };
    this.http.post(this.url + '/user-defination/updateRemainder', obj).subscribe(
      (response) => {
        this.gettable = response;
        // this.narration = this.gettable[0]?.DETAILS;
      }
    );
  }
}
