import { useContext } from "react";
import LangContext from "../../contexts/LangContext";

const Experience = () => {
  const { text } = useContext(LangContext);

  const experienceContent = [
    {
      year: text.march + " 2024 - " + text.june + " 2024",
      position: text.webDeveloper,
      companyName: "D&A Code Projects ",
      details: text.webDeveloperDetails,
    },
    {
      year: text.july + " 2023",
      position: text.instructor,
      companyName: "TALENTUM",
      details: text.instructorDetails,
    },
    {
      year: text.january + " 2022 - " + text.october + " 2022",
      position: text.coordinatorPosition,
      companyName: "EL CARROMATO",
      details: text.coordinatorDetails,
    },
    {
      year: text.april + " 2018 - " + text.october + " 2021",
      position: text.gameMasterPosition,
      companyName: "ESCAPE CUBE S.L.",
      details: text.gameMasterDetails,
    },
  ];

  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
