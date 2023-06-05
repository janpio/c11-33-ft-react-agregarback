import prisma from "@/lib/prisma";
import { type NextApiResponse, type NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  try {
    const exercises = await prisma.exercise.findMany();

    res.status(200).json({ exercises });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
