import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    let visit = await prisma.visit.findFirst();

    if (!visit) {
      visit = await prisma.visit.create({
        data: { count: 1 },
      });
    } else {
      visit = await prisma.visit.update({
        where: { id: visit.id },
        data: { count: visit.count + 1 },
      });
    }

    res.status(200).json({ count: visit.count });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
