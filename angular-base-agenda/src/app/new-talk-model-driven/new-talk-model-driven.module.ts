import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTalkModelDrivenComponent } from './new-talk-model-driven.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NewTalkModelDrivenComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NewTalkModelDrivenComponent
  ]
})
export class NewTalkModelDrivenModule { }
