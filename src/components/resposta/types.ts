import RespostModel from "@/model/respost";

export type RespostaProps = {
  valor: RespostModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  respostaFornecida(indice: number): void;
};
