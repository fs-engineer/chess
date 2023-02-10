import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../models/Player';
import { clearInterval } from 'timers';
import { Colors } from '../models/Colors';

interface TimerProps {
  currentPlayer: Player;
  restart: () => void;
}
const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [whiteTime, setWhiteTime] = useState(300);
  const [blackTime, setBlackTime] = useState(300);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer.color === Colors.WHITE
        ? decrementWhiteTime
        : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  }
  function decrementWhiteTime() {
    setWhiteTime(prev => prev - 1);
  }

  function decrementBlackTime() {
    setBlackTime(prev => prev - 1);
  }

  return (
    <div>
      <button onClick={restart}>Restart game</button>
      <h2>White time: {whiteTime}</h2>
      <h2>Black time: {blackTime}</h2>
    </div>
  );
};

export default Timer;
