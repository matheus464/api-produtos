# Usa a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do projeto para dentro do container
COPY . .

# Expõe a porta usada pela API
EXPOSE 3000


# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
