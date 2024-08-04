import Link from "next/link";
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';

const header = () => {
  const headerList = ["Home", "About", "Projects", "Contact", "Resume"];

  return (
    <div className="items-center bg-majorelle-blue py-5 fixed top-0 left-0 w-full z-10 text-alabaster">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <Link href="#home">
          <h1 className="">Omar Zeineddine</h1>
        </Link>
        <div className="flex flex-row sm:flex-row sm:w-[400px]">
          {headerList.map((item) => {
            // Creating the href variable for the anchor links for the header and sections
            const href = item === "Resume"? `${basePath}/images/omar_z_resume.pdf` :`#${item.toLowerCase()}`;
            return (
              <div key={item} className="group hover:border-red-100 px-4">
                <a target="_blank" rel="noopener noreferrer" href={href}>
                  <p className="hover:scale-125 capitalize">
                    {item}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default header;
