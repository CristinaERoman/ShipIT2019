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
}
