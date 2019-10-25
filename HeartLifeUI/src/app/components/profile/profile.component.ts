import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import { SagemMakerService } from "../../services/sagem-maker.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  @ViewChild("myage", { static: true }) myage: ElementRef;
  @ViewChild("mysex", { static: true }) mysex: ElementRef;
  @ViewChild("mychest", { static: true }) mychest: ElementRef;
  @ViewChild("mybloodPressure", { static: true }) mybloodPressure: ElementRef;
  @ViewChild("mychole", { static: true }) mychole: ElementRef;
  @ViewChild("myblood", { static: true }) myblood: ElementRef;
  constructor(private sageMakerService: SagemMakerService) {}

  ngOnInit() {}
  public result: string = "48-1-0-124-274-0-0-166-0-0-1-0-3";

  getDisease() {
    this.resetValues();
    document.getElementById("userProfile").style.display = "none";
    document.getElementById("diagnValue").style.display = "block";
    if (this.myage.nativeElement.value !== "") {
      this.result = this.myage.nativeElement.value + "-1-0-124-274-0-0-166-0-0-1-0-3";
    }

    if (this.mychole.nativeElement.value !== "") {
      this.result = "48-1-0-124-" + this.mychole.nativeElement.value + "-0-0-166-0-0-1-0-3";
    }

    let resp = this.sageMakerService.getResult(this.result);
    if (resp === "False") {
      document.getElementById("diagnValue").textContent = "You are not suffering from a hearth disease!";
      document.getElementById("diagnValue").className = "textDiaAfterH";
    } else {
      document.getElementById("diagnValue").textContent =
        "Your might be suffering from a heart disease! Please consult a doctor";
      document.getElementById("diagnValue").className = "textDiaAfterSick";
    }
  }

  //OnInput(event: any) {
  //alert(event.target.value);
  //}

  OnInput() {
    // fetch value
    let inputValue = this.myage.nativeElement.value;

    // set input value
    //this.myage.nativeElement.value = "This is new value";
  }

  getProfile() {
    document.getElementById("diagnValue").style.display = "none";
    document.getElementById("userProfile").style.display = "inline";
  }

  impHealthy() {
    document.getElementById("userProfile").style.display = "inline";
    document.getElementById("diagnValue").style.display = "none";
    this.result = "45-1-3-110-264-0-1-132-0-1_2-1-0-3";
    this.myage.nativeElement.value = "45";
    this.mysex.nativeElement.value = "M";
    this.mychest.nativeElement.value = "3";
    this.mybloodPressure.nativeElement.value = "110";
    this.mychole.nativeElement.value = "264";
    this.myblood.nativeElement.value = "0";
    document.getElementById("age").setAttribute("value", "45");
    document.getElementById("sex").setAttribute("value", "M");
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
    document.getElementById("userProfile").style.display = "inline";
    document.getElementById("diagnValue").style.display = "none";
    this.result = "62-0-0-140-394-0-0-157-0-1_2-1-0-2";
    this.myage.nativeElement.value = "62";
    this.mysex.nativeElement.value = "F";
    this.mychest.nativeElement.value = "0";
    this.mybloodPressure.nativeElement.value = "140";
    this.mychole.nativeElement.value = "394";
    this.myblood.nativeElement.value = "0";
    document.getElementById("age").setAttribute("value", "62");
    document.getElementById("sex").setAttribute("value", "F");
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
    this.myage.nativeElement.value = "";
    this.mysex.nativeElement.value = "";
    this.mychest.nativeElement.value = "";
    this.mybloodPressure.nativeElement.value = "";
    this.mychole.nativeElement.value = "";
    this.myblood.nativeElement.value = "";
    document.getElementById("age").setAttribute("value", "");
    document.getElementById("sex").setAttribute("value", "");
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
