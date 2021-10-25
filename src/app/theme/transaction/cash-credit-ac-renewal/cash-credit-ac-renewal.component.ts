import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-cash-credit-ac-renewal',
  templateUrl: './cash-credit-ac-renewal.component.html',
  styleUrls: ['./cash-credit-ac-renewal.component.scss']
})
export class CashCreditAcRenewalComponent implements OnInit {

  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    scheme: "",
    acc_no: "",
    renewal_date: "",
    acc_date: "",
    renewal_times: "",
    period:"",
    expiry: "",
    s_limit: "",
    sanction: "",
    securities_amount: "",
    drawing_power: "",
    installment: "",
    r_period: "",
    r_expiry: "",
    r_s_limit: "",
    r_sanction: "",
    r_securities_amount: "",
    r_drawing_power: "",
    r_installment: "",
    int_category: "",
    l_interest: "",
    no:"",
    date:"",
    n_interest:"",
    p_interest:"",
    e_date:"",
    year:"",
    subm_date:"",
    tds_rate:"",
    tds_limit:"",

  };

//function for edit button clicked
  editClickHandler(info: any): void {
    this.message.scheme = info.scheme;
    this.message.tds_rate = info.tds_rate;
    this.message.tds_limit = info.tds_limit;
    this.message.acc_no = info.acc_no;
    this.message.renewal_date = info.renewal_date;
    this.message.acc_date = info.acc_date;
    this.message.renewal_times = info.renewal_times;
    this.message.period = info.period;
    this.message.expiry = info.expiry;
    this.message.s_limit = info.s_limit;
    this.message.sanction = info.sanction;
    this.message.securities_amount = info.securities_amount;
    this.message.drawing_power = info.drawing_power;
    this.message.installment = info.installment;
    this.message.r_period = info.r_period;
    this.message.r_expiry = info.r_expiry;
    this.message.r_s_limit = info.r_s_limit;
    this.message.r_sanction = info.r_sanction;
    this.message.r_installment = info.r_installment;
    this.message.int_category = info.int_category;
    this.message.l_interest = info.l_interest;
    this.message.r_securities_amount = info.r_securities_amount;
    this.message.r_drawing_power = info.r_drawing_power;
    this.message.no = info.no;
    this.message.date = info.date;
    this.message.n_interest = info.n_interest;
    this.message.p_interest = info.p_interest;
    this.message.year = info.year;
    this.message.e_date = info.e_date;
    this.message.subm_date = info.subm_date;
    this.showButton = false;
    this.updateShow = true;


  }

//function for delete button clicked
delClickHandler(info:any):void  {
  this.message.scheme=info.scheme;
      Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to delete title." + this.message.scheme + "  data", 
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

  constructor() { }
 
  
    ngOnInit(): void {
      this.dtExportButtonOptions = {
        ajax: 'fake-data/cash_acc_renewal.json',
        columns: [
          {
            title: 'Action',
            render: function (data: any, type: any, full: any) {
              return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
            }
          }, {
            title: 'Scheme',
            data: 'scheme'
          }, {
          title: 'Account No ',
          data: 'acc_no'
        }, {
          title: 'Renewal Date',
          data: 'renewal_date'
        },{
          title: 'Account Opening Date',
          data: 'acc_date'
        }, {
          title: 'Account Renewal Times',
          data: 'renewal_times'
        }, {
          title: 'Old Period',
          data: 'period'
        }, {
          title: 'Old Expiry Date',
          data: 'expiry'
        }, {
          title: 'Sanction Limit',
          data: 's_limit'
        }, {
          title: 'Sanction Date',
          data: 'sanction'
        }, {
          title: 'Securities Amount ',
          data: 'securities_amount'
        }, {
          title: 'Drawing Power',
          data: 'drawing_power'
        }, {
          title: 'Installment',
          data: 'installment'
        }, {
          title: 'Renew Period',
          data: 'r_period'
        }, {
          title: 'Renew Expiry Date',
          data: 'r_expiry'
        }, {
          title: 'Renew Sanction Limit',
          data: 'r_s_limit'
        }, {
          title: 'Renew Sanction Date',
          data: 'r_sanction'
        }, {
          title: 'Renew Securities Amount ',
          data: 'r_securities_amount'
        }, {
          title: 'Renew Drawing Power',
          data: 'r_drawing_power'
        }, {
          title: 'Renew Installment',
          data: 'r_installment'
        }, {
          title: 'Interest Category',
          data: 'int_category'
        }, {
          title: 'Last Interest Date',
          data: 'l_interest'
        }, {
          title: 'No',
          data: 'no'
        }, {
          title: 'Date',
          data: 'date'
        },{
          title: 'Normal Interest Date',
          data: 'n_interest'
        },{
          title: 'Penal Interst Rate',
          data: 'p_interest'
        }, {
          title: 'Effective Date',
          data: 'e_date'
        }, 
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
  }
  

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

}