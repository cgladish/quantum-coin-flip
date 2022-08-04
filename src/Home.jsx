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
        <section id="coin-toss">
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
          <Caret />
          <h3 id="what">What's going on?</h3>
        </section>
        <section id="explanation">
          <p>
            <i>You just witnessed a quantum coin toss.</i>
          </p>
          <h3>What does that mean?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a leo ultricies, rhoncus dolor non,
            pharetra leo. Vestibulum aliquet neque quis faucibus facilisis. Morbi pharetra placerat enim a vestibulum.
            Aliquam erat volutpat. Praesent interdum arcu pharetra ornare cursus. Morbi laoreet tortor in pulvinar
            viverra. Aenean vitae auctor lorem, sit amet tincidunt sem. Sed nec nisi ut dolor tincidunt tristique.
            Suspendisse maximus nulla lobortis nisi viverra egestas. Nam ultricies blandit dolor at fringilla. Nulla
            facilisi. Quisque tempor ipsum ut dolor maximus, eu congue elit cursus.
          </p>
          <p>
            Nulla a odio fringilla, elementum ipsum sed, luctus orci. Donec nulla ipsum, tempor id dignissim eu, aliquet
            ut tellus. Morbi nibh sapien, sodales eu justo sit amet, rutrum ullamcorper erat. Proin quis gravida ante.
            Pellentesque at porttitor turpis. Pellentesque vestibulum lacus nec nunc fermentum, a efficitur nibh
            lacinia. Nulla tempus non nunc at ultrices.
          </p>
          <p>
            Pellentesque eget felis est. Mauris condimentum blandit consequat. Cras rutrum nisl dui, vitae iaculis nibh
            congue vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit, nunc id maximus
            tempor, neque nisl vulputate enim, at sollicitudin nulla leo quis risus. In vel commodo ligula, ac dignissim
            diam. In eu velit tortor. Vivamus vehicula sit amet mauris in luctus. Morbi cursus mi lacinia massa euismod
            suscipit. Morbi cursus lorem tincidunt ipsum dignissim, vulputate mollis nibh dignissim. Ut dignissim, risus
            sed tristique fermentum, nunc augue iaculis risus, ac egestas elit est et felis. Nulla finibus non sapien
            nec fermentum.
          </p>
          <p>
            Suspendisse ultrices ante ut dapibus venenatis. Duis a augue vel felis sollicitudin facilisis. Vivamus
            interdum faucibus eros sed semper. Sed iaculis condimentum auctor. Duis porttitor massa id massa porttitor
            condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla
            porttitor volutpat nibh. Nunc auctor arcu non ligula finibus imperdiet.
          </p>
          <p>
            Etiam non felis ac dolor ultricies accumsan id mollis orci. Proin ultricies imperdiet est eu viverra. Etiam
            nisi turpis, posuere lobortis placerat id, eleifend id nunc. Cras eget turpis felis. Quisque mauris orci,
            molestie a nulla vitae, tempor vestibulum quam. Vestibulum sed elit non erat ultrices mattis. Curabitur dui
            nisl, cursus vel tempor eget, posuere at libero. Phasellus pharetra elit in leo interdum tempus. Vivamus vel
            odio non massa cursus scelerisque. Quisque non mi purus. Cras faucibus interdum ipsum, at venenatis felis
            sodales eu. Nulla facilisi. Duis justo tellus, dapibus at dapibus eu, sagittis eu est. Fusce in lectus nec
            lacus posuere lacinia. Vivamus velit lectus, malesuada a aliquet ac, aliquet eu dolor.
          </p>
        </section>
      </>
    );
  }
}

export default Home;
