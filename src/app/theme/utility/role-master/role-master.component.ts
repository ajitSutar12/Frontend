import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RoleMasterModule } from './role-master.module';
import { RoleMasterService } from './role-master.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrls: ['./role-master.component.scss']
})
export class RoleMasterComponent implements OnInit {
  angForm: FormGroup;
  RoleList: any;

  roleId: number;
  updateButton: boolean = false;
  addButton: boolean = true;

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private fb: FormBuilder,
    private _service: RoleMasterService
  ) {
    this._service.getRoleList().subscribe(data => {
      this.RoleList = data;
      this.rerender()
      // this.dtTrigger.next();
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
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
      STATUS: ['', [Validators.pattern]],
    })
  }

  //submit data
  submit() {
    this._service.insertData(this.angForm.value).subscribe(data => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
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
      Swal.fire('Success!', 'Data Updated Successfully !', 'success');
      this.updateButton = false;
      this.addButton = true;
      this.angForm.reset();
      this._service.getRoleList().subscribe(data => {
        this.RoleList = data;
        this.rerender();
      })
    }, err => {
      Swal.fire(err.error.error, err.error.message, 'error');
    })
  }

  ngAfterViewInit(): void {
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
