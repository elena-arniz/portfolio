import { useContext } from "react";
import LangContext from "../../contexts/LangContext";

const Education = () => {
  const { text } = useContext(LangContext);

  const educationContent = [
    {
      year: "2022 - 2024",
      degree: text.fpTitle,
      institute: "MEDAC online",
      details: text.daw,
    },
    {
      year: "2021 - 2022",
      degree: text.degreeTitle,
      institute: "Escuela superior de arte dramático, sevilla",
      details: text.artSchool,
    },
    {
      year: "2015 - 2017",
      degree: text.fpTitle,
      institute: "I.E.S. Pedro Muñoz Seca",
      details: text.travelAg,
    },
  ];

  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
