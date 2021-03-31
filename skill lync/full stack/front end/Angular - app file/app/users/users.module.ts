import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { UsersRoutingModule } from './users-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddComponent, ListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class UsersModule { }
