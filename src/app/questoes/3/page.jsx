import SomaNumerosPares from "@/app/components/somador/somador";

const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Questao3() {
  return (
    <>
      <h1>Questão 3</h1>
      <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p>
      <SomaNumerosPares/>
    </>
  );
}
