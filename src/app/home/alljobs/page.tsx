import Image from "next/image";
import Link from "next/link";
import { getJobs } from "@/lib/actions/jobs";

interface Job {
  _id: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  location: string;
  experienceLevel: string;
  salaryMin: number;
  salaryMax: number;
  applicationDeadline: string;
  posterEmail: string;
}

const AllProducts = async () => {
  const jobs: Job[] = await getJobs();

  return (
    <div className="min-h-screen bg-black py-30">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="relative overflow-hidden rounded-3xl border border-purple-700 bg-gradient-to-r from-[#0b0b0b] via-[#1b102f] to-[#0b0b0b] px-8 py-8 mb-10">

          <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-purple-700/20 blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-fuchsia-600/20 blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white">
                🚀 Job <span className="text-purple-500">Portal</span>
              </h1>

              <p className="text-gray-300 mt-3 max-w-xl">
                Find your dream job from top companies and start your career
                today.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#151515] border border-purple-700 rounded-xl px-6 py-3 text-center">
                <h2 className="text-3xl font-bold text-purple-400">
                  {jobs.length}
                </h2>
                <p className="text-gray-400 text-sm">
                  Jobs
                </p>
              </div>

              <div className="bg-[#151515] border border-purple-700 rounded-xl px-6 py-3 text-center">
                <h2 className="text-3xl font-bold text-purple-400">
                  {new Set(jobs.map((job) => job.companyName)).size}
                </h2>
                <p className="text-gray-400 text-sm">
                  Companies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-[#111111] border border-purple-700 rounded-2xl px-6 py-4 flex items-center gap-4 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all duration-300"
            >
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src={job.companyLogo}
                  alt={job.companyName}
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full bg-white p-2 object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-purple-400">
                  {job.jobTitle}
                </h2>

                <p className="text-sm text-gray-400 mb-2">
                  {job.companyName}
                </p>

                <div className="grid grid-cols-2 gap-y-1 text-sm text-gray-300">
                  <p>📍 {job.location}</p>
                  <p>💼 {job.experienceLevel}</p>
                  <p>
                    💰 ৳{job.salaryMin} - ৳{job.salaryMax}
                  </p>
                  <p>📅 {job.applicationDeadline}</p>

                </div>

                <Link href={`/dashboard/admin/allproducts/${job._id}`}>
                  <button className="mt-3 h-9 w-36 rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-sm font-semibold text-white transition-all duration-300 hover:scale-105">
                    View Details →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllProducts;