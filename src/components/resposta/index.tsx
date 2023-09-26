import { FC } from "react";
import { RespostaProps } from "./types";

export const Resposta: FC<RespostaProps> = (props) => {
  const { corDeFundoLetra, indice, letra, valor } = props;

  return (
    <div className="flex">
      {/*  conteudo da resposta*/}
      <div className="">
        {/* frente */}
        <div className="">
          <div
            className="h-10 w-10 flex justify-center items-center"
            style={{ background: corDeFundoLetra }}
          >
            {letra}
          </div>
          <div className="">{valor.valor}</div>
        </div>
        {/* verso */}
        <div className=""></div>
      </div>
    </div>
  );
};
