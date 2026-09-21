import { createElement } from "react";
import {
    FiCode,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiMessageCircle,
    FiYoutube,
} from "react-icons/fi";
import { Styled } from "./styled";

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FiGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCode },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FiLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FiFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FiYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiMessageCircle },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FiHeart },
];

const linkProps = (href) => (href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" });

const Footer = () => (
    <Styled.Wrapper>
        <div className="copyright">
            Copyright &copy; {new Date().getFullYear()} {" "}
            <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a>
        </div>
        <Styled.Links aria-label="Social and support links">
            {footerLinks.map(({ label, href, icon: Icon }) => (
                <Styled.IconLink key={label} href={href} title={label} aria-label={label} {...linkProps(href)}>
                    {createElement(Icon, { "aria-hidden": "true" })}
                </Styled.IconLink>
            ))}
        </Styled.Links>
    </Styled.Wrapper>
);

export default Footer;
