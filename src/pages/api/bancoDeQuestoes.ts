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
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      RespostModel.errada("Caju"),
      RespostModel.errada("Côco"),
      RespostModel.errada("Chuchu"),
      RespostModel.certa("Abóbora"),
    ]
  ),
  new QuestModel(203, "Qual é o coletivo de cães?", [
    RespostModel.errada("Manada"),
    RespostModel.errada("Alcateia"),
    RespostModel.errada("Rebanho"),
    RespostModel.certa("Matilha"),
  ]),
  new QuestModel(204, "Qual é o triângulo que tem todos os lados diferentes?", [
    RespostModel.errada("Equilátero"),
    RespostModel.errada("Isóceles"),
    RespostModel.errada("Trapézio"),
    RespostModel.certa("Escaleno"),
  ]),
  new QuestModel(205, "Quem compôs o Hino da Independência?", [
    RespostModel.errada("Castro Alves"),
    RespostModel.errada("Manuel Bandeira"),
    RespostModel.errada("Carlos Gomes"),
    RespostModel.certa("Dom Pedro I"),
  ]),
  new QuestModel(206, 'Qual é o antônimo de "malograr"?', [
    RespostModel.errada("Perder"),
    RespostModel.errada("Fracassar"),
    RespostModel.errada("Desprezar"),
    RespostModel.certa("Conseguir"),
  ]),
  new QuestModel(207, "Em que país nasceu Carmen Miranda?", [
    RespostModel.errada("Argentina"),
    RespostModel.errada("Espanha"),
    RespostModel.errada("Brasil"),
    RespostModel.certa("Portugal"),
  ]),
  new QuestModel(
    208,
    "Qual foi o último Presidente do período da ditadura militar no Brasil?",
    [
      RespostModel.errada("Costa e Silva"),
      RespostModel.errada("Emílio Médici"),
      RespostModel.errada("Ernesto Geisel"),
      RespostModel.certa("João Figueiredo"),
    ]
  ),
  new QuestModel(
    209,
    "Seguindo a sequência do baralho, qual carta vem depois do dez?",
    [
      RespostModel.errada("Ás"),
      RespostModel.errada("Nove"),
      RespostModel.errada("Rei"),
      RespostModel.certa("Valete"),
    ]
  ),
  new QuestModel(210, 'O adjetivo "venoso" está relacionado a:', [
    RespostModel.errada("Vela"),
    RespostModel.errada("Vento"),
    RespostModel.errada("Vênia"),
    RespostModel.certa("Veia"),
  ]),
  new QuestModel(211, "Que nome se dá à purificação por meio da água?", [
    RespostModel.errada("Abrupção"),
    RespostModel.errada("Abolição"),
    RespostModel.errada("Abnegação"),
    RespostModel.certa("Ablução"),
  ]),
  new QuestModel(
    212,
    "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
    [
      RespostModel.errada("Monte Branco"),
      RespostModel.errada("Monte Fuji"),
      RespostModel.errada("Monte Carlo"),
      RespostModel.certa("Monte Everest"),
    ]
  ),
  new QuestModel(213, "Em que parte do corpo se encontra a epiglote?", [
    RespostModel.errada("Estômago"),
    RespostModel.errada("Pâncreas"),
    RespostModel.errada("Rim"),
    RespostModel.certa("Pescoço"),
  ]),
  new QuestModel(214, "A compensação por perda é chamada de...", [
    RespostModel.errada("Déficit"),
    RespostModel.errada("Indexação"),
    RespostModel.errada("Indébito"),
    RespostModel.certa("Indenização"),
  ]),
  new QuestModel(
    215,
    "Que personagem do folclore brasileiro tem uma perna só?",
    [
      RespostModel.errada("Cuca"),
      RespostModel.errada("Curupira"),
      RespostModel.errada("Boitatá"),
      RespostModel.certa("Saci-pererê"),
    ]
  ),
  new QuestModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    RespostModel.errada("Marechal Deodoro"),
    RespostModel.errada("Barão de Mauá"),
    RespostModel.errada("Marquês de Pombal"),
    RespostModel.certa("Duque de Caxias"),
  ]),
];

export default questoes;
