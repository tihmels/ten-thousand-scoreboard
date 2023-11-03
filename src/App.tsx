import React, { CSSProperties, useState } from "react";
import "./App.css";
import { GameState } from "./GameState";
import { Box, Button, Container, CssBaseline, Stack } from "@mui/material";
import { Player } from "./Player";
import GameHeader from "./GameHeader";

function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.NEW);
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (player: Player) => {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  const removePlayer = (player: Player) => {
    const newPlayers = players.filter((p) => p == player);

    setPlayers(newPlayers);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          justifyContent="center"
          alignItems="center"
          useFlexGap
        >
          <header>
            <Box sx={{ my: 3 }}>
              <GameHeader gameState={gameState} />
            </Box>
          </header>
          <main>
            {gameState === GameState.NEW && (
              <Button onClick={() => setGameState(GameState.PLAYER_CREATION)}>
                Start
              </Button>
            )}
            {gameState === GameState.PLAYER_CREATION && <></>}
          </main>
        </Stack>
      </Container>
    </>
  );
}

export default App;
