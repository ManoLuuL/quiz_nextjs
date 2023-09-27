import { FC } from "react";
import { BotaoProps } from "./types";
import Link from "next/link";
import styles from "../../styles/botao.module.css";

export const Botao: FC<BotaoProps> = (props) => {
  const { texto, href, onClick } = props;

  return href ? (
    <Link href={href}>
      <>
        <button className={styles.botao} onClick={onClick}>
          {texto}
        </button>
      </>
    </Link>
  ) : (
    <>
      <button className={styles.botao} onClick={onClick}>
        {texto}
      </button>
    </>
  );
};
