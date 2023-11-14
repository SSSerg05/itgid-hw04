import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  const selectRef = React.createRef();
  const blockRef7 = React.createRef();
  const inputRef8 = React.createRef();
  const inputRef10 = React.createRef();

  const [selectOut, setSelectOut] = useState('');
  const [bgcBlock, setBgcBlock] = useState({r:0, g:0, b:0});
  const [out8, setOut8] = useState('');
  const [out9, setOut9] = useState(0);

  function task1() {
    console.log('task2');
  }

  function task2() {
    const t2 = document.querySelector('.task-2');
    t2.classList.add('active')
  }

  function task3(e) {
    const val = e.target.value;
    console.log('task3',val);
  }

  function task4() {
    count4++;
    console.log('task4',count4);
  }
  
  function task5(e) {
    const out = document.querySelector('.out-5');
    const ch = e.target;
    out.innerHTML = ch.checked ? ch.value : 0;
  }
  
  function task6(e) {
    const val = selectRef.current.value; 
    setSelectOut(val);
  }

  function task7() {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    setBgcBlock({
      r: getRandomInt(0, 255),
      g: getRandomInt(0, 255),
      b: getRandomInt(0, 255)
    });
    const {r,g,b} = bgcBlock;
    blockRef7.current.style.backgroundColor = `rgb(${r},${g},${b})`;
  }

  function task8() {
    const val = inputRef8.current.value;

    if (!val.length) {
      setOut8('');
      return;
    }

    const last = val.charCodeAt(val.length-1);
    const rest = last > 47 && last < 59 ? '1': '0';

    if (out8.length > val.length) {
      setOut8((r)=> r.slice(0, -1));
      return;
    }

    setOut8((r) => r + rest);
  }

  function task9(e) {
    const val = e.target.value;
    setOut9(val);
  }

  let ar10 = [5, 6, 7];
  function task10() {
    const val = inputRef10.current.value.trim();
    if (val === '') {
      return
    }

    ar10.push(+val);
    inputRef10.current.value = '';
    console.log('task10', ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>

      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>

      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={(e)=>task3(e)}/>
      </section>

      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>

      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} />
        <div className="out-5"></div>
      </section>

      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={selectRef}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{selectOut}</div>
      </section>

      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={blockRef7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>

      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyUp={task8} ref={inputRef8}></input>
        <div className="out-8">{out8}</div>
      </section>

      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9">{out9}</div>
      </section>

      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={inputRef10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
