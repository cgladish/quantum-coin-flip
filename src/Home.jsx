import Nullstack from "nullstack";
import Caret from "./Caret";
import "./Home.css";

class Home extends Nullstack {
  animating = false;
  flipping = false;
  flipResult = null;

  toss = () => {
    if (this.animating) {
      return;
    }
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
      <>
        <div id="header">
          <a href="https://ae.studio/" target="_blank">
            <img src="aestudio-logo-light.svg" width={150} />
          </a>
          <a href="https://github.com/cgladish/quantum-coin-flip" target="_blank">
            <img id="github-logo" src="github.png" />
          </a>
        </div>
        <section id="coin-toss">
          <div id="flipped-text-heads" class={flippedClass}>
            Heads
          </div>
          <div id="flipped-text-tails" class={flippedClass}>
            Tails
          </div>
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
                <div id="qubit-text-root2-0">
                  <p>1</p>
                  <hr />
                  <p>√2</p>
                </div>
                <div id="qubit-text-0">{"|0>"}</div>
                <div id="qubit-text-plus"> + </div>
                <div id="qubit-text-root2-1">
                  <p>1</p>
                  <hr />
                  <p>√2</p>
                </div>
                <div id="qubit-text-1">{"|1>"}</div>
              </div>
            </div>
            <hr />
            <div id="hadamard">H</div>
            <img src="measurement.png" />
          </div>
          <Caret />
          <h3 id="what">What's going on?</h3>
        </section>
        <section id="explanation">
          <p>
            <i>You just witnessed a quantum coin toss.</i>
          </p>
          <h3>What does that mean?</h3>
          <p>
            How do computers pick random numbers? While this task is seemingly simple, there’s a whole world of
            important complexity beneath the surface.
          </p>
          <p>
            Computers are built on ‘bits’, or little electrical switches that can be either on or off. In a sense,
            computers are valuable only because they are NOT random at all. Chip processors have invested billions over
            decades to ensure that their bits are completely deterministic so that our cat videos will load reliably.
          </p>
          <p>
            Take a second to think about the basic logic gates, and how you would build instructions that result in a
            computer returning a number randomly.
          </p>
          <p>
            Surprisingly difficult, right? You can actually find doctorate programs simply on the mathematics of
            randomness!
          </p>
          <p>
            It turns out that this problem is actually important - specifically, the ability for computers to select a
            random number in such a way that no human (or external computer) can predict what number will be selected.
            This functionality is important in a few ways: Lottery drawings must be fair and unpredictable Digital
            gambling games must be truly random (think of a digital card deck shuffle) Perhaps most importantly, random
            number generation is an important piece of cryptography. To keep information secure, numeric components of
            cryptographic methods (like keys) must be generated in a way that hackers cannot predict.
          </p>
          <p>
            Today, computers generate random numbers in 1 of 2 ways: For less important applications, pseudo-random
            numbers do just fine. This means that while the number is not truly random (and may be predictable with
            enough work), it is based on such irrelevant data that it’s arbitrary enough. (pick the value of the current
            millisecond, multiply that by X, subtract Y, divide by Z...) For critical applications (like the ones listed
            above), the computer must actually use information outside of itself to “seed” random information. For
            example, random.org collects atmospheric data to generate random numbers. While this is truly random in any
            practical sense, there are 2 caveats: Even atmospheric noise has patterns, and random.org does process the
            raw data they collect before displaying it From a theoretical perspective, you actually could predict
            atmospheric noise if you could accurately simulate the movement of molecules surrounding the sensor! This is
            infeasible but, again, not provably impossible, and folks have done some wild things to predict
            randomness...
          </p>
          <p>ENTER quantum computing.</p>
          <p>
            Quantum computers are a fundamentally new form of computing information. Quantum computers use qubits
            (quantum bits) that utilize what we know of quantum mechanics to enable previously impossible calculations.{" "}
          </p>
          <p>One such example is randomness - true randomness.</p>
          <h3>What happens when the coin flips?</h3>
          <p>
            When the coin above is flipped, a quantum computer at IBM prepares a superconducting circuit (which is a
            type of qubit).
          </p>
          <p>
            Upon ‘measurement’, the superposition collapses back into either a 1 or a 0 with equal probability, but
            importantly, there is strong theoretical basis for believing that no one will ever be able to predict which
            will occur. It is, in a profound sense, harnessing the inherent entropy of the universe itself.
          </p>
        </section>
      </>
    );
  }
}

export default Home;
