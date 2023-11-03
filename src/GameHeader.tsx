import CasinoIcon from "@mui/icons-material/Casino";
import { GameState } from "./GameState";
import { FC } from "react";

interface IGameHeaderProps {
  gameState: GameState;
}

const GameHeader: FC<IGameHeaderProps> = ({ gameState }) => {
  if (gameState === "STARTED") return null;
  return (
    <>
      <CasinoIcon />
      <CasinoIcon />
      <CasinoIcon />
      <CasinoIcon />
      <CasinoIcon />
      <CasinoIcon />
    </>
  );
};

export default GameHeader;
