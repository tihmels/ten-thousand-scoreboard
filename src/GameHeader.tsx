import CasinoIcon from "@mui/icons-material/Casino";
import { GameState } from "./GameState";
import { FC } from "react";
import "./GameHeader.css";

interface IGameHeaderProps {
  gameState: GameState;
}

const GameHeader: FC<IGameHeaderProps> = ({ gameState }) => {
  if (gameState === "STARTED") return null;
  return (
    <>
      <CasinoIcon className="spin-and-scale" />
      <CasinoIcon className="spin-and-scale" />
      <CasinoIcon className="spin-and-scale" />
      <CasinoIcon className="spin-and-scale" />
      <CasinoIcon className="spin-and-scale" />
      <CasinoIcon className="spin-and-scale" />
    </>
  );
};

export default GameHeader;
