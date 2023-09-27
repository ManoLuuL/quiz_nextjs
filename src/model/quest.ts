import { Embaralhar } from "@/functions/array";
import RespostModel from "./respost";

export default class QuestModel {
  #id: number;
  #enunciado: string;
  #respostas: RespostModel[];
  #acertou: boolean;

  constructor(
    id: number,
    enunciado: string,
    respostas: RespostModel[],
    acertou = false
  ) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
  }

  get id() {
    return this.#id;
  }

  get enunciado() {
    return this.#enunciado;
  }

  get respostas() {
    return this.#respostas;
  }

  get acertou() {
    return this.#acertou;
  }

  get naoRespondida() {
    return !this.respondida;
  }

  get respondida() {
    for (let resposta of this.#respostas) {
      if (resposta.revelada) return true;
    }
    return false;
  }

  responderCom(indice: number): QuestModel {
    const acertou = this.#respostas[indice]?.certa;
    const respostas = this.#respostas.map((resposta, i) => {
      const respostaSelecionada = indice === i;
      const deveRevelar = respostaSelecionada || resposta.certa;
      return deveRevelar ? resposta.revelar() : resposta;
    });
    return new QuestModel(this.id, this.enunciado, respostas, acertou);
  }

  embaralharRespostas(): QuestModel {
    let respostasEmbaralhadas = Embaralhar(this.#respostas);
    return new QuestModel(
      this.#id,
      this.#enunciado,
      respostasEmbaralhadas,
      this.#acertou
    );
  }

  static criarUsandoObjeto(obj: QuestModel): QuestModel {
    const respostas = obj.respostas.map((resp) =>
      RespostModel.criarUsandoObjeto(resp)
    );
    return new QuestModel(obj.id, obj.enunciado, respostas, obj.acertou);
  }

  paraObjeto() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respondida: this.respondida,
      acertou: this.#acertou,
      respostas: this.#respostas.map((resp) => resp.paraObjeto()),
    };
  }
}
