import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { RoleMasterModule } from './role-master.module';
import { RoleMasterService } from './role-master.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrls: ['./role-master.component.scss']
})
export class RoleMasterComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  angForm: FormGroup;
  RoleList: any;
  checked:boolean = true;

  roleId: number;
  updateButton: boolean = false;
  addButton: boolean = true;

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private fb: FormBuilder,
    private _service: RoleMasterService,private systemParameter: SystemMasterParametersService,
    private translate:TranslateService
  ) {
    
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this._service.getRoleList().subscribe(data => {
      this.RoleList = data;
      // this.rerender()
      // this.dtTrigger.next();
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
      ]
    };


    this.angForm = this.fb.group({
      NAME: ['', [Validators.required, Validators.pattern]],
      STATUS: new FormControl('active'),
    })
  }

  //submit data
  submit() {
    this._service.insertData(this.angForm.value).subscribe(data => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
      this.angForm.reset();

      this._service.getRoleList().subscribe(data => {
        this.RoleList = data;
        this.dtTrigger.next();
        // this.dtTrigger.next();
      })
    }, err => {
      Swal.fire(err.error.error, err.error.message, 'error');
    })
  }

  //edit Role
  editRole(data: any) {
    this.roleId = data.id;
    this.angForm.patchValue({
      NAME: data.NAME,
      STATUS: data.STATUS
    })
    this.updateButton = true;
    this.addButton = false;
  }

  //Update Role master
  update() {
    let object = this.angForm.value;
    object['id'] = this.roleId;

    this._service.updateRoleData(object).subscribe(data => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
      this.updateButton = false;
      this.addButton = true;
      this.angForm.reset();
      this._service.getRoleList().subscribe(data => {
        this.RoleList = data;
        // this.rerender();
        this.dtTrigger.next();
      })
    }, err => {
      Swal.fire(err.error.error, err.error.message, 'error');
    })
  }

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
  }

  rerender(): void {
    //this.datatableElement is important
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
}
