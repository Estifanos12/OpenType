import { BiLogoTelegram } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const AboutPage = () => {
  return (
    <div className='m-auto flex h-[90%] w-[90%] flex-col gap-7 py-10 font-mono text-lg'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-3xl font-bold'>About OpenType</h1>
        <p className=''>
          OpenType is a minimalistic typing speed testing app built with React
          and TailwindCSS that highly inspired by{' '}
          <a
            href='http://www.monkeytype.com'
            target='_blank'
            className='hover:underline'
          >
            MonkeyType
          </a>
          . The app allows users to test and improve their typing speed and
          accuracy. The app provides a user-friendly interface and intuitive
          feedback on typing performance.
        </p>
      </div>
      <div className='mb-5 flex flex-col gap-3'>
        <h2 className='text-2xl font-bold'>Current Features</h2>
        <ul className='list-inside list-none space-y-2'>
          <li>
            <strong className='italic'>Typing Test</strong>: Users can take a
            typing test to measure their typing speed and accuracy. The test
            includes random sentences/paragraphs, and the user's typing speed is
            calculated in words per minute (WPM).
          </li>
          <li>
            <strong className='italic'>Time Category</strong>: Users can adjust
            typing duration to 15s, 30s, or 60s according to their preference.
          </li>
          <li>
            <strong className='italic'>Statistics</strong>: The app displays
            statistics such as WPM/CPM, accuracy percentage, error percentage
            and total number of characters typed.
          </li>
          <li>
            <strong className='italic'>Watch Typing History</strong>: Users can
            watch their previous typing history and access their performance.
          </li>
          <li>
            <strong className='italic'>Responsive Design</strong>: The user
            interface is designed to be responsive and adapt to different screen
            sizes, making it accessible on various laptops or PCs.
          </li>
        </ul>
      </div>

      <div className=' mt-auto flex flex-col gap-1'>
        <div className='flex items-center gap-3'>
          <BiLogoTelegram className='text-xl font-bold' />
          <h2 className='text-xl font-bold'>Contact:</h2>
          <a
            href='http://t.me/estif1727'
            target='_blank'
            className='hover:underline'
            rel='noopener noreferrer'
          >
            Telegram
          </a>
          ,
          <a
            href='https://wa.link/e3397e'
            target='_blank'
            className='hover:underline'
            rel='noopener noreferrer'
          >
            Whatsapp
          </a>
        </div>
        <div className='flex items-center gap-3'>
          <BsGithub className='text-xl font-bold' />
          <h2 className='text-xl font-bold'>Source code:</h2>
          <a
            href='http://github.com/Estifanos12/OpenType'
            target='_blank'
            className='hover:underline'
            rel='noopener noreferrer'
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
