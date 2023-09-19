import { FC } from "react";
import { QuestoesProps } from "./types";

export const QuestaoComponent: FC<QuestoesProps> = (props) => {
  const { value } = props;

  return (
    <>
      <div className="flex">
        <h1>Questoes</h1>
      </div>
    </>
  );
};
