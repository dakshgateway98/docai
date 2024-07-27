import loaderSVG from "../../Assests/images/loader.svg"; 
const Loader = () => {
    return (
      <img src={loaderSVG} alt="loader" className="w-12 h-12 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center" />
    );
  };
  
  export default Loader;
  