import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";

type HeaderProps = {
  loose?: boolean;
};

const Header: React.FC<HeaderProps> = ({ loose }) => {
  return (
    <MjmlSection padding={loose ? "48px 0 40px" : "48px 0 24px"}>
      <MjmlColumn>
        <MjmlImage
          padding="0"
          width="200px"
          height="auto"
          align="center"
          src="https://mondrian.clarobrasil.mobi/assets/campaigns/designops/logo/Inverse.png"
          cssClass="logo"
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export default Header;
