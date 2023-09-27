import { FC } from "react";
import { QuestionarioProps } from "./types";
import { QuestaoComponent } from "../questoes/questoes";
import { Botao } from "../botao";

export const Questionario: FC<QuestionarioProps> = (props) => {
  const { irPraProximoPasso, questao, questaoRespondida, ultima } = props;
  return (
    <div className={"flex items-center justify-center h-[100vh] flex-col"}>
      {questao ? (
        <QuestaoComponent
          value={questao}
          tempoPraResposta={6}
          respostaFornecida={(data) => {
            if (questao.naoRespondida) {
              questaoRespondida(props.questao.responderCom(data));
            }
          }}
          tempoEsgotado={irPraProximoPasso}
        />
      ) : (
        false
      )}

      <Botao
        onClick={irPraProximoPasso}
        texto={ultima ? "Finalizar" : "Próxima"}
      />
    </div>
  );
};
