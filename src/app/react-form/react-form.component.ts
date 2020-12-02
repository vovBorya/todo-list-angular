import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Role {
  label: string;
}

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {
  lastName = '';
  firstName = '';
  email = '';
  regForm: FormGroup;
  roles: Role[] = [{label: 'admin'}, {label: 'user'}];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log('onSubmit');
    if (this.regForm.invalid) {
      return;
    }

    alert('Submit');
  }

}
