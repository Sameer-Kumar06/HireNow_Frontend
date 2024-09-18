import React, { useState } from "react";
import axios from "axios";

export function ResumeForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    contact: "",
    email: "",
    birth_date: "",
    location: "",
    education: [{ degree: "", institute: "", grade: "", year: "" }],
    achievements: [""],
    skills: [""],
    projects: [""],
    experience: [{ description: "", company: "", year: "" }],
    personal: { father_name: "", address: "" },
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle array field changes (education, achievements, etc.)
  const handleArrayChange = (index, field, e) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [field]: newArray });
  };

  // Handle nested field changes for experience, education, etc.
  const handleNestedChange = (index, field, key, e) => {
    const newArray = [...formData[field]];
    newArray[index][key] = e.target.value;
    setFormData({ ...formData, [field]: newArray });
  };

  // Add new field to array (for education, skills, etc.)
  const addNewField = (field) => {
    if (field === "education" || field === "experience") {
      setFormData({
        ...formData,
        [field]: [
          ...formData[field],
          { degree: "", institute: "", grade: "", year: "" },
        ],
      });
    } else {
      setFormData({ ...formData, [field]: [...formData[field], ""] });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/generate_resume",
        formData,
        {
          responseType: "blob",
        }
      );

      const file = new Blob([response.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = fileURL;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      if (response.status === 200) {
        alert("Resume generated successfully!");
      } else {
        alert("Error generating resume. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-3/4 bg-white p-10 rounded-lg shadow-md">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6">Create Your Resume</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="flex gap-5 justify-between">
              <div className="w-1/2">
                <label className="block font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block border w-full border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.personal.address}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personal: {
                        ...formData.personal,
                        address: e.target.value,
                      },
                    })
                  }
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="flex gap-5 justify-between">
              <div>
                <label className="block font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="w-1/4">
                <label className="block font-medium text-gray-700">
                  Birth Date
                </label>
                <input
                  type="date"
                  name="birth_date"
                  value={formData.birth_date}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div>
                <label className="block font-medium text-gray-700">
                  Father's Name
                </label>
                <input
                  type="text"
                  name="father_name"
                  value={formData.personal.father_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personal: {
                        ...formData.personal,
                        father_name: e.target.value,
                      },
                    })
                  }
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Achievements
                </label>
                {formData.achievements.map((ach, index) => (
                  <div key={index} className="flex space-x-2">
                    <input
                      type="text"
                      value={ach}
                      onChange={(e) =>
                        handleArrayChange(index, "achievements", e)
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addNewField("achievements")}
                  className="text-purple-800 font-semibold hover:underline"
                >
                  Add More Achievements
                </button>
              </div>
              <div className="w-1/4">
                <label className="block font-medium text-gray-700">
                  Skills
                </label>
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex space-x-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleArrayChange(index, "skills", e)}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addNewField("skills")}
                  className="text-purple-800 font-semibold hover:underline"
                >
                  Add More Skills
                </button>
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Projects
                </label>
                {formData.projects.map((project, index) => (
                  <div key={index} className="flex space-x-2">
                    <input
                      type="text"
                      value={project}
                      onChange={(e) => handleArrayChange(index, "projects", e)}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addNewField("projects")}
                  className="text-purple-800 font-semibold hover:underline"
                >
                  Add More Projects
                </button>
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700">About</label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <h2 className="text-xl font-semibold">Education</h2>

              {formData.education.map((edu, index) => (
                <div key={index} className=" flex justify-between gap-10">
                  <div className="w-1/4">
                    <input
                      type="text"
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) =>
                        handleNestedChange(index, "education", "degree", e)
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                  <div className="w-1/4">
                    <input
                      type="text"
                      placeholder="Institute"
                      value={edu.institute}
                      onChange={(e) =>
                        handleNestedChange(index, "education", "institute", e)
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                  <div className="w-1/4">
                    <input
                      type="text"
                      placeholder="Grade"
                      value={edu.grade}
                      onChange={(e) =>
                        handleNestedChange(index, "education", "grade", e)
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                  <div className="w-1/4">
                    <input
                      type="text"
                      placeholder="Year"
                      value={edu.year}
                      onChange={(e) =>
                        handleNestedChange(index, "education", "year", e)
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addNewField("education")}
                className="text-purple-800 font-semibold hover:underline text-left"
              >
                Add More Education
              </button>
            </div>

            <div className="flex flex-col w-full">
              <h2 className="text-xl font-semibold">Experience</h2>

              {formData.experience.map((exp, index) => (
                <div key={index} className=" flex justify-between gap-10">
                  <div className="w-1/3">
                    <input
                      type="text"
                      placeholder="Description"
                      value={exp.description}
                      onChange={(e) =>
                        handleNestedChange(
                          index,
                          "experience",
                          "description",
                          e
                        )
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                  <div className="w-1/3">
                    <input
                      type="text"
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) =>
                        handleNestedChange(index, "experience", "company", e)
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                  <div className="w-1/3">
                    <input
                      type="text"
                      placeholder="Year"
                      value={exp.year}
                      onChange={(e) =>
                        handleNestedChange(index, "experience", "year", e)
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addNewField("experience")}
                className="text-purple-800 font-semibold text-left hover:underline"
              >
                Add More Experience
              </button>
            </div>

            {/* Other sections ... */}

            <div>
              <button
                type="submit"
                className="bg-purple-800 font-semibold text-white py-2 px-4 rounded-md hover:bg-purple-700"
              >
                Generate Resume
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}