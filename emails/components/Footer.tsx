import { MjmlSection, MjmlColumn, MjmlText, MjmlImage } from "mjml-react";
import React from "react";
import { grayDark, textSm } from "./theme";

export default function Footer() {
  return (
    <MjmlSection cssClass="smooth">
      <MjmlColumn verticalAlign={'middle'}>
        <MjmlText
          cssClass="footer"
          padding="0 24px"
          paddingBottom={10}
          paddingTop={50}
          fontSize={textSm}
          color={grayDark}
          align="center"
        >
          © 2023 Copyright &nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="#" target="_blank">
            Unsubscribe
          </a>
        </MjmlText>
      </MjmlColumn>

      <MjmlColumn>
      <MjmlImage
          padding={0}
          width="100px"
          align="center"
          src="https://davidfdesousa.com.br/emails/transite/2023/08-09/welcome/imgs/logo.jpg"
        />
      </MjmlColumn>
    </MjmlSection>
  );
}
