import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(800, 600).parent(canvasRef.current);
        p.background(200);
      };

      p.draw = () => {
        // 描画処理
      };

      p.mousePressed = () => {
        // マウスクリック時の処理
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default App;
