import imageStep from "../assets/pexels-cottonbro-5378700.jpg";
const Steps = () => {
  return (
    <div className="main-steps">
      <div className="main-left">
        <div className="container-image-steps">
          <img src={imageStep} />
        </div>
      </div>
      <div className="main-right">
        <h1>
          Step 1 – GlobalAssess™ – Assessment of International Potential and
          Readiness
        </h1>
        <ul>
          <li>
            Assess the international readiness of client’s internal systems,
            staff, training, support, Intranet and marketing programs
          </li>

          <li>
            Develop a 10-year international operations and development projected
            budge
          </li>
          <li>
            Identify and prioritize the best countries for a specific client
            through testing with the EGS GlobalTeam™ on the ground and based on
            research – GlobalSurvey™
          </li>
          <li>
            Create an international slide presentation from client internal
            slides
          </li>
          <li>
            Develop a profile of the optimal Licensee and license terms –
            GlobalProfile™
          </li>
        </ul>
      </div>
      <div className="bottom-text-steps">
        <div className="box-text-steps">
          <h1>Step 2 – Create International Business Plan</h1>
          <ul>
            <li>
              {" "}
              Assist with applying for trademarks for high-potential countries,
              if requested
            </li>
            <li>Define the development model that will work best for client</li>
            <li>
              Develop a steps to acquiring the client international license
              document
            </li>
            <li>
              Create/modify materials necessary to present client operations,
              training, support and marketing resources as differentiators
            </li>
            <li>
              Develop a country pro forma unit, licensee and franchisor
              financial and development model – LicensePro™
            </li>
            <li>
              Identify the legal agreements and franchise regulations for
              priority countries
            </li>
          </ul>
        </div>
      </div>
      <div className="main-right">
        <h1>Step 3 – Implement the International Plan</h1>
        <ul>
          <li>
            Assess the international readiness of client’s internal systems,
            staff, training, support, Intranet and marketing programs
          </li>

          <li>
            Develop a 10-year international operations and development projected
            budge
          </li>
          <li>
            Identify and prioritize the best countries for a specific client
            through testing with the EGS GlobalTeam™ on the ground and based on
            research – GlobalSurvey™
          </li>
          <li>
            Create an international slide presentation from client internal
            slides
          </li>
          <li>
            Develop a profile of the optimal Licensee and license terms –
            GlobalProfile™
          </li>
        </ul>
      </div>
      <div className="second-part">
        <div className="second">
          <img src={imageStep} />
        </div>
      </div>
    </div>
  );
};

export default Steps;
