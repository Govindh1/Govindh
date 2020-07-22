import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../admin-data.service';
import { CurrentValues } from '../admin-side';

@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.css']
})
export class AdminSideComponent implements OnInit {
  public enteredKey: string;
  public currentValue: Array<CurrentValues> = [];
  private currentValuesData: CurrentValues[];
  public selectedCurrentVal: string;
  public isNameEditable = false;
  public isAgeEditabale = false;
  public isQulEditable = false;
  public isColEditabel = false;
  constructor(
    private adminService: AdminDataService
  ) { }

  ngOnInit() {
    this.adminService.getData().subscribe(res => {
      this.currentValuesData = res;
    });

    // this.adminService.getCountryies().subscribe(res => {
    //   console.log(res);
    // });
  }

  getCurrentValue() {
    if (this.enteredKey.length >= 3) {
      this.currentValue = this.currentValuesData.filter(val => {
        return this.enteredKey === val.key;
      });
    }
  }

  editSelected(value) {
    console.log('dblclik', value);
    switch (value) {
      case 'name':
        this.isNameEditable = true;
        break;
      case 'age':
        this.isAgeEditabale = true;
        break;
      case 'qulaification':
        this.isQulEditable = true;
        break;
      case 'college':
        this.isColEditabel = true;
        break;
    }
  }

  saveAll() {
    this.isNameEditable = false;
    this.isAgeEditabale = false;
    this.isQulEditable = false;
    this.isColEditabel = false;
  }

  clearAll() {
    this.isNameEditable = true;
    this.isAgeEditabale = true;
    this.isQulEditable = true;
    this.isColEditabel = true;
    this.currentValue[0].name = null;
    this.currentValue[0].Age = null;
    this.currentValue[0].Qulaification = null;
    this.currentValue[0].College = null;
  }

  deleteSelected() {
    switch (this.selectedCurrentVal) {
      case 'name':
        this.currentValue[0].name = null;
        break;
      case 'age':
        this.currentValue[0].Age = null;
        break;
      case 'qulaification':
        this.currentValue[0].Qulaification = null;
        break;
      case 'college':
        this.currentValue[0].College = null;
        break;
    }
  }

  selectedValue(val) {
    this.selectedCurrentVal = val;
  }
}
