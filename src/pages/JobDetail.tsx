import {
  FaBookmark,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiExternalLink, FiPhone, FiMail } from "react-icons/fi";
import {
  BsCalendar4,
  BsClock,
  BsBriefcase,
  BsGeoAlt,
  BsCashStack,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export function JobDetail() {
  const location = useLocation();
  const job = location.state?.job;

  if (!job) {
    return <div>No job details available</div>;
  }
  return (
    <div className="bg-pink-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <nav className="text-sm mb-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Home
            </a>{" "}
            /
            <a href="/job-list" className="text-gray-500 hover:text-gray-700 mx-2">
              Find Job
            </a>            
            /{" "}<span className="text-gray-700">Job Details</span>
          </nav>

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Job Details</h1>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center">
              Apply Now <FiExternalLink className="ml-2" />
            </button>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <img
              src={job.logoUrl}
              alt="Instagram logo"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                {job.featured ? (
                  <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded">
                    Featured
                  </span>
                ) : (
                  ""
                )}

                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {job.jobType}
                </span>
              </div>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a
              href="#"
              className="flex items-center text-blue-600 hover:underline"
            >
              <FiExternalLink className="mr-2" /> {job.details.website}
            </a>
            <a
              href="#"
              className="flex items-center text-blue-600 hover:underline"
            >
              <FiPhone className="mr-2" /> {job.details.phone}
            </a>
            <a
              href="#"
              className="flex items-center text-blue-600 hover:underline"
            >
              <FiMail className="mr-2" /> {job.details.email}
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Job Description</h3>
                <p className="text-gray-600 mb-4">{job.jobDescription}</p>
                <p className="text-gray-600">{job.jobDescription}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-4">Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Quisque semper gravida est et consectetur.</li>
                  <li>
                    Curabitur blandit lorem velit, vitae pretium leo placerat
                    eget.
                  </li>
                  <li>Morbi mattis in ipsum ac tempus.</li>
                  <li>
                    Curabitur eu vehicula libero. Vestibulum sed purus
                    ullamcorper, lobortis lectus nec.
                  </li>
                  <li>
                    vulputate turpis. Quisque ante odio, iaculis a porttitor sit
                    amet.
                  </li>
                  <li>lobortis vel lectus. Nulla at risus ut diam.</li>
                  <li>
                    commodo feugiat. Nullam laoreet, diam placerat dapibus
                    tincidunt.
                  </li>
                  <li>
                    odio metus posuere lorem, id condimentum erat velit nec
                    neque.
                  </li>
                  <li>dui sodales ut. Curabitur tempus augue.</li>
                </ul>
              </section>
            </div>

            <div>
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">Job Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BsCalendar4 className="text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">JOB POSTED:</p>
                      <p className="font-medium">14 June, 2021</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BsClock className="text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">JOB EXPIRE IN:</p>
                      <p className="font-medium">{job.timeRemaining}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaGraduationCap className="text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">EDUCATION:</p>
                      <p className="font-medium">Graduation</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BsCashStack className="text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">SALARY:</p>
                      <p className="font-medium">{job.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BsGeoAlt className="text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">LOCATION:</p>
                      <p className="font-medium">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BsBriefcase className="text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">JOB TYPE:</p>
                      <p className="font-medium">{job.jobType}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BsBriefcase className="text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">EXPERIENCE:</p>
                      <p className="font-medium">1-2 Years</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={job.logoUrl}
                    alt="Instagram logo"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{job.company}</h4>
                    <p className="text-sm text-gray-500">
                      {job.company_info.organization_type}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-gray-500">Founded in:</span>{" "}
                    {job.company.founded}
                  </p>
                  <p>
                    <span className="text-gray-500">Organization type:</span>{" "}
                    {job.company_info.organization_type}
                  </p>
                  <p>
                    <span className="text-gray-500">Company size:</span>{" "}
                    {job.company_info.company_size}
                    Employees
                  </p>
                  <p>
                    <span className="text-gray-500">Phone:</span>{" "}
                    {job.details.phone}
                  </p>
                  <p>
                    <span className="text-gray-500">Email:</span>{" "}
                    {job.details.email}
                  </p>
                  <p>
                    <span className="text-gray-500">Website:</span>{" "}
                    {job.details.website}
                  </p>
                </div>
                <div className="flex space-x-2 mt-4">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Share this job:</h3>
            <div className="flex space-x-4">
              <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <FaFacebookF className="mr-2" /> Facebook
              </button>
              <button className="flex items-center bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
                <FaTwitter className="mr-2" /> Twitter
              </button>
              <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                <FaInstagram className="mr-2" /> Pinterest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
