const Text = () => (
  <>
    <p>
      <i>You just witnessed a quantum coin toss.</i>
    </p>

    <h3>What does that mean?</h3>

    <p>
      How do computers pick (pseudo)random numbers? While this task is seemingly simple, there&rsquo;s a whole world of
      complexity beneath the surface. This complex stuff matters.
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
      Surprisingly difficult, right? You can actually find doctorate programs<sup>1</sup>&nbsp;focused solely on the&nbsp;
      <a href="https://www.ox.ac.uk/admissions/graduate/courses/mathematics-random-systems">
        mathematics of randomness
      </a>
      !
    </p>

    <p>
      It turns out that this problem is actually important - specifically, the ability for computers to select a random
      number in such a way that no human (or external computer) can predict what number will be selected. This
      functionality is important - for example:
    </p>
    <ul>
      <li>
        <p>
          Lottery drawings must be fair and unpredictable - whether the drawing is for school admittance, draft picks,
          or cash.
        </p>
      </li>
      <li>
        <p>Digital gambling games must be truly random (think of a digital card deck shuffle).</p>
      </li>
      <li>
        <p>
          Perhaps most importantly, random number generation is a crucial component of&nbsp;cryptography. To keep
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
          truly random (and may be predictable with enough effort), it is generated from such irrelevant data that, for
          its purpose, it&rsquo;s sufficiently arbitrary. (pick the value of the current millisecond, multiply that by
          X, subtract Y, divide by Z...)
        </p>
      </li>
      <li>
        <p>
          For critical applications (like the ones listed above), the computer must actually use information outside of
          itself to &ldquo;seed&rdquo; random information. For example, random.org collects atmospheric data to generate
          random numbers. While this will feel random in any practical sense (no one can predict the next value,
          it&rsquo;ll contain the properties of the distributions it aims to simulate), there are 2 caveats:
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
              <a href="https://thehustle.co/the-man-who-won-the-lottery-14-times/">wild things</a> to predict randomness
              when the incentives are large enough...
            </p>
          </li>
        </ul>
      </li>
    </ul>

    <p>ENTER quantum computing.</p>

    <p>
      Quantum computers are a fundamentally new form of computing information. Quantum computers use
      &ldquo;qubits&rdquo; (quantum bits) that utilize what we know of quantum mechanics to enable previously impossible
      calculations.&nbsp;
    </p>

    <p>One such example is randomness -&nbsp;true&nbsp;randomness.</p>

    <h3>What happens when the coin flips?</h3>

    <p>
      To determine the coin flip results<sup>2</sup>, a quantum computer at IBM prepares a qubit into an evenly balanced
      superposition.
    </p>

    <p>
      IBM&rsquo;s quantum computers use&nbsp;<a href="https://en.wikipedia.org/wiki/Transmon">transmon</a> qubits, which
      are a type of superconducting charge qubit. Superconducting qubits are assembled from material with zero charge
      resistance when cooled to below 1&deg;K, which construct an isolated &ldquo;island&rdquo; that can hold a pair of
      electrons. If a pair is present on the island, that is a logical &lsquo;1&rsquo; for the qubit; if no pair is
      present, that is a logical &lsquo;0&rsquo;. Thanks to the strangeness of the quantum world, this technology can
      create a superposition of both states, such that an electron pair&nbsp;both is and is not&nbsp;on the island.
    </p>

    <p>
      Upon &lsquo;measurement&rsquo;, the superposition collapses back into either a 1 or a 0 (with equal probability),
      but importantly, there is strong theoretical basis for believing that no one will ever be able to predict which
      will occur. It is, in a profound sense,&nbsp;harnessing the inherent randomness of the universe itself.<sup>3</sup>
    </p>

    <h3>What's going on with the diagram below the coin?</h3>

    <p>
      This is a&nbsp;<a href="https://en.wikipedia.org/wiki/Quantum_circuit">quantum circuit diagram</a>, which is a way
      to represent a series of quantum operations that will be applied to one or more qubits (in our case, just one
      qubit). These are not actually physical cables through which anything is moving, but rather, an analogue to
      physical circuits to make it easier to conceptualize the changing qubit state. You should instead think of the
      movement of a qubit through the circuit as the passage of time. At the end, we measure the qubit&rsquo;s state,
      which collapses the state if it is in a superposition.
    </p>

    <h3>So what's with the |0> and |1> thing?</h3>

    <p>
      These are the quantum basis states for a one-particle system and can be represented in what&rsquo;s called&nbsp;
      <a href="https://en.wikipedia.org/wiki/Bra%E2%80%93ket_notation">bra-ket or Dirac notation</a> as |0&gt; and
      |1&gt;. Single qubit states are represented as 2D vectors (instead of integers, as in classical computing).
      Mathematically, bra-ket notation is simply a shorthand way to represent a vector state of a qubit. |0&gt;
      represents the state [1, 0] and |1&gt; represents the state [0, 1]. In the context of a quantum coin flip, you can
      think of |0&gt; as the &ldquo;Tails&rdquo; state and |1&gt; as the &ldquo;Heads&rdquo; state.&nbsp;
    </p>

    <h3>And what about the <img src="root2.png" width="30px" />?</h3>

    <p>
      This represents the&nbsp;amplitude&nbsp;that each basis state has in the state representation of a qubit.&nbsp;The
      amplitudes encode information about the probability that the qubit will be in either basis
      state&nbsp;after&nbsp;measurement.&nbsp;So when you see the qubit state shown as&nbsp;<img src="root2.png" width="18px" /> |0&gt;
      +&nbsp;<img src="root2.png" width="18px" /> |1&gt;, this means that for this qubit, the amplitude of both the |0&gt; and the |1&gt; basis
      states are&nbsp;<img src="root2.png" width="18px" />. We call this a&nbsp;superposition&nbsp;of the |0&gt; and |1&gt; states.
    </p>

    <p>
      For any generic qubit, a superposition can be represented by a combination of the basis states and their
      amplitudes as&nbsp;&alpha;|0&gt; + &beta;|1&gt;&nbsp;(which is really just a different way to represent the vector
      [&alpha;, &beta;]), where &alpha; is the amplitude for |0&gt; and &beta; is the amplitude for |1&gt;. Upon
      measurement, the state collapses from a superposition into either the |0&gt; or |1&gt; state.
    </p>

    <p>
      The length of a qubit&rsquo;s state vector must equal 1, representing a total probability of 100%, so therefore
      &alpha;<sup>2</sup>&nbsp;+ &beta;<sup>2</sup>&nbsp;must be equal to 1. We can see this holds true for the state&nbsp;<img src="root2.png" width="18px" /> |0&gt;
      +&nbsp;<img src="root2.png" width="18px" /> |1&gt;, where &alpha; equals&nbsp;<img src="root2.png" width="18px" /> and &beta; equals&nbsp;<img src="root2.png" width="18px" />, so
      &alpha;<sup>2</sup>&nbsp;+ &beta;<sup>2</sup>&nbsp;= &frac12; + &frac12;&nbsp;= 1. This means that&nbsp;<img src="root2.png" width="18px" /> |0&gt;
      +&nbsp;<img src="root2.png" width="18px" /> |1&gt; represents an equal probability that our qubit is in the |0&gt; or the |1&gt; state when
      measured, which is a good quantum approximation for a 50/50 coin flip!
    </p>

    <h3>And the H?</h3>

    <p>
      This is a Hadamard gate, which is a specific type of&nbsp;
      <a href="https://en.wikipedia.org/wiki/Quantum_logic_gate">quantum logic gate</a>. We&rsquo;ll avoid going too far
      into the math here (if we haven&rsquo;t already ☻), but its impact on a qubit in the |0&gt; state is to create
      the superposition&nbsp;<img src="root2.png" width="18px" /> |0&gt; +&nbsp;<img src="root2.png" width="18px" /> |1&gt;, or an equal chance of heads &amp; tails, which
      is exactly what we need.
    </p>

    <p>
      The problem of pseudo-random number generation remains unsolved for
      most applications, and yet, by clicking this coin, you may have generated more truly random numbers than the most
      advanced cryptographer only a few years ago.
    </p>

    <br />
    <hr />

    <br />
    <h3>Learn More</h3>

    <p>
      Is anyone actually using Quantum Random Number Generators (QRNGs) today? Yes! For example, the latest&nbsp;
      <a href="https://www.idquantique.com/sk-telecom-and-samsung-unveil-the-galaxy-quantum-3-world-most-secure-5g-smartphone-featuring-idq-qrng-chip/">
        Galaxy Smart phones
      </a>{" "}
      now use a QRNG to ensure safer authentication and data encryption.&nbsp;
    </p>

    <p>If you want to dive deeper into the mathematics of quantum computing, see these resources:</p>
    <ul>
      <li>
        <p>
          <a href="https://quantum.country/qcvc">Quantum Computing for the Very Curious</a>
        </p>
      </li>
      <li>
        <p>
          <a href="https://quantum-computing.ibm.com/">IBM Quantum Experience</a> &amp;&nbsp;
          <a href="https://qiskit.org/textbook/preface.html">IBM Qiskit Textbook</a>
        </p>
      </li>
      <li>
        <p>
          <a href="https://www.youtube.com/watch?v=MzRCDLre1b4">Some light quantum mechanics</a> by 3Blue1Brown
        </p>
      </li>
    </ul>

    <div class="footnotes">
    <p><sup>1</sup>&nbsp;I wonder how they handle lotteries for enrollment times?</p>
    <p>
      <sup>2</sup>&nbsp;Yes, I realize that IBM&rsquo;s current machines have queue times, your results might have been
      pre-calculated on a quantum machine and cached, and thus, still not perfectly random/unhackable. I&rsquo;m making
      a point and a fun toy, not defending my dissertation here.
    </p>
    <p>
      <sup>3</sup>&nbsp;Much to the chagrin of&nbsp;<a href="https://en.wikipedia.org/wiki/Many-worlds_interpretation">Everett</a>{" "}
      and&nbsp;<a href="https://www.amazon.com/Fabric-Reality-Parallel-Universes-Implications/dp/014027541X">Deutsch</a>
      , we will assume there&rsquo;s only one universe when the coin flips.&nbsp;
    </p>
    </div>
  </>
);

export default Text;
