import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserlistComponent } from './user-master/userlist/userlist.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { StockTableComponent } from './stock/stock-table/stock-table.component';
import { ViewComponent } from './view/view/view.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ForgetPasswordComponent } from './forget-passwword/forget-password/forget-password.component';
// import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'forget',component:ForgetPasswordComponent},
  { path: 'view', component: ViewComponent,children:[
    { path: '', redirectTo:"dashboard" ,pathMatch:'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UserlistComponent },
    { path: 'employees', component: EmployeeComponent },
    { path: 'products', component: ProductlistComponent },
    { path: 'stocks', component: StockTableComponent },
    { path: 'createproduct', component: CreateProductComponent },
  ] },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
