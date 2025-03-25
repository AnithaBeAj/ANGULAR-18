import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import { CommonService } from '../../services/common.service';
import { HttpClientModule, } from '@angular/common/http'; 
import { error } from 'node:console';

@Component({
  selector: 'app-auth',
  imports: [FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [CommonService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(private fb:FormBuilder, private commonService:CommonService){}
  myForm!: FormGroup;
  userName:string = '';
  showUserName:boolean = false;

  ngOnInit(){
    this.commonService.getEmployeeData().then(data=>{
      console.log("111111",data);
      
    }).catch(error=>{

    })
  this.myForm = this.fb.group({
    'name' : ['',Validators.required],
    'email': ['',Validators.required]
  });
}
submit(){
  alert();
}
submitValue(){
  this.userName;
  this.showUserName = true;
  const firstName = document.getElementById('userName') as HTMLInputElement;
  if(firstName){
    firstName.value = '';
  }
}
}
