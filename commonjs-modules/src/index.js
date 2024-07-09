const products = require('./services/products')
const config = require('./services/config')
async function main(){
  console.log("Carrinho compras: ");
  products.getFullName(1, "Algoritmos e estrutura de dados com JavaScript")
  products.getProductLabel("Notebook Galaxy Book 2 i5-1235u")
  console.log(`A versão deste programa está na: ${config.version}`)
}
main()