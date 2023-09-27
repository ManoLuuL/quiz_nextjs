import { FC } from "react";
import { QuestoesProps } from "./types";
import { Enunciado } from "../enunciado";
import { Resposta } from "../resposta";
import { letras } from "./consts";
import { Temporizador } from "../temporizador";

export const QuestaoComponent: FC<QuestoesProps> = (props) => {
  const { value, respostaFornecida, tempoEsgotado, tempoPraResposta } = props;

  return (
    <>
      <div className="flex flex-col items-center">
        <Enunciado text={value.enunciado} />
        <Temporizador
          key={value.id}
          duracao={tempoPraResposta ?? 10}
          tempoEsgotado={tempoEsgotado}
        />
        {value.respostas.map((resposta, i) => {
          return (
            <Resposta
              key={`${value.id}-${i}`}
              valor={resposta}
              indice={i}
              letra={letras[i].valor}
              corFundoLetra={letras[i].cor}
              respostaFornecida={respostaFornecida}
            />
          );
        })}
      </div>
    </>
  );
};
