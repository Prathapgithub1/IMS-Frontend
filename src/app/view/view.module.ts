import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { RxseedService } from '../rxseed.service';


@NgModule({
    declarations: [
        ViewComponent,
    ],
    exports: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        DashboardModule,
        RouterModule
    ],
    providers:[
        RxseedService
    ]
})
export class ViewModule { }
