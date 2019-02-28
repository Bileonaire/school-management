import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { ParentsComponent } from './parents/parents.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: []
      },
      {
        path: 'students',
        component: StudentsComponent,
        canActivate: []
      },
      {
        path: 'parents',
        component: ParentsComponent,
        canActivate: []
      },
      {
        path: 'teachers',
        component: TeachersComponent,
        canActivate: []
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
