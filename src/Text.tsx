const Text = () => (
  <>
    <p>
      <i>You just witnessed a quantum coin toss.</i>
    </p>

    <h3>What does that mean?</h3>

    <p>
      How do computers pick random numbers? While this task is seemingly simple, there&rsquo;s a whole world of
      important complexity beneath the surface.&nbsp;
    </p>

    <p>
      Computers are built on &lsquo;bits&rsquo;, or little electrical switches that can be either on or off. In a sense,
      computers are valuable only because they are NOT random at all. Chip processors have invested billions over
      decades to ensure that their bits are completely deterministic so that our cat videos will load reliably.
    </p>

    <p>
      Take a second to think about the&nbsp;
      <a href="https://simple.wikipedia.org/wiki/Logic_gate">basic logic gates,</a> and how you would build instructions
      that result in a computer returning a number randomly.
    </p>

    <p>
      Surprisingly difficult, right? You can actually find doctorate programs simply on the&nbsp;
      <a href="https://www.ox.ac.uk/admissions/graduate/courses/mathematics-random-systems">
        mathematics of randomness
      </a>
      !
    </p>

    <p>
      It turns out that this problem is actually important - specifically, the ability for computers to select a random
      number in such a way that no human (or external computer) can predict what number will be selected. This
      functionality is important in a few ways:
    </p>
    <ul>
      <li>
        <p>Lottery drawings must be fair and unpredictable</p>
      </li>
      <li>
        <p>Digital gambling games must be truly random (think of a digital card deck shuffle)</p>
      </li>
      <li>
        <p>
          Perhaps most importantly, random number generation is an important piece of&nbsp;cryptography. To keep
          information secure, numeric components of cryptographic methods (like keys) must be generated in a way that
          hackers cannot predict.
        </p>
      </li>
    </ul>

    <p>Today, computers generate random numbers in 1 of 2 ways:</p>
    <ul>
      <li>
        <p>
          For less important applications, pseudo-random numbers do just fine. This means that while the number is not
          truly random (and may be predictable with enough work), it is based on such irrelevant data that it&rsquo;s
          arbitrary enough. (pick the value of the current millisecond, multiply that by X, subtract Y, divide by Z...)
        </p>
      </li>
      <li>
        <p>
          For critical applications (like the ones listed above), the computer must actually use information outside of
          itself to &ldquo;seed&rdquo; random information. For example, random.org collects atmospheric data to generate
          random numbers. While this is truly random in any practical sense, there are 2 caveats:
        </p>
        <ul>
          <li>
            <p>
              Even atmospheric noise has patterns, and random.org&nbsp;
              <a href="https://www.random.org/audio-noise/description/">does process</a> the raw data they collect
              before displaying it
            </p>
          </li>
          <li>
            <p>
              From a theoretical perspective, you actually could predict atmospheric noise if you could accurately
              simulate the movement of molecules surrounding the sensor! This is infeasible but, again, not provably
              impossible, and folks have done some&nbsp;
              <a href="https://thehustle.co/the-man-who-won-the-lottery-14-times/">wild things</a> to predict
              randomness...
            </p>
          </li>
        </ul>
      </li>
    </ul>

    <p>ENTER quantum computing.</p>

    <p>
      Quantum computers are a fundamentally new form of computing information. Quantum computers use qubits (quantum
      bits) that utilize what we know of quantum mechanics to enable previously impossible calculations.&nbsp;
    </p>

    <p>One such example is randomness -&nbsp;true&nbsp;randomness.</p>

    <h3>What happens when the coin flips?</h3>

    <p>
      When the coin above is flipped, a quantum computer at IBM prepares a superconducting qubit- a superconducting
      material (typically aluminum) with zero resistance since it has been cooled to near 0&deg;K.&nbsp;
    </p>

    <p>
      Upon &lsquo;measurement&rsquo;, the superposition collapses back into either a 1 or a 0 with equal probability,
      but importantly, there is strong theoretical basis for believing that no one will ever be able to predict which
      will occur. It is, in a profound sense,&nbsp;harnessing the inherent entropy of the universe itself.&nbsp;
    </p>
  </>
);

export default Text;
