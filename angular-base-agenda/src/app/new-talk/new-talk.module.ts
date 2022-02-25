import { RouterModule, Routes } from '@angular/router';
import { NewTalkModelDrivenModule } from './../new-talk-model-driven/new-talk-model-driven.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTalkComponent } from './new-talk.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routers = [
  {path: '', component: NewTalkComponent}
];


@NgModule({
  declarations: [NewTalkComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewTalkModelDrivenModule,
    RouterModule.forChild(routers)
  ],
  exports: [
    NewTalkComponent
  ]
})
export class NewTalkModule { }
