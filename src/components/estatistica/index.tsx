import { FC } from "react";
import { EstatisticaProps } from "./types";

export const Estatistica: FC<EstatisticaProps> = (props) => {
  const { texto, valor, corFonte, corFundo } = props;

  return (
    <div className={"flex flex-col items-center m-3"}>
      <div
        className={
          "flex justify-center items-center h-[180px] w-[180px] text-6xl rounded-[90px]"
        }
        style={{
          backgroundColor: corFundo ?? "#FDD60F",
          color: corFonte ?? "#333",
        }}
      >
        {valor}
      </div>
      <div className={"text-3xl text-black font-extralight"}>{texto}</div>
    </div>
  );
};
