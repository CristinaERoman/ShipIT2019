import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SagemMakerService {
  constructor(private httpClient: HttpClient) {}

  getResult(data: string): string {
    const request = new XMLHttpRequest();
    request.open("GET", `http://localhost:4300/sagemakerCall/${data}`, false);
    let resp: string = "";
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        //const data = JSON.parse(this.response) as Response;

        resp = this.response;
        //callback && callback(data);
      } else {
        // We reached our target server, but it returned an error
      }
    };
    request.send();
    return resp;
  }
}
