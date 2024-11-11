import fs from 'fs';
import path from 'path';

// Check if the 'uploads' directory exists; if not, create it
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}