import {Title, Image} from "./PageNotFound.styled";
import cat from "../../img/cat.jpg"
import {Section} from "../../components/Section/Section";


const PageNotFound = () => (
  <Section>
    <Title>
      Error 404: Page Not Found.
    </Title>
    <Image src={cat} aria-label="sheep" />
  </Section>
);

export default PageNotFound;

