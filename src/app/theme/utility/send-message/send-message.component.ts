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
import { environment } from "../../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
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
  url = environment.base_url;
  showexcel: boolean = false
  formexcelData: any[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  //validation
  createForm() {
    this.angForm = this.fb.group({
      SENDTO: [1],
      FILE: [],
      Message: [],
      excelupload: [],
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
      let formVal = this.angForm.value;
      let dataobj = {
        TEXT: formVal.Message,
        Document: this.imageObject,
        SENDTO: formVal.SENDTO,
        member: this.convertedData
      }
      this.isLoading = true
      this.isDisabled = true
      this.http.post(this.url + '/whatsapp-messages/message', dataobj).subscribe(
        (data) => {
          if (data == 1) {
            this.isLoading = true
            this.isDisabled = true
            Swal.fire("success", "Message Send Successfully", "success");
            this.angForm.reset()
            this.isLoading = false
            this.isDisabled = false
            this.createForm()
          }
          else {
            this.isLoading = false
            this.isDisabled = false
            Swal.fire("warning", "Please contact to Compserv to allow Whatsapp messages", "warning");
          }
        },
        (err) => {
          this.isLoading = false
          this.isDisabled = false

          if (err.error.statusCode == 400) {
            Swal.fire("error", err.error.message, "error");
          } else {
            Swal.fire("Error", 'Something Wents Wrong', "error");
          }
        }
      );
    } else {
      Swal.fire('Error', "Please Fill All Fields", 'error')
    }
  }
  selectedType() {
    if (this.angForm.controls['SENDTO'].value == 0) {
      this.showexcel = true
    }
    else if (this.angForm.controls['SENDTO'].value == 1) {
      this.showexcel = false
    }
  }
  // onFileChange(event: any) {
  //   let file = event.target.files[0];
  //   let formData: FormData = new FormData();
  //   this.formexcelData.append('excelFile', file, file.name);
  //   // this.uploadExcel(file).subscribe(
  //   //   (response) => {
  //   //     console.log('File uploaded successfully', response);
  //   //   },
  //   //   (error) => {
  //   //     console.error('Error uploading file', error);
  //   //   }
  //   // );
  // }


  onFileChange(event: any): void {
    let file = event.target.files[0];
    this.formexcelData = []
    this.convertedData = []
    this.readExcel(file);
  }

  readExcel(file: File): void {
    let reader = new FileReader();

    reader.onload = (e: any) => {
      let binaryString = e.target.result;
      let workbook = XLSX.read(binaryString, { type: 'binary' });

      // Assuming the first sheet is the one you want to read
      let sheetName = workbook.SheetNames[0];
      let sheet = workbook.Sheets[sheetName];

      // Parse the sheet data into an array of objects
      this.formexcelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      this.convertDataToObject();
      console.log(this.convertedData);
      // Log the data or perform further processing
    };

    reader.readAsBinaryString(file);
  }
  convertedData: any[] = [];
  convertDataToObject(): void {
    if (this.formexcelData.length > 1) {
      let headers = this.formexcelData[0];

      for (let i = 1; i < this.formexcelData.length; i++) {
        let rowData = this.formexcelData[i];
        let obj: any = {};

        for (let j = 0; j < headers.length; j++) {
          let header = headers[j];
          let value = rowData[j];

          obj[header] = value;
        }

        this.convertedData.push(obj);
      }
    }
  }
}
