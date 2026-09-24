import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact-me',
  styleUrl: './contact-me.scss',
  templateUrl: './contact-me.html',
})
export class ContactMe {
  fb = inject(FormBuilder)
  userForm = this.fb.group({
      name:['',Validators.required, Validators.minLength(5)],
      email:['',Validators.required, Validators.email] ,
      message:['',Validators.required, Validators.email, Validators.maxLength(200)],
      policycheck:['',Validators.required],
  })
  // userForm = new FormGroup({                                           //using form group
  //   name: new FormControl('', {
  //     validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
  //   }),
  //   email: new FormControl('', { validators: [Validators.required, Validators.email] }),
  //   message: new FormControl('', {
  //     validators: [Validators.required, Validators.email, Validators.maxLength(100)],
  //   }),
  //   policycheck: new FormControl('', { validators: [Validators.required] }),
  // });

  formSubmit()
  {
    console.log(this.userForm.value);
  }

  formReset()
  {
    this.userForm.reset();
  }

  get email(){
    return this.userForm.get("email")
  }
}
