/* eslint-disable import/no-anonymous-default-export */
import questoes from "../bancoDeQuestoes";

export default (req: any, res: any) => {
  const idSelected = +req.query.id;

  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === idSelected
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questionSelected = unicaQuestaoOuNada[0].embaralharRespostas();
    res.status(200).json(questionSelected.paraObjeto());
  } else {
    res.status(204).send();
  }
};
