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

export function InternshipList() {
  const [internship, setInternship] = useState([
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA, USA",
      salary: "$120k-150k/year",
      jobDescription:
        "As a Software Engineering at Google, you will design, develop, and maintain complex software systems that are scalable, reliable, and efficient. You will collaborate with product managers, designers, and other engineers to develop cutting-edge products that enhance user experience across Google services. You’ll be involved in all stages of the software development lifecycle, including architecture, implementation, and testing. This role requires a deep understanding of data structures, algorithms, and system design. Familiarity with coding languages such as Python, Java, and C++ is essential. Experience in building large-scale distributed systems is preferred.",
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
      id: 2,
      title: "Data Sciene Intern",
      company: "Facebook",
      location: "Menlo Park, CA, USA",
      salary: "$110k-140k/year",
      jobDescription:
        "At Facebook, Data Sciene Intern leverage data to inform strategic decisions, improve the user experience, and drive business outcomes. In this role, you will apply statistical models, machine learning algorithms, and predictive analytics to analyze complex data sets. You will be responsible for identifying trends, providing insights, and supporting product development by creating data-driven recommendations. This position requires strong analytical skills, proficiency in programming languages such as Python or R, and experience with data visualization tools. Previous experience in handling large-scale data sets and collaborating with cross-functional teams is a plus",
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
      id: 3,
      title: "Cloud Architect Intern",
      company: "Amazon",
      location: "Seattle, WA, USA",
      salary: "$130k-160k/year",
      jobDescription:
        "As a Cloud Architect Intern at Amazon, you will design cloud infrastructure that is secure, scalable, and optimized for performance. You will work closely with clients to understand their requirements and develop solutions that leverage Amazon Web Services (AWS) to its fullest potential. This role will require you to build and maintain cloud environments, troubleshoot issues, and ensure that the system is always available and efficient. You will also collaborate with engineering teams to ensure seamless integration between on-premise systems and the cloud. Expertise in AWS, Azure, or Google Cloud Platform is essential for this role.",
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
      id: 4,
      title: "Product Manager Intern",
      company: "Atlassian",
      location: "Sydney, Australia",
      salary: "$90k-120k/year",
      jobDescription:
        "As a Product Manager Intern at Atlassian, you will lead the product development process from ideation to launch. You will work closely with engineers, designers, and other stakeholders to build products that solve customer problems and align with the company’s vision. Your responsibilities will include defining product roadmaps, prioritizing features, and ensuring timely delivery of releases. You will also engage with customers to gather feedback and make data-driven decisions to improve the product. Strong communication skills and experience in managing technical products are key to success in this role.",
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
      id: 5,
      title: "System Administrator Intern",
      company: "Wipro",
      location: "Hyderabad, India",
      salary: "$60k-90k/year",
      jobDescription:
        "As a System Administrator at Wipro, you will manage the day-to-day operations of an organization’s IT infrastructure. This includes monitoring system performance, ensuring uptime, managing servers, and resolving technical issues as they arise. You will be responsible for the installation, configuration, and maintenance of hardware and software systems. Additionally, you will oversee network and security systems to ensure that they are operating efficiently and securely. Strong troubleshooting skills, experience with various operating systems, and knowledge of networking protocols are essential for this position.",
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
      id: 6,
      title: "AI Research Intern",
      company: "DeepMind",
      location: "London, UK",
      salary: "$150k-200k/year",
      jobDescription:
        "As an AI Research Intern at DeepMind, you will conduct cutting-edge research in artificial intelligence and machine learning. You will work on innovative projects that aim to push the boundaries of what AI can achieve, contributing to real-world applications in healthcare, robotics, and more. Your work will involve developing novel algorithms, collaborating with top-tier researchers, and publishing your findings in leading scientific journals. A deep understanding of neural networks, reinforcement learning, and probabilistic models is essential. Experience with Python, TensorFlow, or PyTorch is preferred for this role.",
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
      id: 7,
      title: "Machine Learning Intern",
      company: "Netflix",
      location: "Los Angeles, CA, USA",
      salary: "$130k-160k/year",
      jobDescription:
        "As a Machine Learning Intern at Netflix, you will work on developing and deploying machine learning models to enhance various aspects of Netflix's services, from content recommendations to user experience. You will collaborate with data scientists, software engineers, and product teams to identify key areas where machine learning can improve performance and user satisfaction. Your responsibilities include building scalable machine learning pipelines, optimizing algorithms for real-time applications, and monitoring model performance in production. A strong background in deep learning frameworks, such as TensorFlow or PyTorch, and experience in working with large datasets is required.",
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
      id: 8,
      title: "Blockchain Developer Intern",
      company: "Coinbase",
      location: "New York, NY, USA",
      salary: "$120k-150k/year",
      jobDescription:
        "As a Blockchain Developer at Coinbase, you will be at the forefront of building innovative blockchain solutions for cryptocurrency exchanges and digital wallets. You will develop decentralized applications (dApps) and smart contracts that ensure secure, efficient, and transparent transactions. Your role involves working closely with security experts to ensure the integrity of the blockchain and applying cryptographic techniques to safeguard data. Experience with Solidity, Ethereum, or other blockchain platforms is critical, along with a deep understanding of distributed ledger technologies. You’ll also stay updated on the latest blockchain trends and emerging technologies.",
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
      id: 9,
      title: "Financial Analyst Intern",
      company: "Morgan Stanley",
      location: "London, UK",
      salary: "$90k-120k/year",
      jobDescription:
        "As a Financial Analyst at JP Morgan, you will provide financial analysis and insights to support investment decisions. You will assess market trends, analyze financial statements, and prepare reports for senior management. In this role, you will work with investment bankers, traders, and portfolio managers to help optimize the firm’s financial strategies. Your duties include preparing forecasts, managing risk, and creating financial models. A strong understanding of financial markets, proficiency in Excel and financial modeling software, and an ability to interpret economic trends are essential for this role.",
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

    navigate(`/internship-detail`, { state: { job } });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Internships</h1>
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
          Find Internship
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
        {internship.map((job) => (
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
