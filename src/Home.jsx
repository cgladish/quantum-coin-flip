import Nullstack from "nullstack";
import Logo from "nullstack/logo";
import "./Home.css";

class Home extends Nullstack {
  flipping = false;
  flipResult = null;

  toss = () => {
    this.flipping = true;
    setTimeout(() => {
      this.flipping = false;
    }, 3000);
    if (Math.random() < 0.5) {
      this.flipResult = "heads";
    } else {
      this.flipResult = "tails";
    }
  };

  render() {
    const flippingClass = this.flipping ? "flipping" : "";
    const flippedClass =
      !this.flipping && this.flipResult ? (this.flipResult === "heads" ? "flipped-heads" : "flipped-tails") : "";
    return (
      <section>
        <div>
          <div id="coin" class={`${flippingClass} ${flippedClass}`} onclick={this.toss}>
            <div class="heads">
              <div class="internal">{"|1>"}</div>
            </div>
            <div class="tails">
              <div class="internal">{"|0>"}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
