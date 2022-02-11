import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Menu } from "./components/Menu";
import { WeAre } from "./components/WeAre";

import data from "./utils/data.json";

function App() {
  return (
    <>
      <Menu
        title={data.header.logoTitle.title}
        subtitle={data.header.logoTitle.subtitle}
        menuLinks={data.header.menuLinks}
        numberPhone={data.header.whatsData.number}
        urlWhats={data.header.whatsData.url}
      />
      <Banner
        title={data.banner.title}
        paragraph={data.banner.paragraph}
        paragraphSecond={data.banner.paragraphSecond}
        paragraphThird={data.banner.paragraphThird}
        img={data.banner.img}
      />
      <WeAre
        title={data.weare.title}
        paragraph={data.weare.paragraph}
      />
      <Contact
        title={data.contact.title}
        paragraph={data.contact.paragraph}
        paragraphSecond={data.contact.paragraphSecond}
        paragraphThird={data.contact.paragraphThird}
        urlCTA={data.contact.urlCTA}
        textCallToAction={data.contact.textCallToAction}
      />
    </>
  );
}

export default App;
