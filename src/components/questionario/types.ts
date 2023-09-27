import QuestModel from "@/model/quest";

export type QuestionarioProps = {
  questao: QuestModel;
  ultima: boolean;
  questaoRespondida(questao: QuestModel): void;
  irPraProximoPasso(): void;
};
