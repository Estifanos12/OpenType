import { useState } from 'react';

import { useCountdown } from './hooks/useCountdown';
import { useWord } from './hooks/useWord';
import { useKeyDown } from './hooks/useKeyDown';

import Countdown from './components/Countdown';
import Header from './components/Header';
import TimeCategory from './components/TimeCategory';
import WordContainer from './components/WordContainer';
import Restart from './components/Restart';
import Footer from './components/Footer';

function App() {
  const [time, setTime] = useState(15000);
  const [wordContainerFocused, setWordContainerFocused] = useState(false);
  const { countdown, resetCountdown } = useCountdown(time);
  const { word, updateWord } = useWord(100);
  const { charTyped } = useKeyDown(wordContainerFocused);

  console.log(charTyped);
  return (
    <div className='h-full text-accent'>
      <main className=' max-w-5xl mx-auto px-4 xl:px-0'>
        <Header reset={resetCountdown} updateWords={updateWord} />
        <TimeCategory setTime={setTime} updateWords={updateWord} />
        <Countdown countdown={countdown} reset={resetCountdown} />
        <WordContainer
          word={word}
          focused={wordContainerFocused}
          setFocused={setWordContainerFocused}
        />
        <Restart restart={resetCountdown} updateWords={updateWord} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
