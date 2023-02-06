"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineUp,
  AiOutlineDown,
} from "react-icons/ai";
import useInterval from "@use-it/interval";

type Apple = {
  x: number;
  y: number;
};

type Velocity = {
  dx: number;
  dy: number;
};

interface Props {
  isTrue: boolean;
}

const SnakeGame: React.FC<Props> = ({ isTrue }) => {
  const [key, setKey] = useState("");
  // Canvas Settings
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  let canvasWidth = 500;
  if (isTrue) {
    canvasWidth = 380;
  }

  const canvasHeight = 380;
  const canvasGridSize = 20;

  // Game Settings
  const minGameSpeed = 10;
  const maxGameSpeed = 15;

  // Game State
  const [gameDelay, setGameDelay] = useState<number>(1000 / minGameSpeed);
  const [countDown, setCountDown] = useState<number>(4);
  const [running, setRunning] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [highscore, setHighscore] = useState(0);
  const [newHighscore, setNewHighscore] = useState(false);
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState<{
    head: { x: number; y: number };
    trail: Array<any>;
  }>({
    head: { x: 12, y: 9 },
    trail: [],
  });
  const [apple, setApple] = useState<Apple>({ x: -1, y: -1 });
  const [velocity, setVelocity] = useState<Velocity>({ dx: 0, dy: 0 });
  const [previousVelocity, setPreviousVelocity] = useState<Velocity>({
    dx: 0,
    dy: 0,
  });

  const clearCanvas = (ctx: CanvasRenderingContext2D) =>
    ctx.clearRect(-1, -1, canvasWidth + 2, canvasHeight + 2);

  const generateApplePosition = (): Apple => {
    const x = Math.floor(Math.random() * (canvasWidth / canvasGridSize));
    const y = Math.floor(Math.random() * (canvasHeight / canvasGridSize));
    // Check if random position interferes with snake head or trail
    if (
      (snake.head.x === x && snake.head.y === y) ||
      snake.trail.some((snakePart) => snakePart.x === x && snakePart.y === y)
    ) {
      return generateApplePosition();
    }
    return { x, y };
  };

  // Initialise state and start countdown
  const startGame = () => {
    setGameDelay(1000 / minGameSpeed);
    setIsLost(false);
    setScore(0);
    setSnake({
      head: { x: 12, y: 9 },
      trail: [],
    });
    setApple(generateApplePosition());
    setVelocity({ dx: 0, dy: -1 });
    setRunning(true);
    setNewHighscore(false);
    setCountDown(3);
  };

  // Reset state and check for highscore
  const gameOver = () => {
    if (score > highscore) {
      setHighscore(score);
      localStorage.setItem("highscore", score.toString());
      setNewHighscore(true);
    }
    setIsLost(true);
    setRunning(false);
    setVelocity({ dx: 0, dy: 0 });
    setCountDown(4);
  };

  const fillRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.fillRect(x, y, w, h);
  };

  const strokeRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.strokeRect(x + 0.5, y + 0.5, w, h);
  };

  const drawSnake = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#878787";
    ctx.strokeStyle = "#878787";

    fillRect(
      ctx,
      snake.head.x * canvasGridSize,
      snake.head.y * canvasGridSize,
      canvasGridSize,
      canvasGridSize
    );

    strokeRect(
      ctx,
      snake.head.x * canvasGridSize,
      snake.head.y * canvasGridSize,
      canvasGridSize,
      canvasGridSize
    );

    snake.trail.forEach((snakePart) => {
      fillRect(
        ctx,
        snakePart.x * canvasGridSize,
        snakePart.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      );

      strokeRect(
        ctx,
        snakePart.x * canvasGridSize,
        snakePart.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      );
    });
  };
  const drawApple = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#EF4444"; // '#38C172' // '#F4CA64'
    ctx.strokeStyle = "#EF4444"; // '#187741' // '#8C6D1F

    if (
      apple &&
      typeof apple.x !== "undefined" &&
      typeof apple.y !== "undefined"
    ) {
      fillRect(
        ctx,
        apple.x * canvasGridSize,
        apple.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      );

      strokeRect(
        ctx,
        apple.x * canvasGridSize,
        apple.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      );
    }
  };

  // Update snake.head, snake.trail and apple positions. Check for collisions.
  const updateSnake = () => {
    // Check for collision with walls
    const nextHeadPosition = {
      x: snake.head.x + velocity.dx,
      y: snake.head.y + velocity.dy,
    };
    if (
      nextHeadPosition.x < 0 ||
      nextHeadPosition.y < 0 ||
      nextHeadPosition.x >= canvasWidth / canvasGridSize ||
      nextHeadPosition.y >= canvasHeight / canvasGridSize
    ) {
      gameOver();
    }

    // Check for collision with apple
    if (nextHeadPosition.x === apple.x && nextHeadPosition.y === apple.y) {
      setScore((prevScore) => prevScore + 1);
      setApple(generateApplePosition());
    }

    const updatedSnakeTrail = [...snake.trail, { ...snake.head }];
    // Remove trail history beyond snake trail length (score + 2)
    while (updatedSnakeTrail.length > score + 2) updatedSnakeTrail.shift();
    // Check for snake colliding with itsself
    if (
      updatedSnakeTrail.some(
        (snakePart) =>
          snakePart.x === nextHeadPosition.x &&
          snakePart.y === nextHeadPosition.y
      )
    )
      gameOver();

    // Update state
    setPreviousVelocity({ ...velocity });
    setSnake({
      head: { ...nextHeadPosition },
      trail: [...updatedSnakeTrail],
    });
  };

  // Game Hook
  useEffect(() => {
    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext("2d");

    if (ctx && !isLost) {
      clearCanvas(ctx);
      drawApple(ctx);
      drawSnake(ctx);
    }
  }, [snake]);

  // Game Update Interval
  useInterval(
    () => {
      if (!isLost) {
        updateSnake();
      }
    },
    running && countDown === 0 ? gameDelay : null
  );

  // Countdown Interval
  useInterval(
    () => {
      setCountDown((prevCountDown) => prevCountDown - 1);
    },
    countDown > 0 && countDown < 4 ? 800 : null
  );

  // DidMount Hook for Highscore
  useEffect(() => {
    setHighscore(
      localStorage.getItem("highscore")
        ? parseInt(localStorage.getItem("highscore")!)
        : 0
    );
  }, []);

  // Score Hook: increase game speed starting at 16
  useEffect(() => {
    if (score > minGameSpeed && score <= maxGameSpeed) {
      setGameDelay(1000 / score);
    }
  }, [score]);

  const simulateKeyPress = (key: string) => {
    const event = new KeyboardEvent("keydown", {
      key: key,
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);
  };

  // Event Listener: Key Presses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "w",
          "a",
          "s",
          "d",
          "r",
        ].includes(e.key)
      ) {
        let velocity = { dx: 0, dy: 0 };

        switch (e.key) {
          case "ArrowRight":
            velocity = { dx: 1, dy: 0 };
            break;
          case "ArrowLeft":
            velocity = { dx: -1, dy: 0 };
            break;
          case "ArrowDown":
            velocity = { dx: 0, dy: 1 };
            break;
          case "ArrowUp":
            velocity = { dx: 0, dy: -1 };
            break;
          case "d":
            velocity = { dx: 1, dy: 0 };
            break;
          case "a":
            velocity = { dx: -1, dy: 0 };
            break;
          case "s":
            velocity = { dx: 0, dy: 1 };
            break;
          case "w":
            velocity = { dx: 0, dy: -1 };
            break;
          case "r":
            startGame();
            break;
          default:
            console.error("Error with handleKeyDown");
        }
        if (
          !(
            previousVelocity.dx + velocity.dx === 0 &&
            previousVelocity.dy + velocity.dy === 0
          )
        ) {
          setVelocity(velocity);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [previousVelocity]);

  return (
    <>
      <div className=" bg-gray-800 text-white w-screen h-screen">
        <main>
          <div className="flex justify-center pt-10">
            <canvas
              className=" rounded-md border"
              ref={canvasRef}
              width={canvasWidth + 1}
              height={canvasHeight + 1}
            />
          </div>
          <section>
            <div className="flex justify-center">
              <p className="p-2">Score: {score}</p>
              <p className="p-2">
                Highscore: {highscore > score ? highscore : score}
              </p>
            </div>
            {!isLost && countDown > 0 ? (
              <div className="flex justify-center">
                <button
                  onClick={startGame}
                  className=" rounded-lg p-1 px-2 border"
                >
                  {countDown === 4 ? "Start Game" : countDown}
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          {isLost && (
            <div className="flex  justify-center items-center">
              <div className="flex flex-row just items-center">
                <div className="flex flex-col">
                  <div className="rounded-md border-white border p-2">
                    <p className="bg-red-500 text-center rounded-md  ">
                      Game Over
                    </p>
                    <p className="final-score">
                      {newHighscore
                        ? ` New Highscore !!!`
                        : `You scored: ${score}`}
                    </p>
                  </div>
                  {!running && isLost && (
                    <button
                      className="flex justify-center text-center bg-red-500 mt-5 p-2 rounded-xl border"
                      onClick={startGame}
                    >
                      {countDown === 4 ? "Restart Game" : countDown}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          <div>
            {isTrue && !isLost && (
              <div className="flex justify-end pt-10 mr-4">
                <div className=" m-4 flex w-40  right-10  flex-col justify-center p-2 border-white border rounded-lg items-center">
                  <div className="flex justify-center w-20 h-14">
                    <AiOutlineUp
                      onClick={() => simulateKeyPress("w")}
                      height={28}
                      className="w-10 h-10"
                      width={28}
                    />
                  </div>
                  <div className="flex flex-row">
                    <AiOutlineLeft
                      onClick={() => simulateKeyPress("a")}
                      height={28}
                      width={28}
                      className="w-10 h-10"
                    />
                    <AiOutlineDown
                      onClick={() => simulateKeyPress("s")}
                      height={28}
                      width={28}
                      className="w-10 h-10"
                    />
                    <AiOutlineRight
                      onClick={() => simulateKeyPress("d")}
                      height={28}
                      width={28}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default SnakeGame;
