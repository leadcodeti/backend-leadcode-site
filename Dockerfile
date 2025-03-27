# Usa uma imagem do Node.js leve e atribui o alias build
FROM node:22.14.0-alpine AS build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia apenas os arquivos necessários para a instalação de dependências
COPY package*.json ./

# Instala as dependências sem salvar arquivos desnecessários
RUN npm ci

RUN npm install pm2 -g

# Copia o restante do código da aplicação
COPY . .

# Gera o cliente Prisma, necessário para interagir com o banco de dados no código da aplicação
RUN npx prisma generate

# Compila o projeto
RUN npm run build

# Verifica os arquivos no diretório dist após o build
RUN ls -alh /usr/src/app/dist

# Imagem final enxuta para produção
FROM node:22.14.0-alpine

WORKDIR /usr/src/app

# Copia apenas os arquivos necessários da fase de build
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/prisma ./dist/prisma
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/ecosystem.config.js ./ecosystem.config.js

# Expõe a porta do container
EXPOSE 3334

# Comando para rodar a aplicação
CMD [ "npm", "run", "start:prod" ]
