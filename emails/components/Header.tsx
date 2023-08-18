import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";

type HeaderProps = {
  loose?: boolean;
};

const Header: React.FC<HeaderProps> = ({ loose }) => {
  return (
    <MjmlSection padding={loose ? "48px 0 40px" : "48px 0 24px"}>
      <MjmlColumn>
        <MjmlImage
          padding="0 24px 0"
          width="250px"
          align="center"
          src="https://davidfdesousa.com.br/emails/transite/2023/08-09/welcome/imgs/brand-v2.png"
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export default Header;
