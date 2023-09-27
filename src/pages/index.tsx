import { Questionario } from "@/components/questionario";
import QuestModel from "@/model/quest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const BASE_URL = "http://localhost:3000/api";
  const router = useRouter();

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestModel>();
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  const carregarIdsDasQuestoes = async () => {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    setIdsDasQuestoes(idsDasQuestoes);
  };

  const carregarQuestao = async (idQuestao: number) => {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  };

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  const questaoRespondida = (questaoRespondida: QuestModel) => {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  };

  const idProximaPergunta = () => {
    const proximoIndice = idsDasQuestoes.indexOf(questao?.id ?? 0) + 1;
    return idsDasQuestoes[proximoIndice];
  };

  const finalizar = () => {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas,
      },
    });
  };

  const irPraProximaQuestao = (proximoId: number) => {
    carregarQuestao(proximoId);
  };

  const irPraProximoPasso = () => {
    const proximoId = idProximaPergunta();
    proximoId ? irPraProximaQuestao(proximoId) : finalizar();
  };

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  ) : (
    false
  );
}
