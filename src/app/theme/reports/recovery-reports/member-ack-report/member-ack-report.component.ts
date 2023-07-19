import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-member-ack-report',
  templateUrl: './member-ack-report.component.html',
  styleUrls: ['./member-ack-report.component.scss']
})
export class MemberAckReportComponent implements OnInit {
  angForm : FormGroup;
  maxDate: Date;
  obj: any[];

  tableData: any;
  selectedItems: any[];

  constructor(
    private fb: FormBuilder,
    private _schemeService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
  ) 
  { 
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  //ngfor variables
  s_Div
  AC_from
  AC_to
  schemes: any[];
  scheme

  //ngmodel variables
  selectedsDiv
  selectedAcFrom
  selectedAcTo
  particulars
  checked: boolean=false;

  ngOnInit(): void {
    this.createForm();
    // this.fetchSchemes();

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 1;
    this.obj = [code,branchCode]

    this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
      console.log(data);
      
      this.AC_from = data;
      this.AC_to = data;

    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.scheme = data;  
    });
  }

  createForm(){
    this.angForm = this.fb.group({
      T_TYPE: ['H'],
      sdivision: ['',[Validators.required]],
      date: ['',[Validators.required]],
      acfrom: ['',[Validators.required]],
      acto: ['',[Validators.required]],
      // schemes: this.fb.group({}) // Empty group for checkboxes
      // schemes: ['',[Validators.required]],
      // checkActive: [false]
    });
  }

  checkInterestFlag(id: any, scheme: any, flag: any) {
    let isIntUpdate: boolean = false
    if (flag.target.checked) {
      this.selectedItems.push(scheme);
      console.log(this.selectedItems);
    }
    else {
      const index = this.selectedItems.indexOf(scheme);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      }

    }
  }

  // changeCheckbox(data, type, ele) {
  //   for (let item of this.tableData) {
  //     let result = this.angForm.value;
  //     let date = moment(result.DATE).format('DD/MM/YYYY');

  //     let obj = {
  //       acno: data.acno,
  //       branch: result.BRANCH,
  //       date: date,
  //       scheme: '980'
  //     }
  //     if (item.acno == data.acno) {
  //       if (ele.target.checked) {
  //         if (type == 'Depo') {
  //           debugger
  //           item.depo = true;
  //           this.schemeCodeDropdownService.getAllSchemeList().subscribe(data=> {
  //             item.scheme = data;
  //           })
  //           this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
  //             item.scheme = data;
              
  //           });
  //         } 
  //       } 
  //       else {
  //         if (type == 'Depo') {
  //           item.depo = false;
  //           // item.depobal = 0;
  //         }
  //       }
        
  //     }
  //   }
  // }

  // fetchSchemes(): void {
  //   this.schemeCodeDropdownService.getAllSchemeList().subscribe(
  //     (response: any[]) => {
  //       this.schemes = response.map(scheme => {
  //         return {
  //           name: scheme.name,
  //           id: scheme.id,
  //           checked: false
  //         };
  //       });
  //       // Add form controls for checkboxes dynamically
  //       this.schemes.forEach(scheme => {
  //         (this.angForm.controls.schemes as FormGroup).addControl( scheme.label, this.fb.control(scheme.checked));
  //       });
  //     },
  //     (error: any) => {
  //       console.log('Error fetching schemes:', error);
  //     }
  //   );
  // }



}
