import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ModalCoinConversion from "./portfolio/modal/CoinConversion";

// Contexts
import LangContext from "../contexts/LangContext";
import LiTemplate from "./portfolio/modal/template/liTemplate";
import Title from "./Title";

const Portfolio = () => {
  const { text } = useContext(LangContext);

  return (
    <div className="portfolio">
      <div
        className="container grid-gallery main-content"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <Title
          mainTitle={text.my}
          secondTitle={text.portfolio}
          bgTitle={text.works}
        />
        <Tabs>
          <TabList className="portfolio-tab-list">
            <Tab>{text.all}</Tab>
            <Tab>{text.apps}</Tab>
          </TabList>

          <div className="portfolio-tab-content">
            <TabPanel>
              <ul className="row grid justify-content-center">
                <LiTemplate
                  image="img/projects/conversor-moneda.png"
                  title={text.coinConversion}
                  modalComponent={<ModalCoinConversion />}
                />
              </ul>
            </TabPanel>

            <TabPanel>
              <ul className="row grid justify-content-center">
              <LiTemplate
                  image="img/projects/conversor-moneda.png"
                  title={text.coinConversion}
                  modalComponent={<ModalCoinConversion />}
                />
              </ul>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
