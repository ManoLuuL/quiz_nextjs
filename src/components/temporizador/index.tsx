import { FC } from "react";
import { TemporizadorProps } from "./types";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const Temporizador: FC<TemporizadorProps> = (props) => {
  const { duracao, tempoEsgotado } = props;

  return (
    <>
      <div className="flex mt-5 mb-5 text-4xl">
        <CountdownCircleTimer
          duration={duracao}
          size={120}
          isPlaying
          onComplete={tempoEsgotado}
          // @ts-ignore
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </>
  );
};
