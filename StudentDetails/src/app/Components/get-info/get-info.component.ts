import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.css']
})
export class GetInfoComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem("key"));
    if(data!=null){
      this.StudentDetails=data;
        }
    }

  StudentDetails:any = []
  onSubmit() {
      var getForm = this.studentForm.value;
      this.StudentDetails.push(getForm);
      var value=JSON.stringify(this.StudentDetails);
      localStorage.setItem("key",value);
    }

}
