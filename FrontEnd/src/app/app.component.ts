import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tryagian';
  constructor() {}
  ngOnInit(){
  //  this.getCustomers();
  }
  show="no";
  makeit(){
    this.show="yes";
  }
  hideit(){
    this.show="no";
  }

  show1="no";
  makeit1(){
    this.show1="yes";
  }
  hideit1(){
    this.show1="no";
  }

  show2="no";
  makeit2(){
    this.show2="yes";
  }
  hideit2(){
    this.show2="no";
  }

  show3="no";
  makeit3(){
    this.show3="yes";
  }
  hideit3(){
    this.show3="no";
  }

  show4="no";
  makeit4(){
    this.show4="yes";
  }
  hideit4(){
    this.show4="no";
  }
}
