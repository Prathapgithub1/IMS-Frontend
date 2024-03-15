import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserlistComponent,
    UserdetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserdetailComponent,
    UserlistComponent
  ]
})
export class UserMasterModule { }
