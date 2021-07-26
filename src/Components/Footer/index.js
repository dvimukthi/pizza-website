import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <SocialIcon>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferer"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferer"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferer"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="twitter"
                rel="noopener noreferer"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
