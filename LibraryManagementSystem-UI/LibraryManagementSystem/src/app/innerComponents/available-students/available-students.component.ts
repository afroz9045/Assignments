import { Component, OnInit } from '@angular/core';
import { IStudentDto } from 'src/app/Models/IStudentDto';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-available-students',
  templateUrl: './available-students.component.html',
  styleUrls: ['./available-students.component.css']
})
export class AvailableStudentsComponent implements OnInit {

  studentList:IStudentDto[] = [];
  errorMessage: string="";
  constructor(private studentService:StudentService) { 
    this.getStudents();
  }

  ngOnInit(): void {

  }

  getStudents() {
    debugger
    this.studentService.getStudents().subscribe((response) => {
      const students = JSON.stringify(response);

      this.studentList = JSON.parse(students)
      console.log(this.studentList)
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }

  onEditStudent(studentId:number){
    console.log(`Student id to edit : ${studentId}`)
  }
  onDeleteStudent(studentId:number){
    console.log(`Student id to delete : ${studentId}`)
  }
}
