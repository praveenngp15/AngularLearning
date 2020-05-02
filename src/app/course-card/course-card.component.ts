import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  title:string;
  constructor() { }

  ngOnInit(): void {
  }

}
