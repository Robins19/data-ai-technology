import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  tableData: { "id": number; "first_name": string; "last_name": string; "company": string; "city": string; "state": string; "zip": number; "email": string; "web": string; "age": number; }[];
  routeParameters: any;
  userDetails: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
			this.routeParameters = params;
    });
   }

  ngOnInit(): void {
    this.initialiseTable()
    this.initiateUserDeatils()
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
  initiateUserDeatils(){
    this.tableData.forEach((item)=>{
      if(item.id==this.routeParameters.id){
        this.userDetails = item;
      }
    })
  }
}
