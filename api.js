import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// ROTA PRINCIPAL
app.get('/', (req, res) => {
  res.send("API rodando. Use /dataehora ou /calculadora");
});

// DATA E HORA
app.get('/dataehora', (req, res) => {
  const now = new Date();

  res.json({
    date: now.toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    }),
    time: now.toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    })
  });
});

// CALCULADORA
app.get('/calculadora', (req, res) => {
  const { a, b } = req.query;

  const numA = Number(a);
  const numB = Number(b);

  // validação básica (evita NaN)
  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({
      erro: "Parâmetros inválidos. Use ?a=numero&b=numero"
    });
  }

  res.json({
    resultado: numA + numB
  });
});

// PORTA
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});