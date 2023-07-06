import { useDropdown } from '../hooks/useDropdown';
import { useThemeContext } from '../hooks/useTheme';

import { theme } from '../utils';

const ThemeDropdown = () => {
  const { dropdownRef, isOpen, toggleDropdown } = useDropdown();
  const { systemTheme, setTheme } = useThemeContext();

  return (
    <>
      <div className='flex rounded-md font-mono'>
        <div className='relative' ref={dropdownRef}>
          <button
            type='button'
            className={`inline-flex h-full items-center justify-center rounded-md border-0 px-2 outline-0`}
            style={{
              backgroundColor: systemTheme.background.secondary,
              border: `1px solid ${systemTheme.text.secondary}`,
            }}
            onClick={() => toggleDropdown()}
          >
            <div className='flex items-center gap-2'>
              <div
                style={{ backgroundColor: systemTheme.background.primary }}
                className={`aspect-square w-3 rounded-full`}
              ></div>
              <div
                style={{ backgroundColor: systemTheme.text.primary }}
                className={`aspect-square w-3 rounded-full`}
              ></div>
              <div
                style={{ backgroundColor: systemTheme.text.secondary }}
                className={`aspect-square w-3 rounded-full`}
              ></div>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ml-3 h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>

          <div
            className='absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md shadow-lg'
            style={{
              backgroundColor: systemTheme.background.secondary,
              border: `1px solid ${systemTheme.text.secondary}`,
              display: isOpen ? 'block' : 'none',
            }}
          >
            <ul
              className={`divide-y divide-slate-400`}
              style={{ color: systemTheme.text.title }}
            >
              {Object.keys(theme).map((key) => (
                <li
                  key={key}
                  className='flex cursor-pointer items-center justify-between p-3 text-sm'
                  onClick={() => {
                    setTheme(theme[key as keyof typeof theme]);
                  }}
                >
                  <span>{theme[key as keyof typeof theme].name}</span>
                  <div className='flex items-center gap-2'>
                    <div
                      style={{
                        backgroundColor:
                          theme[key as keyof typeof theme].background.primary,
                      }}
                      className={`aspect-square w-3 rounded-full`}
                    ></div>
                    <div
                      style={{
                        backgroundColor:
                          theme[key as keyof typeof theme].text.primary,
                      }}
                      className={`aspect-square w-3 rounded-full`}
                    ></div>
                    <div
                      style={{
                        backgroundColor:
                          theme[key as keyof typeof theme].text.secondary,
                      }}
                      className={`aspect-square w-3 rounded-full`}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeDropdown;
