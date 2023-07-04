import { useTyping } from './hooks/useTyping';

import AboutPage from './components/About';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Header from './components/Header';
import ModalComponent from './components/Modal';
import ModalContent from './components/ModalContent';
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
    modalIsOpen,
    aboutModal,
    history,
    time,
    results,
    resetCountdown,
    setLocalStorageValue,
    setWordContainerFocused,
    restartTest,
    checkCharacter,
    closeModal,
    openModal,
  } = useTyping();

  return (
    <main className=' mx-auto flex min-h-screen max-w-5xl flex-col gap-4 px-4 text-accent xl:px-0'>
      <Header
        restart={restartTest}
        openAboutModal={openModal}
        closeAboutModal={closeModal}
      />
      <TimeCategory
        time={time}
        setTime={setLocalStorageValue}
        restart={restartTest}
      />
      <Countdown countdown={countdown} reset={resetCountdown} />
      <WordWrapper
        focused={wordContainerFocused}
        setFocused={setWordContainerFocused}
      >
        <WordContainer word={word} />
        <UserTyped word={word} check={checkCharacter} charTyped={charTyped} />
      </WordWrapper>
      <Restart restart={restartTest} />
      <Footer />
      <ModalComponent
        type='result'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ModalContent totalTime={time} results={results} history={history} />
      </ModalComponent>

      <ModalComponent
        type='about'
        isOpen={aboutModal}
        onRequestClose={closeModal}
      >
        <AboutPage />
      </ModalComponent>
    </main>
  );
}

export default App;
