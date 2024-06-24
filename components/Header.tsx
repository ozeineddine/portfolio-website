import Link from "next/link";

const header = () => {
  const headerList = ["Home", "About", "Experience", "Projects"];

  return (
    <div className="bg-majorelle-blue py-5 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <Link href="#home">
          <h1 className="text-white">Omar Zeineddine</h1>
        </Link>
        <div className="flex flex-row">
          {headerList.map((item) => {
            // Creating the href variable for the anchor links for the header and sections
            const href = `#${item.toLowerCase()}`;
            return (
              <div key={item} className="group hover:border-red-100 px-4">
                <Link href={href}>
                  <p className="hover:scale-125 text-white capitalize">
                    {item}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default header;
