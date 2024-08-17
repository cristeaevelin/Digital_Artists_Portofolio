import express from 'express';
import cors from 'cors';
import path from 'path';
import multer from 'multer';

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/works/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const uploadedImagePath = `/uploads/${file.filename}`;
  res.status(201).json({ path: uploadedImagePath });
});

app.post('/works', (req, res) => {
  console.log('Received POST request for adding work');
  console.log('Request body:', req.body);

  const newWork = req.body;
  
  res.status(201).json(newWork);
});

app.put('/works/:id', (req, res) => {
  console.log('Received PUT request to update work with ID:', req.params.id);
  console.log('Request body:', req.body);

  const updatedWork = { ...req.body, id: req.params.id };

  res.status(200).json(updatedWork);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
