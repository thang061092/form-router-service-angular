import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title = 'Add user';
  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]]
    });
  }

  submit() {
    const data = this.addUserForm.value;
    console.log(data);
  }

  get id() {
    return this.addUserForm.get('id');
  }

  get name() {
    return this.addUserForm.get('name');
  }

  get email() {
    return this.addUserForm.get('email');
  }

  get address() {
    return this.addUserForm.get('address');
  }

}
