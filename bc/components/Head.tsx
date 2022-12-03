import React, { ReactElement } from "react";
import {
  MjmlHead,
  MjmlFont,
  MjmlAttributes,
  MjmlAll,
  MjmlStyle,
  MjmlRaw,
} from "mjml-react";
import { black, grayDark } from "./theme";

import * as designTokens from 'mondrian-tokens/dist/claro-tokens-latest.typescript'

type HeadProps = { children?: ReactElement };

const Head: React.FC<HeadProps> = ({ children }) => {
  return (
    <MjmlHead>
      <>
        <MjmlRaw>
          <meta name="color-scheme" content="light dark" />
          <meta name="supported-color-schemes" content="light dark" />
        </MjmlRaw>
        <MjmlFont
          name="Inter"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700"
        />
        <MjmlStyle>{`
        strong {
          font-weight: ${designTokens.fontWeightBold};
        }
        .smooth {
          -webkit-font-smoothing: antialiased;
        }
        .paragraph a {
          color: ${designTokens.colorBrandPrimaryDarkest} !important;
        }
        .li {
          text-indent: -18px;
          margin-left: ${designTokens.spacingInlineSm};
          display: inline-block;
        }
        .footer a {
          text-decoration: none !important;
          color: ${grayDark} !important;
        }
        .dark-mode {
          display: none;
        }
        @media (min-width:480px) {
          td.hero {
            padding-left: ${designTokens.spacingInlineSm} !important;
            padding-right: ${designTokens.spacingInlineSm} !important;
          }
        }
        @media (prefers-color-scheme: dark) {
          .logo > * {
            
          }
          .paragraph > *, .paragraph a, .li > div {
            color: ${designTokens.colorNeutralLightest}!important;
          }
          .dark-mode {
            display: inherit;
          }
          .light-mode {
            display: none;
          }
        }
      `}</MjmlStyle>
        <MjmlAttributes>
          <MjmlAll
            font-family='Arial, Helvetica, sans-serif'
            font-weight={designTokens.fontWeightRegular}
          />
        </MjmlAttributes>
        {children}
      </>
    </MjmlHead>
  );
};

export default Head;
