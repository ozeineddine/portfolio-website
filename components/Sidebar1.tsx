"use client";

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope as faSolidEnvelope } from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../hooks/useWindowSize";

interface iconDict {
  icon: any;
  link: string;
}

const sidebarIconList: iconDict[] = [
  { icon: faGithub, link: "https://github.com/ozeineddine" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/omar-zeineddine/" },
  { icon: faSolidEnvelope, link: "mailto:encrypted-email-placeholder" },
  {icon: faFileAlt, link: `${basePath}/images/omar_z_resume.pdf`}
];

const decryptEmail = () => {
  const encrypted = 'b2Z6ZWluZWRkaW5lQGdtYWlsLmNvbQ==';
  const decoded = atob(encrypted);
  return `mailto:${decoded}`;
};

const Sidebar = () => {
  const size = useWindowSize();

  if (size.width && size.width < 640) {
    return null;
  }

  return (
    <div className="flex flex-col justify-end fixed bottom-0 left-0 py-5 z-2 inset-y-0 left-0 w-16 mb-12 items-center">
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
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
