import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import './test.css'

gsap.registerPlugin(Flip);

const parents = [
  '2b332ab5-f515-4155-b018-c4508e56dbfa',
  '59e8855a-7bfe-4b8a-aa78-a0b7ec01da0a',
  'bafec336-11fc-49f3-9b01-b5650b34ec18',
];

function App() {
  const [parentIndex, setParentIndex] = useState(0);
  const flipState = useRef();
  const childRef = useRef();
  const container = useRef();

  const handleClick = () => {
    flipState.current = Flip.getState(childRef.current);
    setParentIndex(parentIndex === parents.length - 1 ? 0 : parentIndex + 1);
  };

  useLayoutEffect(() => {
    if (!flipState.current) return;
    Flip.from(flipState.current, {
      duration: 1,
      targets: [childRef.current],
    });
  }, [parentIndex]);

  return (
    <section className="section green">
      <h1>GSAP Reparenting Flip & React</h1>
      <div className="buttons">
        <button onClick={handleClick}>Re-Parent</button>
      </div>
      <div className="container" ref={container}>
        {parents.map((parent, i) => (
          <div className="parent" >
            <div className="guide">GUIDE-{i}</div>
            {i === parentIndex && (
              <div
                className="child blue"
                ref={childRef}
                data-flip-id="test"
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
