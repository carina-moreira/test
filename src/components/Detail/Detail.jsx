import Tag from "./../Tag/Tag.jsx";
import "./Detail.scss";

/**
 * Renders a detail component with a tag, text, and media.
 *
 * @param {Object} props - The props object.
 * @param {string} props.tagLabel - The label of the tag.
 * @param {string} props.text - The text to be displayed.
 * @param {ReactNode} props.media - The media to be displayed.
 * @return {ReactElement} The rendered detail component.
 */
const Detail = ({ tagLabel, text, media }) => {
  return (
    <div className="detail">
      <div className="detail__left">
        <Tag label={tagLabel}></Tag>
        <p className="detail__left--txt">{text}</p>
      </div>
      <div className="detail__right">{media}</div>
    </div>
  );
};

export default Detail;
