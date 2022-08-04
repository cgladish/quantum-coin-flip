import Nullstack from "nullstack";
import "./Home.css";

class Home extends Nullstack {
  animating = false;
  flipping = false;
  flipResult = null;

  toss = () => {
    this.animating = true;
    this.flipResult = null;
    setTimeout(() => {
      this.flipping = true;
    }, 3000);
    setTimeout(() => {
      this.animating = false;
      this.flipping = false;
      if (Math.random() < 0.5) {
        this.flipResult = "heads";
      } else {
        this.flipResult = "tails";
      }
    }, 6000);
  };

  render() {
    const animatingClass = this.animating ? "animating" : "";
    const flippingClass = this.flipping ? "flipping" : "";
    const flippedClass =
      !this.flipping && this.flipResult ? (this.flipResult === "heads" ? "flipped-heads" : "flipped-tails") : "";
    return (
      <section>
        <div id="coin" class={`${animatingClass} ${flippingClass} ${flippedClass}`} onclick={this.toss}>
          <div class="heads">
            <div class="internal">{"|1>"}</div>
          </div>
          <div class="tails">
            <div class="internal">{"|0>"}</div>
          </div>
        </div>
        <div id="diagram">
          <div id="qubit" class={`${animatingClass} ${flippingClass} ${flippedClass}`}>
            <div id="qubit-dot" />
            <div id="qubit-text">
              <div id="qubit-text-root2-0">√2</div>
              <div id="qubit-text-0">{"|0>"}</div>
              <div id="qubit-text-root2-1"> + √2</div>
              <div id="qubit-text-1">{"|1>"}</div>
            </div>
          </div>
          <hr />
          <div id="hadamard">H</div>
          <img src="measurement.png" />
        </div>
      </section>
    );
  }
}

export default Home;
