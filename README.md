# Criando o package.json
nppm init -y

# Adicionando o TypeScript no package.json
# apenas em modo/ambiente de desenvolvimento
npm i typescript --save-dev

# Converter o TypeScript em JavaScript
npx tsc (nome do arquivo)

# Adicionando ts-node no modo dev
npm i ts-node --save-dev

# Caso o console.log não funcione sem import
npm i @types/node --save-dev