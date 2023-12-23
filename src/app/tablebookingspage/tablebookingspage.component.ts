import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-tablebookingspage',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterOutlet,FormsModule],
  templateUrl: './tablebookingspage.component.html',
  styleUrl: './tablebookingspage.component.css'
})
export class TablebookingspageComponent implements OnInit {
  // myForm:FormGroup = new FormGroup({})
  // constructor(private formBuilder: FormBuilder){
  //   // let it be empty
  // }
  // ngOnInit(): void {
  //   this.myForm=this.formBuilder.group({
  //     firstName:['',Validators.required],
  //     lastName:['',Validators.required],
  //     emailname: ['',[Validators.required,Validators.email]],
  //     tableNumber:['',Validators.required]
  //   })
  // }

  myForm: FormGroup=new FormGroup({});
  ngOnInit(): void {
    this.myForm=new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      emailname: new FormControl('',[Validators.required,Validators.email]),
      tableNumber:new FormControl('',Validators.required)
    })
  }
  messageValue: boolean=false;
   
  submitForm(){
    console.log("formsubmitted");
    this.messageValue=!this.messageValue;
  }
}
