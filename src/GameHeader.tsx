import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import { GameState } from "./GameState";
import { FC } from "react";
import "./GameHeader.css";

interface IGameHeaderProps {
  gameState: GameState;
  numberOfIcons?: number;
}

const GameHeader: FC<IGameHeaderProps> = ({ gameState, numberOfIcons = 6 }) => {
  if (gameState === "STARTED") return null;
  return (
    <>
      {[...Array(numberOfIcons)].map((_, index) => (
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
