import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { confirmPasswordValidator } from './confim-pass';

@Component({
  selector: 'app-rejester',
  templateUrl: './rejester.component.html',
  styleUrls: ['./rejester.component.css']
})
export class RejesterComponent {
  passwordsMatching = false;
  isConfirmPasswordDirty = false;  
  rejesterform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    username: new FormControl('', [Validators.required, Validators.pattern(/^\S+$/)]),   
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$')
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$')
    ])
  }, { validators: [confirmPasswordValidator] });

  submitrejesterForm(){
    console.log(this.rejesterform);
  }
}