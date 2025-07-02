import app from './app.js';
import connectMongo from './config/db.js';

const PORT = process.env.PORT || 3001;


try {
    // Conecta ao MongoDB primeiro
    await connectMongo();

    // Depois inicia o servidor
    app.listen(PORT, () => {
        console.log(`🚀 API rodando na porta:${PORT}`);
    });
} catch (err) {
    console.error('❌ Erro ao iniciar o servidor:', err);
}