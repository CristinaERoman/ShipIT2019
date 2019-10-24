import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
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
