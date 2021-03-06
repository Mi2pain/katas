import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [],
    canActivateChild: [],
    children: [
        {
          path: 'employees',
          loadChildren: () =>
            import('./employee/employee.module').then((m) => m.EmployeeModule),
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
