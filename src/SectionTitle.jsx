import LinkIcon from "./Icons/Link";

const SectionTitle = ({ id, children }) => (
  <h3 id={id} class="section-title">
    {children}
    <div class="hover-hashtag" onclick={() => navigator.clipboard.writeText(`https://www.quantumcoinflip.com/#${id}`)}>
      <LinkIcon />
    </div>
  </h3>
);
export default SectionTitle;
