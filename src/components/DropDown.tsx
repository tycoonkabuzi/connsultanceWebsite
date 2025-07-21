import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";

const DropDown = ({ service }) => {
  const { language, translation } = useLanguage();
  return (
    <div className={`main_drop_down ${service ? "visible" : ""}`}>
      <ul>
        <li>
          <Link className="link" to={"/services"}>
            {translation[language].ourServices}
          </Link>
        </li>
        <li>
          <Link className="link" to={"/sector"}>
            {translation[language].serviceSector}
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default DropDown;
