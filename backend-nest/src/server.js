import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
