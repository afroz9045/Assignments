// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "https://localhost:7257/v1/",
  baseUrlAuth : "https://localhost:7260/",
  loginAuthSubUrl :"auth/login",
  registerAuthSubUrl : "auth/register",
  getBooksSubUrl:"books",
  issueBookSubUrl:"issuebook",
  returnBookSubUrl:"returnbook",
  penaltyCheckSubUrl:"bookspenalty/",
  payPenaltySubUrl:"bookspenalty/pay",
  addStaffSubUrl:"staffs",
  addBookSubUrl:"books",
  getOutOfStockBooksSubUrl: "books/outofstock",
  getDepartmentsSubUrl : "departments",
  getDesignationSubUrl:"designations",
  getStaffSubUrl:"staffs",
  getStudentSubUrl:"students",
  getBooksIssueSubUrl:"issuebook",
  getBooksReturnedSubUrl: "returnbook",
  getPendingBooksReturn :"returnbook/pending-returns",
  updateBook:"books/",
  deleteBook:"books/",
  bookStockUpdate:"books/stockupdate",
  departmentUpdate:"departments/",
  designationUpdate:"designations/",
  deleteDepartment:"departments/",
  deleteDesignation:"designations/",
  addDepartment:"departments",
  addDesignation:"designations",
  updateStaff:"staffs/",
  deleteStaff:"staffs/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
