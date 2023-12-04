import { Component, OnInit } from '@angular/core';
// Creating and maintaining form fields with validation
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
// Displaying Sweet Alert
import Swal from "sweetalert2";
import { NgSelectComponent } from '@ng-select/ng-select'
// import { AddEventService } from './addevent.service';
import * as moment from 'moment';
// import { AddEventService } from '../addevent/addevent.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  angForm: FormGroup;
  date
  maxDate: Date;
  minDate: Date;
  ngcity
  city = []
  nglevel
  level = []
  multiField = []
  delgriddata = [];
  intIndex: number;
  intID: number;
  UpdateShowButton: boolean = false;
  addShowButton: boolean = true;
  temcity

  constructor(
    private fb: FormBuilder,
    // private _AddEventService: AddEventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    // this._AddEventService.getCity().subscribe((data) => {
    //   this.city = data
    //   this.temcity = data
    //   this.ngcity = [data[0]['CODE']]
    // });

  }
  //validation
  createForm() {
    this.angForm = this.fb.group({

      City_Code: ["", [Validators.required]],
      Level_Code: [""],
      FILE: ["", [Validators.required]],
      Message: ["", [Validators.required]],

    });
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  imageObject = new Array();
  selectedImgArrayDetails = [];

  fileChangeEvent(event: Event, id, valueid) {

    let result
    let arr = [];
    let me = this;
    let obj = {};
    let selectedObj = {};
    let file = (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function (ele: any) {

      result = await reader.result;
      let selecetedImg = ele.target.result;
      selectedObj[valueid] = selecetedImg
      obj[valueid] = result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };

    let isExist: boolean = false
    for (let element of this.imageObject) {
      if (Number(Object.keys(element)[0]) == valueid) {
        isExist = true
        reader.onload = async function (ele: any) {
          result = await reader.result;
          let selecetedImg = ele.target.result;
          selectedObj[valueid] = selecetedImg
          obj[valueid] = result;
          element[valueid] = result
        };
        break
      }
    }
    if (!isExist) {
      reader.onload = async function (ele: any) {
        result = await reader.result;
        let selecetedImg = ele.target.result;
        selectedObj[valueid] = selecetedImg
        obj[valueid] = result;
      };
      this.imageObject.push(obj);
      this.selectedImgArrayDetails.push(selectedObj);
    }

  }
  //  for save 
  // 'Document': this.imageObject

  isLoading: boolean = false
  isDisabled: boolean = false
  send() {
    if (this.angForm.valid) {
      let data: any = localStorage.getItem("user");
      let result = JSON.parse(data);
      const formVal = this.angForm.value;
      const dataobj = {
        CITY: this.ngcity,
        TEXT: formVal.Message,
        Document: this.imageObject
      }
      this.isLoading = true
      this.isDisabled = true
      // this._AddEventService.sendMessage(dataobj).subscribe(
      //   (data) => {
      //     this.isLoading = true
      //     this.isDisabled = true

      //     Swal.fire("success", "Message Send Successfully", "success");
      //     this.angForm.reset()
      //     this.ngcity = [this.temcity[0]['CODE']]
      //     this.isLoading = false
      //     this.isDisabled = false

      //   },
      //   (err) => {
      //     this.isLoading = false
      //     this.isDisabled = false

      //     if (err.error.statusCode == 400) {
      //       Swal.fire("error", err.error.message, "error");
      //     } else {
      //       Swal.fire("Error", 'Something Wents Wrong', "error");
      //     }
      //   }
      // );
    } else {
      Swal.fire('Error', "Please Fill All Fields", 'error')
    }
  }

}
