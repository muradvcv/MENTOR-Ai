"use server"
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const postJob = async (jobData: unknown) => {
  try {
    const res = await fetch(`${API_URL}/api/jobs`, {
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