import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// this validator is for name:checks if name is empty
export function forbiddenNameValidator(name: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {    
    return control.value == name ? {forbiddenName: {value: control.value}} : null;
  };
}



@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact-me',
  styleUrl: './contact-me.scss',
  templateUrl: './contact-me.html',
})
export class ContactMe {

  router = inject(Router);
  fb = inject(FormBuilder)
  sentForm: boolean = false;

  userForm = this.fb.group({
      name:['',[Validators.required,forbiddenNameValidator(' ')]],
      email:['',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]] ,
      message:['',[Validators.required, Validators.email, Validators.maxLength(200)]],
      policycheck:['',Validators.required],
  })

  ngOninit()
  {
    
  }

  formSubmit()
  {
    if(!this.userForm.invalid)
    {
      console.log(this.userForm.value);
      this.router.navigate(['']);
    }
  
  }

  formReset()
  {
    this.userForm.reset();
  }

  get email(){
    return this.userForm.get("email")
  }
}
