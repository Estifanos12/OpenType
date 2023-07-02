import { useTyping } from './hooks/useTyping';

import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Header from './components/Header';
import ModalComponent from './components/Modal';
import ModalContent from "./components/ModalContent";
import Restart from './components/Restart';
import TimeCategory from './components/TimeCategory';
import UserTyped from './components/UserTyped';
import WordContainer from './components/WordContainer';
import WordWrapper from './components/WordWrapper';

function App() {
  const {
    charTyped,
    countdown,
    word,
    wordContainerFocused,
    resetCountdown,
    setTime,
    setWordContainerFocused,
    restartTest,
    checkCharacter,
    modalIsOpen,
    closeModal,
    openModal,
  } = useTyping();

  return (
    <main className=' max-w-5xl min-h-screen flex flex-col gap-4 text-accent mx-auto px-4 xl:px-0'>
      <Header restart={restartTest} />
      <TimeCategory setTime={setTime} restart={restartTest} />
      <Countdown countdown={countdown} reset={resetCountdown} />
      <WordWrapper
        focused={wordContainerFocused}
        setFocused={setWordContainerFocused}
      >
        <WordContainer word={word} />
        <UserTyped word={word} check={checkCharacter} charTyped={charTyped} />
      </WordWrapper>
      <Restart restart={restartTest} />
      <button onClick={() => openModal()}>open</button>
      <Footer />
      <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalContent />
      </ModalComponent>
    </main>
  );
}

export default App;
