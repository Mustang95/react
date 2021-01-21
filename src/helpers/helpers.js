
let currentId = 0;
export const generateId = () => {
  currentId++;
  return currentId;
};
export const formatDate = (data) => {
  const dia = data.substr(8)
  const mes = data.substr(5,2)
  return `${dia}/${mes}`
};
export function formatReal(num){
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);
}