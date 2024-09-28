import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'

interface CustomerDetails {
  id: number;
  AC_MOBILENO: string;
  AC_NAME: string;
  // ac_no: string;
  ac_opdate: string;
  ac_type: number;
  adhar_card_path: string;
  document_status: string;
  pan_card_path: string;
  photo_path: string;
  sign_path: string;
  sign2_path: string | null;
  AC_EMAILID: string;
  AC_PANNO: string;
}

@Component({
  selector: 'app-kyc-document',
  templateUrl: './kyc-document.component.html',
  styleUrls: ['./kyc-document.component.scss']
})
export class KYCDocumentComponent implements OnInit {
  customerDetails: CustomerDetails[] = [];
  filteredCustomerDetails: CustomerDetails[] = [];
  selectedCustomer: CustomerDetails | null = null;
  searchTerm: string = '';
  selectedCustomerPhotos: any = null;
  url = environment.base_url
  setLang: any;

  constructor(private http: HttpClient,
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,
  ) { 
    this.systemParameter.getFormData(1).subscribe(data => {
      
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  uploadphoto: string;
  uploadphoto1: string;
  uploadphoto2: string;
  uploadphoto3: string;

  getCustomerDetails() {
    this.http.post<CustomerDetails[]>(this.url + '/ledger-view/kycView', {})
      .subscribe(
        (data) => {

          this.customerDetails = data;
          this.filteredCustomerDetails = data;
          console.log(this.filteredCustomerDetails)

          if (data.length > 0) {
            this.uploadphoto = this.url + '/' + data[0].photo_path;
          }

        }

      );
  }

  filteredCustomers = this.customerDetails;
  // searchTerm: string = '';

  onSearch() {
    if (this.searchTerm) {
      this.filteredCustomerDetails = this.customerDetails.filter(customer =>
        (customer.AC_NAME && customer.AC_NAME.toUpperCase().includes(this.searchTerm.toUpperCase())) ||
        (customer.AC_EMAILID && customer.AC_EMAILID.toUpperCase().includes(this.searchTerm.toUpperCase()))
      );
    } else {
      this.filteredCustomerDetails = this.customerDetails;
    }

  }

  viewKYCDocument(customer: CustomerDetails) {
    this.selectedCustomer = customer;
    this.uploadphoto1 = customer.pan_card_path ? this.url + '/' + customer.pan_card_path : 'assets/images/nouser.png';
    this.uploadphoto2 = customer.adhar_card_path ? this.url + '/' + customer.adhar_card_path : 'assets/images/nouser.png';
    this.uploadphoto3 = customer.sign_path ? this.url + '/' + customer.sign_path : 'assets/images/nosignature.png';

  }

  closeKYCView() {
    this.selectedCustomer = null;
  }
  capitalizeFirstLetter(status: string): string {
    return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  }

  viewPhotos(customer: CustomerDetails) {
    this.selectedCustomerPhotos = customer;
  }

  closePhotoView() {
    this.selectedCustomerPhotos = null;
  }
}






