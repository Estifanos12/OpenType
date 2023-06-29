import { useState } from 'react';
import { useCountdown } from './hooks/useCountdown';
import { useWord } from './hooks/useWord';

import Countdown from './components/Countdown';
import Header from './components/Header';
import TimeCategory from './components/TimeCategory';
import WordContainer from './components/WordContainer';
import Restart from './components/Restart';

function App() {
  const [time, setTime] = useState(15000);
  const { countdown, resetCountdown } = useCountdown(time);
  const { word, updateWord } = useWord(50);

  return (
    <div className='bg-primary min-h-screen text-accent'>
      <main className=' max-w-5xl mx-auto px-4 xl:px-0'>
        <Header reset={resetCountdown} updateWords={updateWord} />
        <TimeCategory setTime={setTime} updateWords={updateWord} />
        <Countdown countdown={countdown} reset={resetCountdown} />
        <WordContainer word={word} />
        <Restart restart={resetCountdown} updateWords={updateWord} />
      </main>
    </div>
  );
}

export default App;
