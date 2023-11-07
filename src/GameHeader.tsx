import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
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
      {Array.from({ length: 6 }, (_, index) => (
        <CasinoOutlinedIcon
          className="spin-and-scale"
          key={index}
          fontSize="large"
        />
      ))}
    </>
  );
};

export default GameHeader;
