import { Component, OnInit } from "@angular/core";
import { SagemMakerService } from "../../services/sagem-maker.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  constructor(private sageMakerService: SagemMakerService) {}

  ngOnInit() {}
  public result: string = "48-1-0-124-274-0-0-166-0-0-1-0-3";
  getDisease() {
    document.getElementById("userProfile").style.display = "none";
    document.getElementById("diagnValue").style.display = "block";
    let resp = this.sageMakerService.getResult(this.result);
    if (resp === "False") {
      document.getElementById("diagnValue").textContent = "You are not suffering from a hearth disease!";
      document.getElementById("diagnValue").className = "textDiaAfter";
    } else {
      document.getElementById("diagnValue").textContent =
        "Your might be suffering from a heart disease! Please consult a doctor";
      document.getElementById("diagnValue").className = "textDiaAfter";
    }
  }

  getProfile() {
    document.getElementById("diagnValue").style.display = "none";
    document.getElementById("userProfile").style.display = "inline";
  }

  impHealthy() {
    this.result = "45-1-3-110-264-0-1-132-0-1_2-1-0-3";
    document.getElementById("chest").setAttribute("value", "3");
    document.getElementById("bloodPressure").setAttribute("value", "110");
    document.getElementById("chole").setAttribute("value", "264");
    document.getElementById("blood").setAttribute("value", "0");
    document.getElementById("ekgres").setAttribute("value", "1");
    document.getElementById("maxpulse").setAttribute("value", "132");
    document.getElementById("angina").setAttribute("value", "0");
    document.getElementById("stSeg").setAttribute("value", "1,2");
    document.getElementById("depres").setAttribute("value", "1");
  }

  impSick() {
    this.result = "62-0-0-140-394-0-0-157-0-1_2-1-0-2";
    document.getElementById("chest").setAttribute("value", "0");
    document.getElementById("bloodPressure").setAttribute("value", "140");
    document.getElementById("chole").setAttribute("value", "394");
    document.getElementById("blood").setAttribute("value", "0");
    document.getElementById("ekgres").setAttribute("value", "0");
    document.getElementById("maxpulse").setAttribute("value", "157");
    document.getElementById("angina").setAttribute("value", "0");
    document.getElementById("stSeg").setAttribute("value", "1,2");
    document.getElementById("depres").setAttribute("value", "1");
  }

  resetValues() {
    document.getElementById("chest").setAttribute("value", "");
    document.getElementById("bloodPressure").setAttribute("value", "");
    document.getElementById("chole").setAttribute("value", "");
    document.getElementById("blood").setAttribute("value", "");
    document.getElementById("ekgres").setAttribute("value", "");
    document.getElementById("maxpulse").setAttribute("value", "");
    document.getElementById("angina").setAttribute("value", "");
    document.getElementById("stSeg").setAttribute("value", "");
    document.getElementById("depres").setAttribute("value", "");
  }
}
