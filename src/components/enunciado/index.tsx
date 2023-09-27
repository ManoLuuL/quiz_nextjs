import { FC } from "react";
import { EnunciadoProps } from "./types";

export const Enunciado: FC<EnunciadoProps> = (props) => {
  const { text } = props;

  return (
    <div className="flex">
      <span className="text-xl font-bold">{text}</span>
    </div>
  );
};
