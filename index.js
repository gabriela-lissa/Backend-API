    import express from 'express';
    import cors from 'cors';

    const app = express();

    app.use(cors());
    //post delete put 
    app.get('/', (req, res) => {//Request pode ser acompanhada com um ou mais parametros ex num1 e num2 - escolher operação estou passando 2 numeros dai a funçao que está dentro dessa parte
        res.json({
            date: new Date().toLocaleString('pt-BR'),
            status: 'API no Render funcionando!'
        });
    });

    // Porta dinâmica para o Render
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });