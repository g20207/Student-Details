import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
public data: any;
  constructor(private modalService: NgbModal) {
   }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("key"));
  }

  getStudentdetails(index: number) {
    let student = this.data[index - 1];
    localStorage.setItem("student", JSON.stringify(student));
        // redirect to the edit page or open a modal for editing
  }

}
