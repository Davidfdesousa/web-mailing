import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlImage,
  MjmlSpacer,
} from "mjml-react";
import ButtonPrimary from "../components/ButtonPrimary";
import {
  leadingTight,
  leadingRelaxed,
  textBase,
  textXl,
} from "../components/theme";
import React from "react";

const AccountCreated: React.FC<{ name?: string }> = ({ name }) => (
  <Mjml>
    <Head />
    <MjmlBody width={600}>
      <Header loose />
      <MjmlSection padding="0">
        <MjmlColumn>
          <MjmlImage
            cssClass="hero"
            padding="0 0 40px"
            align="left"
            src="https://davidfdesousa.com.br/emails/transite/2023/08-09/welcome/imgs/banner.png"
          />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection padding="0 24px" cssClass="smooth">
        <MjmlColumn>
          <MjmlText
            cssClass="paragraph"
            padding="0"
            fontSize={textXl}
            lineHeight={leadingTight}
          >
            Transite! Transitando carreiras, mudando vidas!
          </MjmlText>
          <MjmlText
            padding="24px 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde maiores, asperiores eius repudiandae harum ducimus numquam. Vel cupiditate, a quo dignissimos quos, iste ab ratione ex eveniet nam eligendi.
          </MjmlText>
          <MjmlSpacer height="24px" />
          <ButtonPrimary link={"#"} uiText={"Formulario"} />
          <MjmlSpacer height="24px" />
          <MjmlText
            padding="0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Enjoy!
            <br />
            The BookBook Team
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <Footer />
    </MjmlBody>
  </Mjml>
);

export default AccountCreated;
