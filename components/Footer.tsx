import { Library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

/*  */
interface iconDict {
  icon: any;
  link: string;
}

const footerIconList: iconDict[] = [
  {icon: faInstagram, link: "https://www.instagram.com/ozisballin/"},
  {icon: faGithub, link: "https://github.com/ozeineddine"},
  {icon: faLinkedin, link: "https://www.linkedin.com/in/omar-zeineddine/"}
];

const Footer = () => {
  return (
    <>
    <div className="fixed bottom-0 left-0 w-full bg-white">
      <div className="container mx-auto">
        <footer className="flex flex-row ">
          {footerIconList.map((item) => {
            return (
              <div className="group px-4">
                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  className="hover:scale-125"
                />
                </a>
              </div>
            );
          })}
        </footer>
      </div>
    </div>
    </>
  );
};

export default Footer;
