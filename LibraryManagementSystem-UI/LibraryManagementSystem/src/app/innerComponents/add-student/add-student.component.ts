import { Component, OnInit } from '@angular/core';
import { IStudentVm } from 'src/app/Models/IStudentVm';
import { StudentService } from 'src/app/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  departmentId:any
  gender:string = ""
  studentName:string = ""

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  addStudent(){
    let student:IStudentVm={
      departmentId :this.departmentId,
      gender:this.gender,
      studentName:this.studentName
    }
    this.studentService.addStudent(student).subscribe((response)=>{
      console.log(response)
      Swal.fire({
        title: 'Student Adding Status',
        text: `Student added successfully with student id: ${response.studentId}`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })

    },
    err=>{
      console.log(err.error.error)
    })
  }

  getGender(event:any){
    this.gender = event.target.value
    console.log(this.gender)
  }

}
