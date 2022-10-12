import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActionComponent } from './action/action.component';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './innerComponents/add-book/add-book.component';
import { ViewBooksComponent } from './innerComponents/view-books/view-books.component';
import { OutOfStockComponent } from './innerComponents/out-of-stock/out-of-stock.component';
import { BooksReturnedComponent } from './innerComponents/books-returned/books-returned.component';
import { AvailableBooksComponent } from './innerComponents/available-books/available-books.component';
import { AddDepartmentComponent } from './innerComponents/add-department/add-department.component';
import { AvailableDepartmentsComponent } from './innerComponents/available-departments/available-departments.component';
import { AddDesignationComponent } from './innerComponents/add-designation/add-designation.component';
import { AvailableDesignationsComponent } from './innerComponents/available-designations/available-designations.component';
import { AddStaffComponent } from './innerComponents/add-staff/add-staff.component';
import { AvailableStaffsComponent } from './innerComponents/available-staffs/available-staffs.component';
import { AddStudentComponent } from './innerComponents/add-student/add-student.component';
import { AvailableStudentsComponent } from './innerComponents/available-students/available-students.component';
import { IssueBookComponent } from './innerComponents/issue-book/issue-book.component';
import { ReturnBookComponent } from './innerComponents/return-book/return-book.component';
import { PenaltyCheckComponent } from './innerComponents/penalty-check/penalty-check.component';
import { LoginComponent } from './registrationLogin/login/login.component';
import { RegistrationComponent } from './registrationLogin/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { AuthService } from './Services/auth.service';
import { FormsModule } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { JwtDecodeService } from './Services/jwt-decode.service';


const appRoutes: Routes = [
  // {path:'',component:AppComponent}, //localhost:4200
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
      path: 'home', component: HomeComponent
    , children: [
      {path:'',component:AvailableBooksComponent},
      { path: 'book/add', component: AddBookComponent },
      { path: 'department/add', component: AddDepartmentComponent },
      { path: 'designation/add', component: AddDesignationComponent },
      { path: 'staff/add', component: AddStaffComponent },
      { path: 'student/add', component: AddStudentComponent },
      { path: 'books', component: AvailableBooksComponent },
      { path: 'books/outofstock', component: OutOfStockComponent },
      { path: 'departments', component: AvailableDepartmentsComponent },
      { path: 'staffs', component: AvailableStaffsComponent },
      { path: 'students', component: AvailableStudentsComponent },
      { path: 'designations', component: AvailableDesignationsComponent },
      { path: 'book/issue', component: IssueBookComponent },
      { path: 'book/return', component: ReturnBookComponent },
      { path: 'book/penaltycheck', component: PenaltyCheckComponent },
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ActionComponent,
    AddBookComponent,
    ViewBooksComponent,
    OutOfStockComponent,
    BooksReturnedComponent,
    AvailableBooksComponent,
    AddDepartmentComponent,
    AvailableDepartmentsComponent,
    AddDesignationComponent,
    AvailableDesignationsComponent,
    AddStaffComponent,
    AvailableStaffsComponent,
    AddStudentComponent,
    AvailableStudentsComponent,
    IssueBookComponent,
    ReturnBookComponent,
    PenaltyCheckComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
