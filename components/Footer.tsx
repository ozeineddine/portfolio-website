"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faSolidEnvelope } from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../hooks/useWindowSize";

const Footer = () => {
  const size = useWindowSize();

  const sidebarIconList = [
    { icon: faGithub, link: "https://github.com/ozeineddine" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/omar-zeineddine/" },
    { icon: faSolidEnvelope, link: "mailto:encrypted-email-placeholder" }, // Placeholder for now
  ];

  const decryptEmail = () => {
    const encrypted = process.env.NEXT_PUBLIC_ENCRYPTED_EMAIL!;
    const decoded = atob(encrypted);
    return `mailto:${decoded}`;
  };

  return (
    <footer className="bg-majorelle-blue text-alabaster py-4 mt-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <p className="text-sm">Created by: Omar Zeineddine</p>
        </div>
        <div className="text-center">
          <p className="text-sm">&copy; 2024 Omar Zeineddine. All rights reserved.</p>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-sm">This app was created using React, Next.js, and Tailwind CSS</p>
        </div>
        {size.width && size.width <= 640 && (
          <div className="flex justify-center mt-4">
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
        )}
      </div>
    </footer>
  );
};

export default Footer;
