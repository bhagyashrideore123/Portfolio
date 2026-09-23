import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact-me',
  styleUrl: './contact-me.scss',
  templateUrl: './contact-me.html',
})
export class ContactMe {
  userForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
    }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.email, Validators.maxLength(100)],
    }),
    policycheck: new FormControl('', { validators: [Validators.required] }),
  });
}
