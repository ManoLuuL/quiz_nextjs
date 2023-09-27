import { Botao } from "@/components/botao";
import { Estatistica } from "@/components/estatistica";
import { useRouter } from "next/router";
import { FC } from "react";

export const Resultado: FC = () => {
  const router = useRouter();
  // @ts-ignore
  const total = +router?.query?.total;
  // @ts-ignore
  const certas = +router?.query?.certas;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div
      className={"flex flex-col justify-center items-center h-[100vh] text-3xl"}
    >
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo="#9CD2A4" />
        <Estatistica
          texto="Percentual"
          valor={`${percentual}%`}
          corFundo="#DE6A33"
        />
      </div>
      <Botao href="/" texto="Tentar Novamente" />
    </div>
  );
};
