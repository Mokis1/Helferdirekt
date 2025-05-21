import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { titel, beschreibung, ort, datum, budget } = req.body;

    try {
      const neuerAuftrag = await prisma.auftrag.create({
        data: {
          titel,
          beschreibung,
          ort,
          datum,
          budget,
        },
      });

      res.status(201).json(neuerAuftrag);
    } catch (error) {
      console.error("Fehler beim Speichern des Auftrags:", error);
      res.status(500).json({ message: "Fehler beim Speichern" });
    }
  } else {
    res.status(405).json({ message: "Methode nicht erlaubt" });
  }
}
