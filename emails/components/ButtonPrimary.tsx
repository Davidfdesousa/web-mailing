import { MjmlButton } from "mjml-react";
import React from "react";
import { black, gold, grayLight } from "./theme";
import { leadingTight, textBase, borderBase } from "./theme";

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
        backgroundColor="#b36eff"
        color="#fff"
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
        backgroundColor="#b36eff"
        color={black}
        borderRadius={borderBase}
        cssClass="dark-mode"
      >
        {uiText}
      </MjmlButton>
    </>
  );
};

export default ButtonPrimary;
