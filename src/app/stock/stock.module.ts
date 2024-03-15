import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockTableComponent } from './stock-table/stock-table.component';
import { StockaddComponent } from './stockadd/stockadd.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StockTableComponent,
    StockaddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    StockTableComponent,
    StockaddComponent
  ]
})
export class StockModule { }
