import { FC } from "react";
import { QuestoesProps } from "./types";
import { Enunciado } from "../enunciado";
import { Resposta } from "../resposta";

export const QuestaoComponent: FC<QuestoesProps> = (props) => {
  const { value } = props;

  return (
    <>
      <div className="flex flex-col items-center">
        <Enunciado text={value.enunciado} />
        {value.respostas.map((resposta, i) => {
          return (
            <Resposta
              corDeFundoLetra="#F2C866"
              indice={i}
              letra="A"
              valor={resposta}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};
