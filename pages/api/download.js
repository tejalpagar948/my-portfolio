import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const filePath = path.resolve(
    '../../public/assets/pdf/Tejal_Pagar_Resume.pdf'
  );

  if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=Tejal_Pagar_Resume.pdf'
    );
    res.send(fileBuffer);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
}
