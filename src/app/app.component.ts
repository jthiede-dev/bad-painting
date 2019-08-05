import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private ticks: number[] = [];

  onTick(tick) {
    this.ticks.push(tick);
  }

  removeTick(number) {
    this.ticks.splice(this.ticks.indexOf(number), 1);
  }

  reset() {
    this.ticks = [];
  }
}
