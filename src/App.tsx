import React, {CSSProperties, useState} from 'react';
import './App.css';
import {GameState} from "./GameState";
import {Button, Container, Stack} from "@mui/material";
import GameHeader from "./GameHeader";
import PlayerCreation from "./PlayerCreation";


function App() {
    const [gameState, setGameState] = useState<GameState>(GameState.NEW);

    return (
        <Container maxWidth="sm">
            <Stack
                spacing={{xs: 1, sm: 2}}
                justifyContent="center"
                alignItems="center"
                useFlexGap>
                <GameHeader/>
                <div>
                    {gameState === GameState.NEW && (
                        <Button onClick={() => setGameState(GameState.PLAYER_CREATION)}>
                            Start
                        </Button>
                    )}
                    {gameState === GameState.PLAYER_CREATION && (
                        <PlayerCreation/>
                    )}
                </div>
            </Stack>
        </Container>
    );
}

export default App;
