import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SagemMakerService } from "./services/sagem-maker.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isLogInModalActive: boolean = false;
  isRegisterModalActive: boolean = false;

  constructor(private sageMakerService: SagemMakerService) {}

  ngOnInit() {}

  toggleLogInModal() {
    this.isLogInModalActive = !this.isLogInModalActive;
  }

  async askAWSModel() {
    //let returnval : any = '';
    //let resp = await this.sageMakerService.getResult1();
    let resp = this.sageMakerService.getResult("48-1-0-124-274-0-0_5-166-0-0-1-0-3");
    console.log(resp);
    // const request = new HttpClient();
    // request.open('GET',

    //   'localhost:4300/sagemakerCall/'+'48,1,0,124,274,0,0,166,0,0.5,1,0,3',
    //   true);

    //   request.onload = function () {
    //     if (this.status >= 200 && this.status < 400) {
    //         // Success!
    //         const data = JSON.parse(this.response) as Response;
    //         returnval = data;
    //     } else {
    //         // We reached our target server, but it returned an error
    //     }
    // };

    // request.send();
  }

  toggleRegisterModal() {
    this.isRegisterModalActive = !this.isRegisterModalActive;
    this.askAWSModel();
  }

  title = "HeartLifeUI";
}
