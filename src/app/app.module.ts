import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ChartModule } from 'primeng/chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ForgetPasswwordModule } from './forget-passwword/forget-passwword.module';
import { UserMasterModule } from './user-master/user-master.module';
import { CreateModule } from './create/create.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { SignupModule } from './signup/signup.module';
import { StockModule } from './stock/stock.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ViewModule } from './view/view.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './product/create-product/create-product.component';
CreateProductComponent



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ForgetPasswwordModule,
    UserMasterModule,
    CreateModule,
    EmployeeModule,
    ProductModule,
    SignupModule,
    StockModule,
    DashboardModule,
    ViewModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
