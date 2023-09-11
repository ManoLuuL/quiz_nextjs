export default class QuestModel {
  #id: number;
  #enunciado: string;
  #respostas: any[];
  #acertou: boolean;
  // #respondidas: boolean

  constructor(id: number, enunciado: string, respostas: any, acertou = false) {
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
    return false;
  }
}
