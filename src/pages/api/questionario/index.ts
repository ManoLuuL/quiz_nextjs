/* eslint-disable import/no-anonymous-default-export */
import { Embaralhar } from "@/functions/array";
import questoes from "../bancoDeQuestoes";

export default (req: any, res: any) => {
  const ids = questoes.map((questao) => questao.id);
  res.status(200).json(Embaralhar(ids));
};
