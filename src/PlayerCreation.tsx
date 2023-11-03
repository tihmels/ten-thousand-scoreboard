import { FC, useRef } from "react";
import { Box, TextField } from "@mui/material";
import { Player } from "./Player";

type PlayerCreationProps = {
  players: Player[];
  onAddPlayer: (player: Player) => void;
  onPlayerChange: (player: Player, partialPlayer: Partial<Player>) => void;
  onRemovePlayer: (Player: Player) => void;
  onStartGame: () => void;
};

const PlayerCreation: FC<PlayerCreationProps> = ({
  players,
  onAddPlayer,
  onPlayerChange,
  onRemovePlayer, // Added this line
  onStartGame,
}) => {
  const inputRef = useRef(null);

  return <TextField id="outlined-basic" label="Outlined" variant="outlined" />;
};

export default PlayerCreation;
