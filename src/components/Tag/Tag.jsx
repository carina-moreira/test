import "./Tag.scss";

/**
 * Renders a tag component with the given label.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label of the tag.
 * @return {JSX.Element} The rendered tag component.
 */
const Tag = ({ label }) => {
  return (
    <div className="tag">
      <span className="tag__label">{label}</span>
    </div>
  );
};

export default Tag;
