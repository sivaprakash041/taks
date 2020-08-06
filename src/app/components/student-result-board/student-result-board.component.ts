import { Component, OnInit } from '@angular/core';
// import * as data from '../../../assets/data.json';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-student-result-board',
  templateUrl: './student-result-board.component.html',
  styleUrls: ['./student-result-board.component.css']
})
export class StudentResultBoardComponent implements OnInit {
  data = []
  // data1 = [
  //   {
  //     'name': 'rajiv',
  //     'marks': {
  //       'Maths': '18',
  //       'English': '21',
  //       'Science': '45'
  //     },
  //     'rollNumber': 'KV2017-5A2'
  //   },
  //   {
  //     'name': 'abhishek',
  //     'marks': {
  //       'Maths': '43',
  //       'English': '30',
  //       'Science': '37'
  //     },
  //     'rollNumber': 'KV2017-5A1'
  //   },
  //   {
  //     'name': 'zoya',
  //     'marks': {
  //       'Maths': '42.90',
  //       'English': '31',
  //       'Science': '50'
  //     },
  //     'rollNumber': 'KV2017-5A3'
  //   }
  // ];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // console.log(this.data1);
    this.http.get<any>('assets/data.json').subscribe(data => {

      this.data = data;
      console.log(this.data);
      this.cal_total();
      this.assign_status();
    });


  }

  cal_total() {
    this.data.forEach(element => {
      var ele = element.marks
      let arr = [];

      Object.keys(ele).map(function (key) {
        arr.push({ [key]: ele[key] })
        return arr;
      });
      var total = 0;
      // console.log(arr)

      var a = parseFloat(arr[0].Maths)
      var b = parseFloat(arr[1].English)
      var c = parseFloat(arr[2].Science)
      element['total'] = a + b + c;
    });

  }

  assign_status() {
    var height_marks = 0
    this.data.forEach(element => {
      if (height_marks < element['total']) {
        height_marks = element['total'];
      }
    });

    this.data.forEach(element => {
      if (element['total'] == height_marks && element['total'] >= 20) {
        element['status'] = 'Topper'
      }
      else if (element['total'] <= 20) {
        element['status'] = 'Fail'
      }
      else {
        element['status'] = 'Pass'
      }

    })
    console.log(this.data)
  }


}
