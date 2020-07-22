import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../admin-data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hsn-country-selection',
  templateUrl: './hsn-country-selection.component.html',
  styleUrls: ['./hsn-country-selection.component.css']
})
export class HsnCountrySelectionComponent implements OnInit {

  public selectedVal: string;
  public hsnCode: string;
  public selectedCountries: any;
  public showData: Array<object> = [];
  countryList = ['India', 'Srilanka', 'Nepal'];
  countryData: any;
  fileUrl: any;
  constructor(
    private adminService: AdminDataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.adminService.getCountryies().subscribe(res => {
      console.log(res);
      this.countryData = res;
    });
  }

  showResults() {
    this.showData = [];
    const data = this.countryData.filter(res => {
      return (res.Hsn === this.hsnCode);
    });
    this.selectedCountries.forEach(ele => {
      this.showData.push(data.find(item => ele === item.country));
    });

    const csvData = this.ConvertToCSV(this.showData, ['country', 'Hsn', 'chlorine']);
    const blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

  }

  ConvertToCSV(objArray, headerList) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i + 1) + '';
      for (let index in headerList) {
        let head = headerList[index];
        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    return str;
  }
}
