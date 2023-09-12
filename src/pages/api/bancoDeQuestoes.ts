import QuestModel from "@/model/quest";
import RespostModel from "@/model/respost";

const questoes: QuestModel[] = [
  new QuestModel(306, "Qual bicho transmite a Doença de Chagas?", [
    RespostModel.errada("Abelha"),
    RespostModel.errada("Barata"),
    RespostModel.errada("Pulga"),
    RespostModel.certa("Barbeiro"),
  ]),
  new QuestModel(
    102,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      RespostModel.errada("Caju"),
      RespostModel.errada("Côco"),
      RespostModel.errada("Chuchu"),
      RespostModel.certa("Abóbora"),
    ]
  ),
];

export default questoes;
