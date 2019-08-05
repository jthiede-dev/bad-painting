import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.scss"]
})
export class GameControlComponent implements OnInit {
  private tickerId: number;
  private currentTick: number = 0;
  @Output() ticker: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  startGame() {
    this.tickerId = window.setInterval(() => {
      this.ticker.emit(this.currentTick);
      this.currentTick++;
    }, 100);
  }

  endGame() {
    window.clearInterval(this.tickerId);
  }

  resetGame() {
    this.reset.emit(true);
    this.endGame();
  }
}
