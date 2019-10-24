import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isLogInModalActive: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleLogInModal() {
    this.isLogInModalActive = !this.isLogInModalActive;
  }
  title = "HeartLifeUI";
}
