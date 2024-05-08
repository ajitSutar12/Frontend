import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import Quill from 'quill';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blanknotice',
  templateUrl: './blanknotice.component.html',
  styleUrls: ['./blanknotice.component.scss']
})
export class BlanknoticeComponent implements OnInit {
  @ViewChild('quillEditor') quillEditor!: QuillEditorComponent;
  name: any;

  // @ViewChild('editor') editor: ElementRef;
  @ViewChild('editor') editor: any;
  clicked:boolean=false;
  code: any
  angForm: FormGroup;
  constructor(private http: HttpClient, private ngZone: NgZone, private fb: FormBuilder,) {
  }

  ngOnInit(): void {
    this.createForm()
  }
  Options = ['AC_NAME', 'CURRENT_INTEREST', 'AC_NO', 'OVERDUEDATE', 'REC_PAY_INTEREST', 'DUEBAL', 'CITY_NAME', 'BALANCE', 'S_NAME', 'BANKACNO', 'AC_SANCTION_AMOUNT', 'AC_EXPIRE_DATE', 'AC_OPDATE'];
  enteredName: string = '';

  selectedOption: string;
  createForm() {
    this.angForm = this.fb.group({
      code: [''],
      name: [''],
      htmlText: [''],
    });

  }
  subject: string = '';
  htmlText: string = '';
  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video']                         // link and image, video
      ],
    }
  };

  onSelectionChanged(event: any) {
    console.log('selection changed', event);
  }
  onContentChanged(event: any) {
    console.log('content changed', event);
  }
  getAcc(event) {
    let userData = JSON.parse(localStorage.getItem('user'));
    let BRANCH_CODE = userData.branch.id;

    let myObj = {
      'BRANCH_CODE': BRANCH_CODE
    }
    //get all details of Account 
    this.http.post('http://192.168.1.121:3002/notice/getalldetailsofloanacc', myObj).subscribe(
      (response) => {
        this.getQuill(response);

      },
      (error) => {
        console.error('Error fetching account information:', error);
      }
    );
  }
  AC_NAME

  getQuill(event) {
    if (this.htmlText || event.AC_NAME || event.AC_NO || event.AC_EXPIRE_DATE || event.S_NAME || event.BANKACNO || event.BALANCE || event.CITY_NAME || event.DUEBAL || event.REC_PAY_INTEREST || event.CURRENT_INTEREST || event.OVERDUEDATE) {
      console.log(this.htmlText);
      this.htmlText = this.htmlText.replace('AC_NAME', event.AC_NAME);
      this.htmlText = this.htmlText.replace('AC_NO', event.AC_NO);
      this.htmlText = this.htmlText.replace('AC_OPDATE', event.AC_OPDATE);
      this.htmlText = this.htmlText.replace('AC_EXPIRE_DATE', event.AC_EXPIRE_DATE);
      this.htmlText = this.htmlText.replace('AC_SANCTION_AMOUNT', event.AC_SANCTION_AMOUNT);
      this.htmlText = this.htmlText.replace('BANKACNO', event.BANKACNO);
      this.htmlText = this.htmlText.replace('S_NAME', event.S_NAME);
      this.htmlText = this.htmlText.replace('BALANCE', event.BALANCE);
      this.htmlText = this.htmlText.replace('CITY_NAME', event.CITY_NAME);
      this.htmlText = this.htmlText.replace('DUEBAL', event.DUEBAL);
      this.htmlText = this.htmlText.replace('REC_PAY_INTEREST', event.REC_PAY_INTEREST);
      this.htmlText = this.htmlText.replace('CURRENT_INTEREST', event.CURRENT_INTEREST);
      this.htmlText = this.htmlText.replace('OVERDUEDATE', event.OVERDUEDATE);
    }
  }
  updateEditorContent(event) { }
  updateQuillEditor(value: string): void {
    let quill = this.quillEditor.quillEditor;
    let cursorPosition = quill.getSelection()?.index;
    if (cursorPosition !== null && cursorPosition !== undefined) {
      quill.insertText(cursorPosition, value);
    }
  }
  submit() {
    let obj = this.angForm.value
    let emailData = {
      // 'CODE': 10,
      'NAME': obj.name,
      'textareaContent': obj.htmlText
    };

    this.http.post('http://192.168.1.121:3002/notice/insert', emailData)
      .subscribe(response => {
        Swal.fire('Sucess!', 'Data Submitted Sucessfully!', 'success').then(()=>{ this.clicked=false});
        this.resetForm()
        // Handle success
      }, error => {
        console.error('Error sending data');
        // Handle error
      });
  }
  resetForm() {
    this.angForm.controls.htmlText.reset();
    this.angForm.controls.name.reset();
  }
}
