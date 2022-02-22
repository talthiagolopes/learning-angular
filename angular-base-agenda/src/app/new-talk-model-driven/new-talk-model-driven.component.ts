import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-talk-model-driven',
  templateUrl: './new-talk-model-driven.component.html',
  styleUrls: ['./new-talk-model-driven.component.css']
})
export class NewTalkModelDrivenComponent implements OnInit {

  userForm: any;
  descriptionControl: FormControl;

  constructor(private formBuilder: FormBuilder) {

    this.descriptionControl = new FormControl('description', Validators.compose([Validators.required,Validators.minLength(4)]));

    this.userForm = this.formBuilder.group({
      title: '',
      description: this.descriptionControl
    });

    this.descriptionControl.valueChanges.subscribe(x => console.log(x))

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm);
    console.log(this.userForm.controls.title.touched);
  }

}
