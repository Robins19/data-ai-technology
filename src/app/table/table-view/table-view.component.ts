import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  tableData: any;
  startFrom: number;
  numberOfIteams: number;
  pagevalue: number;
  page:any;
  totalPageCount: number;
  sortType: string;
  sortReverse: boolean;
  searchName: AbstractControl;
  adminForm: FormGroup;



  constructor() { }

  ngOnInit(): void {
    this.initialiseTable();
    this.sortType     = 'first_name'; // set the default sort type
    this.sortReverse  = false;
    this.searchName = new FormControl('', []);
    this.adminForm = new FormGroup({
        searchName: this.searchName

    })
    console.log(this.tableData,"hello")
  }

  initialiseTable(){
    this.tableData =[
      {"id":1,"first_name":"robins","last_name":"singh","company":"click labs","city":"Ekma","state":"Bihar","zip":841208,"email":"robins@gmail.com","web":"www.com","age":22},
      {"id":2,"first_name":"sunil","last_name":"kumar","company":"labs","city":"chapra","state":"punjab","zip":941208,"email":"robins@gmail.com","web":"www.com","age":22},
      {"id":3,"first_name":"sanjay","last_name":"pandey","company":"gs labs","city":"phagwara","state":"haryana","zip":741208,"email":"robins@gmail.com","web":"www.com","age":22},
      {"id":4,"first_name":"ajay","last_name":"sardar","company":"ms labs","city":"jalandhar","state":"chandigarh","zip":841208,"email":"robins@gmail.com","web":"www.com","age":22},
      {"id":5,"first_name":"mukesh","last_name":"number","company":"ps labs","city":"mandi","state":"delhi","zip":541208,"email":"robins@gmail.com","web":"www.com","age":22},
      {"id":6,"first_name":"alok","last_name":"punjabi","company":"as labs","city":"kullu","state":"mumbai","zip":641208,"email":"robins@gmail.com","web":"www.com","age":22},
      {"id":7,"first_name":"mangal","last_name":"afghani","company":"ms labs","city":"mnali","state":"tamil","zip":141208,"email":"robins@gmail.com","web":"www.com","age":22},
      {"id":8,"first_name":"gautam","last_name":"pakistani","company":"ls labs","city":"kangra","state":"andhra","zip":241208,"email":"robins@gmail.com","web":"www.com","age":22},
      {"id":9,"first_name":"suraj","last_name":"sharma","company":"ppppp labs","city":"ludhiyana","state":"up","zip":341208,"email":"robins@gmail.com","web":"www.com","age":22},
      {"id":10,"first_name":"abhishek","last_name":"aagrawal","company":"asd labs","city":"chapra","state":"bengal","zip":941208,"email":"robins@gmail.com","web":"www.com","age":22}

    ]
  }

 
   

  sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}



}
