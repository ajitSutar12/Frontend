import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { npcslabMasterService } from '../../../../shared/elements/npcslab-master.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{ReceiptService} from './n-paclassification-slab-master.component.service';


interface receiptinterface{
  LastReceiptNo:string,
  ReceiptType: number,
}

@Component({
  selector: 'app-n-paclassification-slab-master',
  templateUrl: './n-paclassification-slab-master.component.html',
  styleUrls: ['./n-paclassification-slab-master.component.scss']
})
export class NPAClassificationSlabMasterComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();


  //title select variables
  simpleOption: Array<IOption> = this.npcslabMasterService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;
  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public npcslabMasterService: npcslabMasterService, private fb: FormBuilder, private npaservice :ReceiptService) { this.createForm(); }
  //object created to get data when row is clicked
  message = {
    EffectiveDate: "",
    BaseDays: ""
  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/npcslab_master.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'SerialNo',
          title: 'Serial No'
        },
        {
          data: 'NPAClass',
          title: 'NPAClass'
        },
        {
          data: 'SubClassNo',
          title: 'SubClassNo'
        },
        {
          data: 'NPAClassDescription',
          title: 'NPA Class Description'
        },
        {
          data: 'FromDays',
          title: 'From Days'
        },
        {
          data: 'FromMonths',
          title: 'From Months'
        },
        {
          data: 'ToDays',
          title: 'To Days'
        },
        {
          data: 'ToMonths',
          title: 'To Months'
        },

        {
          data: 'SecuredPercent',
          title: 'Secured Percent'
        },
        {
          data: 'UnSecuredPercent',
          title: 'UnSecured Percent'
        }
      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).off('click');
        $('td', row).on('click', '#editbtn', () => {
          self.editClickHandler(data);
        });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler(data);
        });
        return row;
      }
    };
    this.runTimer();
    this.dataSub = this.npcslabMasterService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      BaseDays: ['', [Validators.pattern]],
      EffectiveDate:      ['', [Validators.required]],
    });
  }
  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      // console.log(this.angForm.value);
    }
    const formVal = this.angForm.value;
    const dataToSend = {
      'LastReceiptNo': formVal.LastReceiptNo,
      'ReceiptType': formVal.ReceiptType,
    };
    // console.log(this.angForm.value);
    this.npaservice.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        // to reload after insertion of data
        // this.rerender();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.BaseDays = info.BaseDays;
    this.message.EffectiveDate = info.EffectiveDate;
    this.showButton = false;
    this.updateShow = true;
  }
  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.EffectiveDate = info.EffectiveDate;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Serial No." + this.message.EffectiveDate + "  data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
  }
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }




}
