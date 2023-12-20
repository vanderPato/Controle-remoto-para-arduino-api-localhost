const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

// Dados iniciais
let data = {
    id: 0,
    frente: false,
    traz:false,
    esquerda:false,
    direita:false
};

app.use(cors());
app.get('/api/data', (req, res) => {
    res.json(data);
});

app.patch('/api/data', (req, res) => {
    try {
    // Supondo que os dados a serem atualizados são fornecidos no corpo da solicitação
    const newData = req.body;

    // Atualize os dados conforme necessário
    if (newData.frente !== undefined) {
        data.frente = newData.frente;

    }
    if (newData.traz !== undefined) {
        data.traz = newData.traz;
        
    }

    if (newData.esquerda !== undefined) {
        data.esquerda = newData.esquerda;
        
    }

    if (newData.direita !== undefined) {
        data.direita = newData.direita;
        
    }


    // Envie uma resposta com os dados atualizados
    res.json(data);
} catch(error){
    console.error('Erro durante a rota PATCH:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });

}

});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
