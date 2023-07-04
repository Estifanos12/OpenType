import { useState } from 'react';

import { useScreenShot } from '../hooks/useScreenShot';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopy } from 'react-icons/io5';
import { FaCameraRetro } from 'react-icons/fa';

import Character from './Character';
import Tooltip from './Tooltip';

import { Results } from '../types';
import { HistoryType } from '../types';

type ModalContentProps = {
  totalTime: number;
  history: HistoryType;
  results: Results;
};

const ModalContent = ({ totalTime, history, results }: ModalContentProps) => {
  const [copied, setCopied] = useState(false);
  const [imageCopied, setImageCopied] = useState(false);

  const { ref, image, getImage } = useScreenShot();

  return (
    <div className='mx-auto flex w-[95%] flex-col font-mono text-accent'>
      <div ref={ref} className='bg-primary px-5 py-7'>
        <div className=' grid grid-flow-col grid-rows-6 justify-center gap-4 sm:grid-rows-4 sm:justify-normal lg:grid-rows-2 lg:justify-normal lg:gap-10'>
          <Tooltip tooltipId='wpm'>
            <div
              className='flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-secondary p-5 print:bg-transparent'
              data-tooltip-content='words per minute / characters per minute'
              data-tooltip-id='wpm'
            >
              <h2 className='text-3xl text-accent'>wpm/cpm</h2>
              <p className='text-3xl text-secondaryAccent'>
                {results.wpm} / {results.cpm}
              </p>
            </div>
          </Tooltip>
          <Tooltip tooltipId='accuracy'>
            <div
              className='flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-secondary'
              data-tooltip-content='accuracy percentage'
              data-tooltip-id='accuracy'
              data-tooltip-place='bottom'
            >
              <h2 className='text-3xl text-accent'>acc.</h2>
              <p className='text-center text-3xl text-secondaryAccent'>
                {Math.round(results.accuracy)}%
              </p>
            </div>
          </Tooltip>
          <Tooltip tooltipId='character' delayHide={200}>
            <div
              className='flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-secondary'
              data-tooltip-content='correct/incorrect'
              data-tooltip-id='character'
            >
              <h2 className='text-3xl text-accent'>character</h2>
              <p className='text-center text-3xl text-secondaryAccent'>
                {Math.round(
                  history.typedHistory.length * (results.accuracy / 100)
                )}{' '}
                /{' '}
                {Math.round(
                  history.typedHistory.length * (results.error / 100)
                )}
              </p>
            </div>
          </Tooltip>
          <Tooltip tooltipId='error'>
            <div
              className='flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-secondary'
              data-tooltip-content='error percentage'
              data-tooltip-id='error'
              data-tooltip-place='bottom'
            >
              <h2 className='inline text-3xl text-accent'>err.</h2>
              <p className='text-center text-3xl text-secondaryAccent'>
                {Math.round(results.error)}%
              </p>
            </div>
          </Tooltip>
          <Tooltip tooltipId='time'>
            <div
              className='flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-secondary'
              data-tooltip-id='time'
              data-tooltip-content='time taken to complete the test'
            >
              <h2 className='inline text-3xl text-accent'>time</h2>
              <p className='text-center text-3xl text-secondaryAccent'>
                {totalTime / 1000}s
              </p>
            </div>
          </Tooltip>
          <Tooltip tooltipId='total'>
            <div
              className='flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-secondary'
              data-tooltip-id='total'
              data-tooltip-content='total characters typed'
              data-tooltip-place='bottom'
            >
              <h2 className='inline text-3xl text-accent'>total</h2>
              <p className='text-center text-3xl text-secondaryAccent'>
                {history.typedHistory.length}
              </p>
            </div>
          </Tooltip>
        </div>
      </div>

      <div className='mt-5 flex flex-col gap-14 px-5'>
        <div>
          <div className='flex items-center gap-2'>
            <h2 className='text-3xl'>watch history</h2>
            <CopyToClipboard
              text={history.typedHistory}
              onCopy={() => {
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            >
              <IoCopy className='cursor-pointer text-xl hover:text-secondaryAccent' />
            </CopyToClipboard>
            <div className='rounded-md  bg-secondary'>
              {copied === true ? <span className='p-5 '>Copied ✅</span> : null}
            </div>
          </div>
          <div className='mt-3 text-xl'>
            {history.typedHistory.split('').map((char, index) => {
              return (
                <Character
                  key={index}
                  character={history.wordHistory[index]}
                  state={history.wordHistory[index] === char}
                />
              );
            })}
          </div>
        </div>

        <div
          className='group flex cursor-pointer items-center gap-2'
          onClick={async () => {
            try {
              getImage();
              const res = await fetch(image);
              const data = await res.blob();
              await navigator.clipboard.write([
                new ClipboardItem({ [data.type]: data }),
              ]);

              setImageCopied(true);
              setTimeout(() => {
                setImageCopied(false);
              }, 2000);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <FaCameraRetro className=' text-2xl group-hover:text-secondaryAccent' />
          <span className='hover:text-secondaryAccent group-hover:text-secondaryAccent group-hover:underline'>
            Screenshot your results and share to your friends🔥
          </span>
          <div className='rounded-md  bg-secondary'>
            {imageCopied === true ? (
              <span className='p-5 '>Image copied to clipboard 😊</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
