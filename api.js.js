import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send("API rodando 🚀 use /dataehora ou /calculadora");
});

app.get('/dataehora', (req, res) => {
  const now = new Date();

  res.json({
    date: now.toLocaleDateString('pt-BR'),
    time: now.toLocaleTimeString('pt-BR')
  });
});

// calculadora simples
app.get('/calculadora', (req, res) => {
  const { a, b } = req.query;

  const numA = Number(a);
  const numB = Number(b);

  res.json({
    resultado: numA + numB
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});