import QuestModel from "@/model/quest";

export type QuestoesProps = {
  value: QuestModel;
  tempoPraResposta?: number;
  respostaFornecida(indice: number): void;
  tempoEsgotado(): void;
};
