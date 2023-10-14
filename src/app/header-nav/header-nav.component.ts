import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-header-nav",
  templateUrl: "./header-nav.component.html",
  styleUrls: ["./header-nav.component.css"],
})
export class HeaderNavComponent {
  login?: Boolean;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  menu: any;

  newLogin() {
    this.login = true;
  }
}
