import { Component, OnInit } from '@angular/core';
import { OtherViewService } from '../other-view.service';

@Component({
  selector: 'app-ratio-analysis',
  templateUrl: './ratio-analysis.component.html',
  styleUrls: ['./ratio-analysis.component.scss']
})
export class RatioAnalysisComponent implements OnInit {

  dtExportButtonOptions: any = {};
  depositData: any;
  amount: any
  loanData: any;
  AverageLoan = 0;
  AverageDepo = 0;
  Margin = 0;
  modalClass: string = 'modalHide';
  constructor(private otherviewservice: OtherViewService) { }

  ngOnInit(): void {
    this.modalClass = 'modalShow';
    this.otherviewservice.ratioAnalysis().subscribe(data => {
      this.depositData = data.DepoData;
      this.loanData = data.LoanData;
      this.AverageDepo = data.AverageDepo;
      this.AverageLoan = data.AverageLoan;
      this.Margin = data.Margin;
      this.modalClass = 'modalHide';
    });
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Name',
          data: 'name'
        }, {
          title: 'Position',
          data: 'position'
        }, {
          title: 'Office',
          data: 'office'
        }, {
          title: 'Age',
          data: 'age'
        }, {
          title: 'Start Date',
          data: 'date'
        }, {
          title: 'Salary',
          data: 'salary'
        }],
      dom: "Blrtip",
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]
    };

  }


}
