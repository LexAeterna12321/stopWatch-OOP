class StopWatch {
  constructor() {
    this.startStopBtn = document.querySelector(".startStop");
    this.resetBtn = document.querySelector(".reset");
    this.timeValue = document.querySelector(".time");
    this.time = 0;
    this.running = false;
    this.startStopBtn.addEventListener("click", () => this.startStop());
    this.resetBtn.addEventListener("click", () => this.reset());
  }

  startStop() {
    if (!this.running) {
      this.startStopBtn.textContent = "STOP";
      this.interval = setInterval(() => {
        this.time += 0.01;
        this.timeValue.textContent = this.time.toFixed(2);
      }, 10);
      this.running = !this.running;
    } else if (this.running) {
      this.startStopBtn.textContent = "START";
      this.running = !this.running;
      clearInterval(this.interval);
    }
  }
  reset() {
    this.time = 0;
    this.timeValue.textContent = `0.00`;
    this.running = false;
    clearInterval(this.interval);
    // return this.time;
  }
}
(function init() {
  const watch1 = new StopWatch();
})();
