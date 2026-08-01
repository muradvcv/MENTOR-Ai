"use client";

import { postJob } from "@/lib/actions/jobs";
import { useState } from "react";

const AddJob = () => {
  const [skills, setSkills] = useState("");

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const jobData = {
      jobTitle: formData.get("jobTitle"),
      companyName: formData.get("companyName"),
      companyLogo: formData.get("companyLogo"),
      jobCategory: formData.get("jobCategory"),
      employmentType: formData.get("employmentType"),
      experienceLevel: formData.get("experienceLevel"),
      requiredSkills: skills.split(",").map((skill) => skill.trim()).filter(Boolean),
      salaryMin: Number(formData.get("salaryMin")),
      salaryMax: Number(formData.get("salaryMax")),
      location: formData.get("location"),
      applicationDeadline: formData.get("applicationDeadline"),
      vacancy: Number(formData.get("vacancy")),
      jobDescription: formData.get("jobDescription"),
      responsibilities: formData.get("responsibilities"),
      requirements: formData.get("requirements"),
      benefits: formData.get("benefits"),
      createdAt: new Date(),
    };
    const res=await postJob(jobData)
    form.reset();
    setSkills("");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090F] px-4 py-14">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />
      <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl rounded-3xl border border-purple-500/20 bg-[#13131F]/90 p-8 shadow-[0_0_60px_rgba(124,58,237,.18)] backdrop-blur-xl">
        <h1 className="text-center text-4xl font-bold text-white">
          Add New Job
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Publish your job and connect with talented professionals.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Job Title
            </label>

            <input
              type="text"
              name="jobTitle"
              placeholder="Frontend Developer"
              required
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Company Name
            </label>

            <input
              type="text"
              name="companyName"
              placeholder="Programming Hero"
              required
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Company Logo
            </label>

            <input
              type="url"
              name="companyLogo"
              placeholder="https://logo.png"
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Job Category
            </label>

            <select
              name="jobCategory"
              required
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none"
            >
              <option value="">Select Category</option>
              <option>Software Development</option>
              <option>UI/UX Design</option>
              <option>Marketing</option>
              <option>DevOps</option>
              <option>Data Science</option>
            </select>
          </div>          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Employment Type
            </label>

            <select
              name="employmentType"
              required
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none"
            >
              <option value="">Select Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Experience Level
            </label>

            <select
              name="experienceLevel"
              required
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none"
            >
              <option value="">Select Level</option>
              <option>Fresher</option>
              <option>Junior</option>
              <option>Mid-Level</option>
              <option>Senior</option>
              <option>Lead</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Required Skills
            </label>

            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="React, Next.js, TypeScript, Node.js"
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Minimum Salary
            </label>

            <input
              type="number"
              name="salaryMin"
              placeholder="30000"
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Maximum Salary
            </label>

            <input
              type="number"
              name="salaryMax"
              placeholder="60000"
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Job Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Dhaka, Bangladesh"
              required
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Application Deadline
            </label>

            <input
              type="date"
              name="applicationDeadline"
              required
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] px-4 py-3 text-white outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Job Description
            </label>

            <textarea
              name="jobDescription"
              rows={5}
              required
              placeholder="Describe the role, project, and what the candidate will be working on..."
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] p-4 text-white placeholder:text-gray-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>


          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Requirements
            </label>

            <textarea
              name="requirements"
              rows={5}
              required
              placeholder="Mention required skills, education, and experience..."
              className="w-full rounded-xl border border-purple-500/20 bg-[#1B1B2C] p-4 text-white placeholder:text-gray-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          
          
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(168,85,247,.45)] active:scale-95"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative flex items-center justify-center gap-2">

                Add Job
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddJob;