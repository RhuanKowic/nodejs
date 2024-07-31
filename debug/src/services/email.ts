async function getBaseEmail(senderName: string){
  let base = `Ola ${senderName}, gostaria de me inscrever para uma vaga.`;
  base += "\n estou deixando meu curriculo."
  return base;
}

export {
  getBaseEmail,
};