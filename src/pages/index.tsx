import { QuestaoComponent } from "@/components/questoes/questoes";
import QuestModel from "@/model/quest";
import RespostModel from "@/model/respost";

export default function Home() {
  const questTest = new QuestModel(1, "Teste mesmo?", [
    RespostModel.errada("Verde"),
    RespostModel.errada("Rosa"),
    RespostModel.errada("Azul"),
    RespostModel.certa("Vermelho"),
  ]);

  return (
    <div className="flex justify-center h-screen items-center">
      <QuestaoComponent value={questTest} />
    </div>
  );
}
