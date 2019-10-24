import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  isLogInModalActive: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleLogInModal() {
    this.isLogInModalActive = !this.isLogInModalActive;
  }
  title = "HeartLifeUI";

sendMail(){
  var mail = 'mailto:bogdan.ariton@cerner.com?subject=OhhhhMyHeart'+
               '&body=Please Bogdan fix my heart application!';
  window.open(mail);
}
}
