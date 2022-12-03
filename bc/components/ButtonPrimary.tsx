import { MjmlButton } from "mjml-react";
import { black, gold, grayLight } from "./theme";
import { leadingTight, textBase, borderBase } from "./theme";
import * as designTokens from 'mondrian-tokens/dist/claro-tokens-latest.typescript'

type ButtonPrimaryProps = {
  link: string;
  uiText: string;
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ link, uiText }) => {
  return (
    <>
      <MjmlButton
        lineHeight={leadingTight}
        fontSize={textBase}
        height={32}
        padding="0"
        align="left"
        href={link}
        backgroundColor={black}
        color={grayLight}
        borderRadius={borderBase}
        cssClass="light-mode"
      >
        {uiText}
      </MjmlButton>
      <MjmlButton
        lineHeight={leadingTight}
        fontSize={textBase}
        height={32}
        padding="0"
        align="left"
        href={link}
        backgroundColor={designTokens.colorGlobalMedium}
        color={designTokens.colorNeutralDarkest}
        borderRadius={designTokens.borderRadiusPill}
        cssClass="dark-mode"
      >
        {uiText}
      </MjmlButton>
    </>
  );
};

export default ButtonPrimary;
