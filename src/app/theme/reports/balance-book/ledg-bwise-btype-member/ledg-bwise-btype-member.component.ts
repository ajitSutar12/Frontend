import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { DirectorMasterDropdownService } from 'src/app/shared/dropdownService/director-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';

@Component({
  selector: 'app-ledg-bwise-btype-member',
  templateUrl: './ledg-bwise-btype-member.component.html',
  styleUrls: ['./ledg-bwise-btype-member.component.scss']
})
export class LedgBwiseBtypeMemberComponent implements OnInit {
  angForm : FormGroup;
  maxDate: Date;

  iframe5url: any = '';
  showRepo: boolean = false;

  constructor(
    private fb: FormBuilder,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private directorMasterDropdown: DirectorMasterDropdownService,
  ) 
  { 
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  isChecked: boolean = false;

  //ngfor variables
  Schemecode
  From_dir
  To_dir

  //ngmodel variables
  selectedScheme
  selectedFdir
  selectedTdir

  ngOnInit(): void {
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'TD' || Schemecode.name == 'LN');
      });
      this.Schemecode = filtered;
  
    })

    this.directorMasterDropdown.getDirectorMasterList().pipe(first()).subscribe(data => {
      this.From_dir = data;
      this.To_dir = data;
    })
  }

  createForm(){
    this.angForm = this.fb.group({
      T_TYPE: ['DI'],
      scode: ['',[Validators.required]],
      sdate: ['',[Validators.required]],
      edate: ['',[Validators.required]],
      fdirector: ['',[Validators.required]],
      tdirector: ['',[Validators.required]],
      checkActive1: [false],
      checkActive2: [false]
    });
  }

}
