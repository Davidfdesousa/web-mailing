import { MjmlSection, MjmlColumn, MjmlText } from "mjml-react";
import * as designTokens from 'mondrian-tokens/dist/claro-tokens-latest.typescript'

export default function Footer() {
  return (
    <MjmlSection cssClass="smooth">
      <MjmlColumn>
        <MjmlText
          cssClass="footer"
          padding={"24px 24px 48px"}
          fontSize={designTokens.fontSizeXxxs}
          color={designTokens.colorNeutralMedium}
        >
          © 2022 Claro&nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="#" target="_blank">
            Unsubscribe
          </a>
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
}
