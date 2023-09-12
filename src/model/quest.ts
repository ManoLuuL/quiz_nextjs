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
    this.#acertou = acertou;
    this.#enunciado = enunciado;
    this.#id = id;
    this.#respostas = respostas;
  }

  get id() {
    return this.#id;
  }

  get enunciado() {
    return this.#enunciado;
  }

  get acertou() {
    return this.#acertou;
  }

  get respostas() {
    return this.#respostas;
  }

  get respondidas() {
    for (let resposta of this.#respostas) {
      if (resposta.revelada) return true;
    }
    return false;
  }

  toObject() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respostas: this.#respostas.map((resp) => resp.toObject()),
      acertou: this.#acertou,
    };
  }
}
