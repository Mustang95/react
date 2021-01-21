
let currentId = 0;
export const generateId = () => {
  currentId++;
  return currentId;
};
export const formatDate = (data) => {
  let aux = data;
  aux = aux.substr(5, 5);
  const newDate = aux.replace("-", "/");
  return newDate;
};
export function formatReal(num){
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);
}