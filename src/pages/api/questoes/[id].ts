/* eslint-disable import/no-anonymous-default-export */
import questoes from "../bancoDeQuestoes";

export default (req: any, res: any) => {
  const idSelected = +req.query.id;

  const questSelected = questoes.filter((questao) => questao.id === idSelected);

  if (questSelected.length === 1) {
    const questSelect = questSelected[0].embaralharRespostas();
    const obj = questSelect.responderCom(0).toObject();
    res.status(200).json(obj);
  } else {
    res.status(204).send();
  }
};
