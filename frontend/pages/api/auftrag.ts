// frontend/pages/api/auftrag.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { titel, beschreibung, ort, datum, budget } = req.body;

    try {
      const auftrag = await prisma.auftrag.create({
        data: {
          titel,
          beschreibung,
          ort,
          datum,
          budget,
        },
      });

      res.status(200).json(auftrag);
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
      res.status(500).json({ error: 'Fehler beim Speichern' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
