import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaChevronDown,
  FaSlidersH,
  FaThLarge,
  FaListUl,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import instagramLogo from "../assets/1298747_instagram_brand_logo_social media_icon.png";
import googleLogo from "../assets/7123025_logo_google_g_icon.png";
import facebookLogo from "../assets/317727_facebook_social media_social_icon.png";
import amazonLogo from "../assets/104477_amazon_icon.png";
import atlassianLogo from "../assets/4373272_atlassian_logo_logos_icon.png";
import jpmorganLogo from "../assets/JP-Morgan-Chase-Logo.png";
import morganstanleyLogo from "../assets/morganStanley.png";
import tcsLogo from "../assets/tcs.jpg";
import ibmLogo from "../assets/ibm.png";
import wiproLogo from "../assets/wipro.png";
import ciscoLogo from "../assets/cisco.png";
import netflixLogo from "../assets/netflix.jpg";
import deepmindLogo from "../assets/deepmmind.jpg";
import coinbaseLogo from "../assets/coinbase.png";

// type Job = {
//   id: number;
//   title: string;
//   logoUrl: string;
//   company: string;
//   location: string;
//   jobType: string;
//   jobDescription: string;
//   salary: string;
//   timeRemaining: string;
//   featured: boolean;

// };

export function JobList() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Marketing Manager",
      company: "Instagram",
      location: "New Mexico, USA",
      salary: "$60k-100k/month",
      jobDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos dolorum magnam ratione harum consectetur omnis vero dignissimos illum eligendi.",
      timeRemaining: "4 Days Remaining",
      details: {
        website: "https://instagram.com",
        phone: "123-456-7890",
        email: "contact@instagram.com",
      },
      company_info: {
        founded: "2010",
        organization_type: "Social Media",
        company_size: "10,000+",
      },
      logoUrl: instagramLogo,
      featured: true,
      jobType: "Remote",
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA, USA",
      salary: "$120k-150k/month",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, reiciendis!",
      timeRemaining: "6 Days Remaining",
      details: {
        website: "https://google.com",
        phone: "987-654-3210",
        email: "jobs@google.com",
      },
      company_info: {
        founded: "1998",
        organization_type: "Tech",
        company_size: "100,000+",
      },
      logoUrl: googleLogo,
      featured: false,
      jobType: "Full Time",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Facebook",
      location: "Menlo Park, CA, USA",
      salary: "$110k-140k/month",
      jobDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptatem.",
      timeRemaining: "5 Days Remaining",
      details: {
        website: "https://facebook.com",
        phone: "555-123-4567",
        email: "careers@facebook.com",
      },
      company_info: {
        founded: "2004",
        organization_type: "Social Media",
        company_size: "60,000+",
      },
      logoUrl: facebookLogo,
      featured: true,
      jobType: "Remote",
    },
    {
      id: 4,
      title: "Cloud Architect",
      company: "Amazon",
      location: "Seattle, WA, USA",
      salary: "$130k-160k/month",
      jobDescription:
        "Doloremque quos dolorum magnam ratione harum consectetur omnis vero dignissimos illum eligendi.",
      timeRemaining: "2 Days Remaining",
      details: {
        website: "https://amazon.com",
        phone: "444-555-6666",
        email: "jobs@amazon.com",
      },
      company_info: {
        founded: "1994",
        organization_type: "E-commerce",
        company_size: "1,000,000+",
      },
      logoUrl: amazonLogo,
      featured: false,
      jobType: "Full Time",
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Atlassian",
      location: "Sydney, Australia",
      salary: "$90k-120k/month",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, doloremque.",
      timeRemaining: "7 Days Remaining",
      details: {
        website: "https://atlassian.com",
        phone: "111-222-3333",
        email: "careers@atlassian.com",
      },
      company_info: {
        founded: "2002",
        organization_type: "Software",
        company_size: "7,000+",
      },
      logoUrl: atlassianLogo,
      featured: true,
      jobType: "Remote",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "TCS",
      location: "Bangalore, India",
      salary: "$70k-100k/month",
      jobDescription:
        "Doloremque quos dolorum magnam ratione harum consectetur omnis vero dignissimos illum eligendi.",
      timeRemaining: "1 Day Remaining",
      details: {
        website: "https://tcs.com",
        phone: "777-888-9999",
        email: "jobs@tcs.com",
      },
      company_info: {
        founded: "1968",
        organization_type: "IT Services",
        company_size: "500,000+",
      },
      logoUrl: tcsLogo,
      featured: false,
      jobType: "Full Time",
    },
    {
      id: 7,
      title: "System Administrator",
      company: "Wipro",
      location: "Hyderabad, India",
      salary: "$60k-90k/month",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, incidunt.",
      timeRemaining: "3 Days Remaining",
      details: {
        website: "https://wipro.com",
        phone: "123-456-7890",
        email: "contact@wipro.com",
      },
      company_info: {
        founded: "1945",
        organization_type: "IT Services",
        company_size: "200,000+",
      },
      logoUrl: wiproLogo,
      featured: true,
      jobType: "Remote",
    },
    {
      id: 8,
      title: "UX/UI Designer",
      company: "IBM",
      location: "Austin, TX, USA",
      salary: "$100k-130k/month",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, recusandae.",
      timeRemaining: "5 Days Remaining",
      details: {
        website: "https://ibm.com",
        phone: "555-666-7777",
        email: "careers@ibm.com",
      },
      company_info: {
        founded: "1911",
        organization_type: "Tech",
        company_size: "350,000+",
      },
      logoUrl: ibmLogo,
      featured: false,
      jobType: "Remote",
    },
    {
      id: 9,
      title: "Cybersecurity Analyst",
      company: "Cisco",
      location: "San Francisco, CA, USA",
      salary: "$110k-140k/month",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, commodi.",
      timeRemaining: "6 Days Remaining",
      details: {
        website: "https://cisco.com",
        phone: "888-999-0000",
        email: "jobs@cisco.com",
      },
      company_info: {
        founded: "1984",
        organization_type: "Networking",
        company_size: "75,000+",
      },
      logoUrl: ciscoLogo,
      featured: true,
      jobType: "Full Time",
    },
    {
      id: 10,
      title: "AI Researcher",
      company: "DeepMind",
      location: "London, UK",
      salary: "$150k-200k/month",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quos.",
      timeRemaining: "8 Days Remaining",
      details: {
        website: "https://deepmind.com",
        phone: "000-123-4567",
        email: "careers@deepmind.com",
      },
      company_info: {
        founded: "2010",
        organization_type: "AI Research",
        company_size: "1,000+",
      },
      logoUrl: deepmindLogo,
      featured: true,
      jobType: "Remote",
    },
    {
      id: 11,
      title: "Machine Learning Engineer",
      company: "Netflix",
      location: "Los Angeles, CA, USA",
      salary: "$130k-160k/month",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus.",
      timeRemaining: "2 Days Remaining",
      details: {
        website: "https://netflix.com",
        phone: "321-654-9870",
        email: "jobs@netflix.com",
      },
      company_info: {
        founded: "1997",
        organization_type: "Streaming",
        company_size: "12,000+",
      },
      logoUrl: netflixLogo,
      featured: true,
      jobType: "Full Time",
    },
    {
      id: 12,
      title: "Blockchain Developer",
      company: "Coinbase",
      location: "New York, NY, USA",
      salary: "$120k-150k/month",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
      timeRemaining: "9 Days Remaining",
      details: {
        website: "https://coinbase.com",
        phone: "999-888-7777",
        email: "careers@coinbase.com",
      },
      company_info: {
        founded: "2012",
        organization_type: "Cryptocurrency",
        company_size: "5,000+",
      },
      logoUrl: coinbaseLogo,
      featured: false,
      jobType: "Remote",
    },
    {
      id: 13,
      title: "Financial Analyst",
      company: "JP Morgan",
      location: "New York, NY, USA",
      salary: "$85k-110k/month",
      jobDescription:
        "Doloremque quos dolorum magnam ratione harum consectetur omnis vero dignissimos illum eligendi.",
      timeRemaining: "3 Days Remaining",
      details: {
        website: "https://jpmorgan.com",
        phone: "222-333-4444",
        email: "jobs@jpmorgan.com",
      },
      company_info: {
        founded: "1799",
        organization_type: "Banking",
        company_size: "250,000+",
      },
      logoUrl: jpmorganLogo,
      featured: true,
      jobType: "Full Time",
    },
    {
      id: 14,
      title: "Software Engineer",
      company: "Morgan Stanley",
      location: "London, UK",
      salary: "$90k-120k/month",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos.",
      timeRemaining: "4 Days Remaining",
      details: {
        website: "https://morganstanley.com",
        phone: "333-444-5555",
        email: "careers@morganstanley.com",
      },
      company_info: {
        founded: "1935",
        organization_type: "Investment Banking",
        company_size: "70,000+",
      },
      logoUrl: morganstanleyLogo,
      featured: true,
      jobType: "Full Time",
    },
  ]);

  const navigate = useNavigate();

  const handleApplyNow = (job) => {
    console.log(job);
    
    navigate(`/job-detail`, { state: { job } });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Job</h1>
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Job title, keyword..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
          <FaSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
          <FaMapMarkerAlt
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex-1 relative">
          <select className="w-full pl-4 pr-10 py-2 border rounded-md appearance-none">
            <option>Select Category</option>
            <option>Software Engineer</option>
            <option>Machine Learning</option>
            <option>DevOps Engineer</option>
            <option>Figma Designer</option>
            <option>AI Engineer</option>
          </select>
          <FaChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <button className="px-4 py-2 bg-gray-200 rounded-md flex items-center">
          <FaSlidersH size={20} className="mr-2" />
          Advance Filter
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Find Job
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center gap-5 mr-5">
            <span className="font-semibold">
              <select className="appearance-none">
                <option>Software Engineer</option>
                <option>Machine Learning</option>
                <option>DevOps Engineer</option>
                <option>Figma Designer</option>
                <option>AI Engineer</option>
              </select>
            </span>
            <FaChevronDown size={16} />
          </div>

          <div className="flex items-center gap-5 mr-5">
            <span className="font-semibold">
              <select className="appearance-none">
                <option>New York</option>
                <option>San Francisco</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Seattle</option>
                <option>Boston</option>
                <option>Austin</option>
                <option>Dallas</option>
                <option>Miami</option>
                <option>Atlanta</option>
                <option>Toronto</option>
                <option>Vancouver</option>
                <option>Montreal</option>
                <option>London</option>
                <option>Manchester</option>
                <option>Berlin</option>
                <option>Paris</option>
                <option>Amsterdam</option>
                <option>Sydney</option>
                <option>Singapore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bengaluru</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Pune</option>
                <option>Kolkata</option>
                <option>Ahmedabad</option>
                <option>Jaipur</option>
                <option>Surat</option>
                <option>Chandigarh</option>
                <option>Gurgaon</option>
              </select>
            </span>
            <FaChevronDown size={16} />{" "}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span>Latest</span>
          <FaChevronDown size={16} />
          <span>12 per page</span>
          <FaChevronDown size={16} />
          <FaThLarge size={20} />
          <FaListUl size={20} />
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-4">
              <img
                src={job.logoUrl}
                alt={job.company}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h2 className="font-semibold">{job.title}</h2>
                <div className="text-sm text-gray-500">
                  <span>{job.location}</span> • <span>{job.salary}</span> •{" "}
                  <span>{job.timeRemaining}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {job.featured && (
                <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-xs">
                  Featured
                </span>
              )}
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                {job.jobType}
              </span>
              <button
                onClick={() => handleApplyNow(job)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 mt-6">
        <button className="p-2 border rounded-md">
          <FaChevronLeft size={20} />
        </button>
        <button className="p-2 border rounded-md bg-blue-600 text-white">
          01
        </button>
        <button className="p-2 border rounded-md">02</button>
        <button className="p-2 border rounded-md">03</button>
        <button className="p-2 border rounded-md">04</button>
        <button className="p-2 border rounded-md">05</button>
        <button className="p-2 border rounded-md">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
