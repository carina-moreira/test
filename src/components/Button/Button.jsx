import "./Button.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Renders a button component with various customizable styles and behaviors.
 *
 * @param {Object} props - The props object containing the following properties:
 *   @param {string} [size="regular"] - The size of the button: "small" or "regular".
 *   @param {string} [style=""] - The style of the button: "primaryFull", "primaryOutline", "primaryText", "scaleText", or "icon".
 *   @param {string} [addClass=""] - Additional CSS classes to apply to the button.
 *   @param {string} [icon] - The URL of the icon to display on the button.
 *   @param {string} [iconAlt] - The alternative text for the icon.
 *   @param {string} [label] - The label text to display on the button.
 *   @param {boolean} [external=false] - Whether the button should open a new tab.
 *   @param {string} [to] - The URL to navigate to when the button is clicked.
 *   @param {function} [onClick] - The callback function to execute when the button is clicked.
 *   @param {function} [closeMenu] - The callback function to execute when the button is clicked and closes a menu.
 * @return {JSX.Element} The rendered button component.
 */
const Button = ({
  size,
  style,
  addClass,
  icon,
  iconAlt,
  label,
  external,
  to,
  onClick,
  closeMenu,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to && !external) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
    if (closeMenu) {
      closeMenu();
    }
  };

  const sizeStyle = size === "small" ? "small" : "regular";
  const stylePrimary =
    style === "primaryFull"
      ? "primary-full"
      : style === "primaryOutline"
      ? "primary-outline"
      : "";
  const styleText =
    style === "primaryText"
      ? "primary-text"
      : style === "scaleText"
      ? "scale-text"
      : "";
  const styleIcon = style === "icon" ? "icon" : "";

  const aElem = (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${sizeStyle} ${stylePrimary} ${styleText} ${styleIcon} ${addClass}`}
    >
      {icon && <img src={icon} alt={iconAlt} className="link--icon" />}
      {label && <span className="link--label">{label}</span>}
    </a>
  );

  const buttonElem = (
    <button
      onClick={handleClick}
      className={`button ${sizeStyle} ${stylePrimary} ${styleText} ${styleIcon} ${addClass}`}
    >
      {icon && <img src={icon} alt={iconAlt} className="button--icon"></img>}
      {label && <span className="button--label">{label}</span>}
    </button>
  );

  return external && to ? aElem : buttonElem;
};

export default Button;
