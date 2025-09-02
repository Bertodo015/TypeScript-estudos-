# Criar package.json
npm init -y

# Puxando typescript
npm i typescript

# Fazendo build do projeto
## (Converter ts para js)
npx tsc index.ts

# Rodando index.js
node index.js

# Compilando e rodando com ts-node
npm i ts-node
npx ts-node index.ts

# Caso dê erro code: 'ERR_UNKNOWN_FILE_EXTENSION'
Criar arquivo tsconfig.json e deixar vazio
