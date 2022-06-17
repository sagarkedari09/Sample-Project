import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

logged = false;
aboutMe = false;
checkIfLoggedIn(){
  this.logged = true;
  console.log(this.logged)
}
updatePage(){
  this.aboutMe = true;
}
 ngOnInit(): void {
     
 }
}
