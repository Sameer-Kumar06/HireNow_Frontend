import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import { IoIosBriefcase } from "react-icons/io";
import { BsBuilding } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";

import homeImg from "../assets/home.svg";
import { FeaturedJobs } from "../components/home/FeaturedJobs";
import { Testimonials } from "../components/home/Testimonials";
import { Footer } from "../components/Footer";


export const Home = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Navbar />
      <main className="bg-purple-100 h-[50%] md:pt-10 pt-20">
        <div className="container mx-auto px-4 py-8 sm:py-12 ">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                The Future Of Working is Remote
              </h1>
              <p className="text-base sm:text-lg mb-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="bg-white p-2 rounded-lg shadow-md flex flex-col justify-between sm:flex-row items-center ">
                <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0 max-w-7xl">
                  <CiSearch className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 outline-none w-full"
                  />
                </div>
                <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0 sm:border-l sm:border-gray-300 sm:pl-4">
                  <FaMapMarkerAlt className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="flex-1 outline-none"
                  />
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full sm:w-auto">
                  Search
                </button>
              </div>
            </div>
            <div className="md:w-1/2 hidden md:block relative mt-8 md:mt-0">
              <img
                src={homeImg}
                alt="Remote work illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="container mx-auto px-4 py-8 border-t border-gray-200">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center md:text-left">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <IoIosBriefcase className="mx-auto md:mx-0 mb-2 text-purple-600" />
            <div className="text-2xl font-bold">175,324</div>
            <div className="text-gray-600">Live Job</div>
          </div>
          <div className="w-full md:w-1/4">
            <BsBuilding className="mx-auto md:mx-0 mb-2 text-purple-600" />
            <div className="text-2xl font-bold">7,532</div>
            <div className="text-gray-600">New Jobs</div>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <BsBuilding className="mx-auto md:mx-0 mb-2 text-purple-600" />
            <div className="text-2xl font-bold">97,354</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <HiOutlineUsers className="mx-auto md:mx-0 mb-2 text-purple-600" />
            <div className="text-2xl font-bold">38,47,154</div>
            <div className="text-gray-600">Candidates</div>
          </div>
        </div>
      </div>
      <FeaturedJobs />
      <Testimonials />
      <Footer />
    </div>
  );
};

