import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";

const DropDownLanguage = ({
  triggerChangeLanguage,
  changeLanguageCurrentStatus,
}) => {
  const { language, changeLanguage } = useLanguage();
  return (
    <div
      className={`main_drop_down ${
        triggerChangeLanguage ? "visible-language" : ""
      }`}
    >
      <ul>
        <li>
          <Link
            className="link"
            onClick={() => {
              changeLanguageCurrentStatus("En");
              changeLanguage("en");
            }}
          >
            En
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => {
              changeLanguageCurrentStatus("Fr");
              changeLanguage("fr");
            }}
          >
            Fr
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default DropDownLanguage;
