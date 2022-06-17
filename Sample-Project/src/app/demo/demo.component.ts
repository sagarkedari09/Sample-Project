import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Output() loggedIn = new EventEmitter()
  password= "";
  username=""
  
  
  checkPassword(){
    if(this.password === '31-03-2000'){
      this.loggedIn.emit(true);
      console.log("hi")
    }else{
      alert('Invalid Password')
    }  
     
  }


  constructor() { }

  ngOnInit(): void {
  
  }

}
