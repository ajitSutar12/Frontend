import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements  OnInit {
  narationmasterTrue: boolean = true;
  bankTrue: boolean  = false;
  clearingTrue: boolean = false;
  ownbranchTrue: boolean = false;
  categoryTrue: boolean = false;
  cityTrue: boolean = false;
  castTrue: boolean = false;
  occupationTrue: boolean = false;
  diectorTrue: boolean = false;
  authorityTrue: boolean = false;
  recoveryTrue: boolean = false;
  insuranceTrue: boolean = false;
  operationTrue: boolean = false;
  purposeTrue: boolean = false;
  priorityTrue: boolean = false;
  courtTrue: boolean = false;
  advocateTrue: boolean = false;
  industryTrue: boolean = false;
  weakerTrue: boolean = false;
  loanstageTrue: boolean = false;
  interestTrue: boolean = false;
  healthTrue: boolean = false;
  prefixTrue: boolean = false;
  minimumTrue: boolean = false;
  documentTrue: boolean = false;
  lockerrackTrue: boolean = false;
  lockerrackwiseTrue: boolean = false;
  lockersizeTrue: boolean = false;
  companygroupTrue: boolean= false;
  companygrouplinkTrue: boolean= false;
  reporttypeTrue: boolean= false;
  itemcategoryTrue: boolean= false;
  depriciationTrue: boolean= false;
 
  salarydivisionTrue : boolean= false;
  subsalarydivisionTrue : boolean= false;
  
  
  constructor(private_router: Router){
  }
  ngOnInit(): void {
  }

  OpenLink(val)
  {
    // debugger
    if(val == 1)
    {
      this.narationmasterTrue = true;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
    
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 2)
    {
      this.narationmasterTrue =false;
      this. bankTrue = true;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.itemcategoryTrue= false;
      this.reporttypeTrue= false;
      this.depriciationTrue= false;
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 3)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = true;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 4)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= true;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.itemcategoryTrue= false;
      this.reporttypeTrue= false;
      this.depriciationTrue= false;
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 5)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= true;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 6)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= true;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 7)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= true;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
    
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 8)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= true;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 9)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= true;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
    
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 10)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= true;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 11)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= true;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
    
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 12)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= true;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
    
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 13)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= true;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 14)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= true;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 15)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= true;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
    
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 16)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= true;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 17)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= true;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 18)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= true;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 19)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= true;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 20)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= true;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 21)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= true;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 22)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= true;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 23)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= true;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 24)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= true;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 25)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= true;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 26)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= true;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 27)
    {
       this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= true;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 28)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= true;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
     
    }
    if(val == 29)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= true;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 30)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= true;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 31)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= true;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 32)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= true;
      this.depriciationTrue= false;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 33)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= true;
      
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= false;
    }
    if(val == 34)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
    
      this.salarydivisionTrue= true;
      this.subsalarydivisionTrue= false;
    }
    if(val == 35)
    {
      this.narationmasterTrue = false;
      this. bankTrue = false;
      this.clearingTrue = false;
      this.ownbranchTrue= false;
      this.categoryTrue= false;
      this.cityTrue= false;
      this.castTrue= false;
      this.occupationTrue= false;
      this.diectorTrue= false;
      this.authorityTrue= false;
      this.recoveryTrue= false;
      this.insuranceTrue= false;
      this.operationTrue= false;
      this.purposeTrue= false;
      this.priorityTrue= false;
      this.courtTrue= false;
      this.advocateTrue= false;
      this.industryTrue= false;
      this.weakerTrue= false;
      this.loanstageTrue= false;
      this.interestTrue= false;
      this.healthTrue= false;
      this.prefixTrue= false;
      this.minimumTrue= false;
      this.documentTrue= false;
      this.lockerrackTrue= false;
      this.lockerrackwiseTrue= false;
      this.lockersizeTrue= false;
      this.companygroupTrue= false;
      this.companygrouplinkTrue= false;
      this.reporttypeTrue= false;
      this.itemcategoryTrue= false;
      this.depriciationTrue= false;
    
      this.salarydivisionTrue= false;
      this.subsalarydivisionTrue= true;
    }
  }

}