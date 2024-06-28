import { Library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as faSolidEnvelope } from "@fortawesome/free-solid-svg-icons";

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

const sidebarIconList: iconDict[] = [
  // { icon: faInstagram, link: "https://www.instagram.com/ozisballin/" },
  { icon: faGithub, link: "https://github.com/ozeineddine" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/omar-zeineddine/" },
  { icon: faSolidEnvelope, link: "mailto:encrypted-email-placeholder" }, // Placeholder for now
  
];

const decryptEmail = () => {
  const encrypted = process.env.NEXT_PUBLIC_ENCRYPTED_EMAIL!; 
  const decoded = atob(encrypted);
  return `mailto:${decoded}`;
};

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-end fixed bottom-0 left-0 py-4 z-2 inset-y-0 left-0 w-16 mb-12 items-center">
        <div className="container mx-auto m-4">
          <div className="flex flex-col items-center">
            {sidebarIconList.map((item) => {
              const link = item.icon === faSolidEnvelope ? decryptEmail() : item.link;
              return (
                <div key={item.link} className="group px-4 m-4">
                  <a target="_blank" rel="noopener noreferrer" href={link}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2x"
                      className="hover:scale-125"
                      //   inverse
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
