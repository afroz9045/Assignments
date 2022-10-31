import { Component, OnInit } from '@angular/core';
import { IStudentDto } from 'src/app/Models/IStudentDto';
import { StudentService } from 'src/app/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-available-students',
  templateUrl: './available-students.component.html',
  styleUrls: ['./available-students.component.css']
})
export class AvailableStudentsComponent implements OnInit {

  

  studentGender: string = "";
  studentIdforEdit: any;
  studentIndex!: number;

  editedStudentName: string = "";
  editedGender: string = this.studentGender;
  editedDepartmentId: string="";

  genderList: string[] = ["Male", 'Female', 'Others']
  genderListToShow: string[] = []
  studentList: IStudentDto[] = [];
  errorMessage: string = "";
  isAdmin: boolean = false;
  constructor(private studentService: StudentService) {
    this.getStudents();
  }

  ngOnInit(): void {
  }

  getStudents() {
    debugger
    let userRole = localStorage.getItem("userRole")
    if (userRole === "Principle" || userRole === "Director") {
      this.isAdmin = true;
    }
    this.studentService.getStudents().subscribe((response) => {
      const students = JSON.stringify(response);

      this.studentList = JSON.parse(students)
      console.log(this.studentList)
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }
  // 2.
  onDropDownChange(event: any) {
    debugger
    this.editedGender = event.target.value
    console.log(this.editedGender)
    //this.onStudentEdit(this.studentIdforEdit, this.studentIndex)

  }

  editStudent() {
    debugger
    let updatedStudent = {
      studentName: this.editedStudentName,
      gender: this.editedGender,
      departmentId: this.editedDepartmentId
    }
    console.log(`Student details for update: ${{ updatedStudent }}`)
    this.studentService.onStudentEdit(updatedStudent, this.studentIdforEdit).subscribe((response) => {
      console.log("Updated staff name is : " + response.studentName)
      if (response) {
        this.getStudents();
        Swal.fire({
          title: 'Student details updated',
          text: `Student with student id : ${this.studentIdforEdit} updated successfully!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    },
      err => {
        console.log(err)
        Swal.fire({
          title: 'Student Update Status',
          text: `${err.error}`,
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        console.log(err.errorMessage)
      }

    )
  }
// 1.
  onStudentEdit(studentId: number, index: number) {
    debugger
    this.editedStudentName = this.studentList[index].studentName
    this.editedDepartmentId = this.studentList[index].departmentId
    this.studentGender = this.studentList[index].gender
    console.log(this.studentGender)
    this.genderListToShow = this.genderList.filter(g => !(g == this.studentGender))

    console.log(this.genderList)
    this.studentIdforEdit = studentId;
    this.studentIndex = index
  }
  onDeleteStudent(studentId: number) {
    console.log(`Student id to delete : ${studentId}`)
  }

  clearModalValues(){
    debugger
    this.editedStudentName = ""
    this.studentGender = ""
    this.editedDepartmentId = ""
  }
}
