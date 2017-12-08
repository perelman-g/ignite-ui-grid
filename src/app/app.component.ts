import { Component } from '@angular/core';
import { IgHierarchicalGridComponent } from 'igniteui-angular2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private data: any;
  private data1: any;
  private data2: any;
  private data3: any;
  private id: string;
  private hgridOptions: any;
  constructor(){
    this.id = 'hgrid1';
    this.data = [];
    this.data1 = [{
                "ID": 0,
                "Name": "Food",
                "Category": { "ID": 0, "Name": "Food", "Active": true, "Date": "\/Date(1059660800000)\/" },
                "Products": [
                    { "ID": 0, "Name": "Bread", "Price": "2.5" }
                ]
            }];
    this.data2 = [{
                "ID": 1,
                "Name": "Beverages",
                "Category": { "ID": 2, "Name": "Beverages", "Active": true, "Date": "\/Date(1159660800000)\/" },
                "Products": [
                    { "ID": 1, "Name": "Milk", "Price": "3.5" },
                    { "ID": 2, "Name": "Vint soda", "Price": "20.9" }
                ]
            }];
   this.data3 = [{
                "ID": 0,
                "Name": "Electronics",
                "Category": { "ID": 5, "Name": "Electronics", "Active": false, "Date": "\/Date(1859660800000)\/" },
                "Products": [
                    { "ID": 7, "Name": "DVD Player", "Price": "35.88" },
                    { "ID": 8, "Name": "LCD HDTV", "Price": "1088.8" }
                ]
            }];
    this.hgridOptions = {
            initialDataBindDepth: 1,           
            autoGenerateColumns: false,
            primaryKey: "ID",
            columns: [
                { headerText: "ID", key: "ID", width: "50px", dataType: "number" },
                { headerText: "Name", key: "Name", width: "130px", dataType: "string" }
            ],
            autoGenerateLayouts: false,
            columnLayouts: [
            {
                key: "Products",
                responseDataKey: "",
                childrenDataProperty: "Products",
                autoGenerateColumns: false,
                primaryKey: "ID",
                columns: [
                    { key: "ID", headerText: "ID", width: "25px" },
                    { key: "Name", headerText: "Product Name", width: "90px" },
                    { key: "Price", headerText: "Price", dataType: "number", width: "55px" }
                ]
            }
        ]
        };
  }
  changeHandler(event):void {
    var val = event.currentTarget.value;
    if(val === "1"){
      this.data = this.data1;
    } else if(val === "2") {
      this.data = this.data2;
    }  else if(val === "3")  {
        this.data = this.data3;
    }   
  }
}
