import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-acm',
  templateUrl: './process-acm.component.html',
  styleUrls: ['./process-acm.component.scss']
})
export class ProcessACMComponent implements OnInit {
  NPAProcess = true;
  NPAMarking = false;
  NPAProcessLocking = false;
  DeadStockDepreciation = false;
  OverdraftInterestPosting = false;
  PenalInterestCalculation = false;
  TransferToGLbyClosingAC = false;
  payrollexportfileprocess = false;
  payrolldatatransfer = false;
  ChargesPosting=false;


  dtExportButtonOptions : any = {};

  constructor() { }

  ngOnInit(): void {
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

  OpenLink(val) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // 
    if (val == 1) {
      this.NPAProcess = true;
      this.NPAMarking = false;
      this.NPAProcessLocking = false;
      this.DeadStockDepreciation = false;
      this.OverdraftInterestPosting = false;
      this.PenalInterestCalculation = false;
      this.TransferToGLbyClosingAC = false;
      this.payrollexportfileprocess = false;
      this.payrolldatatransfer = false;
      this.ChargesPosting=false;
        
      }
    if (val == 2) {
      this.NPAProcess = false;
      this.NPAMarking = true;
      this.NPAProcessLocking = false;
      this.DeadStockDepreciation = false;
      this.OverdraftInterestPosting = false;
      this.PenalInterestCalculation = false;
      this.TransferToGLbyClosingAC = false;
      this.payrollexportfileprocess = false;
      this.payrolldatatransfer = false;
      this.ChargesPosting=false;
    }
    if (val == 3) {
      this.NPAProcess = false;
      this.NPAMarking = false;
      this.NPAProcessLocking = true;
      this.DeadStockDepreciation = false;
      this.OverdraftInterestPosting = false;
      this.PenalInterestCalculation = false;
      this.TransferToGLbyClosingAC = false;
      this.payrollexportfileprocess = false;
      this.payrolldatatransfer = false;
      this.ChargesPosting=false;

    }
    if (val == 4) {
      this.NPAProcess = false;
      this.NPAMarking = false;
      this.NPAProcessLocking = false;
      this.DeadStockDepreciation = true;
      this.OverdraftInterestPosting = false;
      this.PenalInterestCalculation = false;
      this.TransferToGLbyClosingAC = false;
      this.payrollexportfileprocess = false;
      this.payrolldatatransfer = false;
      this.ChargesPosting=false;
    }
    if (val == 5) {
      this.NPAProcess = false;
      this.NPAMarking = false;
      this.NPAProcessLocking = false;
      this.DeadStockDepreciation = false;
      this.OverdraftInterestPosting = true;
      this.PenalInterestCalculation = false;
      this.TransferToGLbyClosingAC = false;
      this.payrollexportfileprocess = false;
      this.payrolldatatransfer = false;
      this.ChargesPosting=false;

    }
    if (val == 6) {
      this.NPAProcess = false;
      this.NPAMarking = false;
      this.NPAProcessLocking = false;
      this.DeadStockDepreciation = false;
      this.OverdraftInterestPosting = false;
      this.PenalInterestCalculation = true;
      this.TransferToGLbyClosingAC = false;
      this.payrollexportfileprocess = false;
      this.payrolldatatransfer = false;
      this.ChargesPosting=false;
    }
    if (val == 7) {
      this.NPAProcess = false;
      this.NPAMarking = false;
      this.NPAProcessLocking = false;
      this.DeadStockDepreciation = false;
      this.OverdraftInterestPosting = false;
      this.PenalInterestCalculation = false;
      this.TransferToGLbyClosingAC = true;
      this.payrollexportfileprocess = false;
      this.payrolldatatransfer = false;
      this.ChargesPosting=false;

    }
    if (val == 8) {
      this.NPAProcess = false;
      this.NPAMarking = false;
      this.NPAProcessLocking = false;
      this.DeadStockDepreciation = false;
      this.OverdraftInterestPosting = false;
      this.PenalInterestCalculation = false;
      this.TransferToGLbyClosingAC = false;
      this.payrollexportfileprocess = true;
      this.payrolldatatransfer = false;
      this.ChargesPosting=false;
      

    }
    if (val == 9) {
      this.NPAProcess = false;
      this.NPAMarking = false;
      this.NPAProcessLocking = false;
      this.DeadStockDepreciation = false;
      this.OverdraftInterestPosting = false;
      this.PenalInterestCalculation = false;
      this.TransferToGLbyClosingAC = false;
      this.payrollexportfileprocess = false;
      this.payrolldatatransfer = true;
      this.ChargesPosting=false;

    }
    if (val == 10) {
      this.NPAProcess = false;
      this.NPAMarking = false;
      this.NPAProcessLocking = false;
      this.DeadStockDepreciation = false;
      this.OverdraftInterestPosting = false;
      this.PenalInterestCalculation = false;
      this.TransferToGLbyClosingAC = false;
      this.payrollexportfileprocess = false;
      this.payrolldatatransfer = false;
      this.ChargesPosting=true;
  
    }
  }
}
