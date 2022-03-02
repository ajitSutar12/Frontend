import { Component, OnInit } from '@angular/core';
import { StatementTypeService } from '../../../shared/elements/statement-type.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-batch-voucher',
  templateUrl: './batch-voucher.component.html',
  styleUrls: ['./batch-voucher.component.scss']
})
export class BatchVoucherComponent implements OnInit {
  date: any;
  angForm: FormGroup;
  isture:boolean = true;
  branch_code: any[]//from ownbranchmaster

  selectedBranch:any;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    
  }

};

