import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-school-admission',
  templateUrl: './school-admission.component.html',
  styleUrls: ['./school-admission.component.css']
})
export class SchoolAdmissionComponent implements OnInit {

  admissionForm = new FormGroup({
    f_name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]),
    l_name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]),
    Class: new FormControl('', Validators.required),
    y_pass: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(2017)]),
    per: new FormControl('', Validators.required),
  });

  constructor() { }
  ngOnInit(): void {
  }
  onSubmit() {

    alert("successfully submited");

  }
}
