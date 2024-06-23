const header = () => {
    const headerList = ["Home", "Projects", "About", "Contact"];
  
    return (
      <div className="bg-blue-600 py-4">
        <div className="container mx-auto">
        <div className="flex flex-row">
          {headerList.map((item) => {
              return (
            <div className="group hover:border-red-100 px-4">
              <p className="hover:scale-125 hover:bg-sky-100 text-white capitalize">
                {item}
              </p>
            </div>
              );
          })}
        </div>
        </div>
      </div>
    );
  };
  
  export default header;
  