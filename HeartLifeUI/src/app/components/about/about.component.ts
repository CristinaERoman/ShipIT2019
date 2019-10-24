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
}
