const Header = ({handleModal}) => {
    
  return (
    <div className="h-fit md:h-1/6 py-5">
      <div className="bg-gray-200 h-full w-full md:w-2/3 mx-auto md:flex rounded-md py-1 px-3 shadow-md">
        <div className="h-full w-full md:w-1/2 flex justify-center md:justify-start gap-4 items-center">
            <button className="h-12 w-12 bg-blue-200 rounded-[50%] hover:border-4 hover:border-white"></button>
            <button className="h-12 w-12 bg-blue-400 rounded-[50%] hover:border-4 hover:border-white"></button>
            <button className="h-12 w-12 bg-blue-600 rounded-[50%] hover:border-4 hover:border-white"></button>
            <button className="h-12 w-12 bg-blue-800 rounded-[50%] hover:border-4 hover:border-white"></button>
        </div>
        <div className="h-full my-4 md:my-0 w-full md:w-1/2 flex justify-center md:justify-end items-center gap-4">
            <button className="bg-white text-xl rounded-md p-2 shadow-sm" onClick={handleModal}>Add</button>
            <button className="bg-white text-red-400 text-xl rounded-md p-2 shadow-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
