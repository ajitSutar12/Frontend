import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { CustomerIDMasterDropdownService } from '../../../shared/dropdownService/customer-id-master-dropdown.service';
import { LegderViewService } from '../ledger-view/ledger-view.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  formSubmitted = false;
  //api 
  url = environment.base_url;

  // Created Form Group
  angForm: FormGroup;

  // dropdown variables
  ngcustomer: any = null
  Cust_ID: any[] //customer id from idmaster

  //array of document of customer
  customerDoc = []

  //temp address flag variable
  tempAddress: boolean = true;

  // image purpose
  customerImg: string = '../../../../assets/images/user-card/img-round4.jpg';
  signture: string = '../../../../assets/sign/signture.jpg';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private customerID: CustomerIDMasterDropdownService,
    private customerIdService: LegderViewService,
    private config: NgSelectConfig,
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
    })

  }

  createForm() {
    this.angForm = this.fb.group({
      AC_CUSTID: ["", [Validators.required]],
      CLOSED_AC: ["",],
      AC_NAME: ['',],
      AC_PANNO: ['',],
    });
  }

  hideImage() {
    this.previewImg = '';
    this.PreviewDiv = false;
  }
  previewImg: string;
  PreviewDiv: boolean = false;
  showImage(img) {
    var src = img;
    console.log(src)
    var largeSrc = src.replace('small', 'large');
    this.previewImg = src;
    this.PreviewDiv = true;
  }

  //function to get existing customer data according selection
  getCustomer(eve) {
    this.customerIdService.getFormData(eve.value).subscribe(data => {
      debugger
      console.log('data', data)
      this.customerDoc = data.custdocument
      this.tempAddress = data.custAddress[0]?.AC_ADDFLAG
      this.angForm.patchValue({
        AC_NAME: data.AC_NAME,
        AC_PANNO: data.AC_PANNO,
      })
    })
  }
}
