import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentResultBoardComponent } from './components/student-result-board/student-result-board.component';
import { SchoolAdmissionComponent } from './components/school-admission/school-admission.component';

const routes: Routes = [
  { path: '', component: StudentResultBoardComponent },
  { path: 'result', component: StudentResultBoardComponent },
  { path: 'admission', component: SchoolAdmissionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
