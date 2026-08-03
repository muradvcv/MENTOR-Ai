"use server"
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const postJob = async (jobData: unknown) => {
  try {
    const res = await fetch(`${baseUrl}/api/addjob`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });

    if (!res.ok) {
      throw new Error("Failed to add job");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// get all jobs
export const getJobs = async () => {
 const res=await fetch(`${baseUrl}/api/getjobs`)
 return await res.json()
}