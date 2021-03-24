import { ImInstagram, ImYoutube, ImFacebook, ImTwitter } from 'react-icons/im';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

type Props = {
  youtube: string;
  facebook: string;
  twitter: string;
  instagram: string;
};

const Header: React.FC<Props> = ({ youtube, facebook, twitter, instagram }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="
      flex
      items-center
      justify-end
      w-full
      h-20
      px-4
      bg-gray-800"
      >
        <div className="flex items-center w-full text-gray-200 font-bold">
          <span className="flex items-center xs:text-2xl md:text-3xl pr-20">Ema Imperatriz</span>

          <div className="xs:hidden md:flex w-full items-center xs:text-xl md:text-xl transition duration-300 ease-in-out hover:text-white cursor-pointer ">
            <Link href="/">
              <span className="pr-5">Home</span>
            </Link>
            <Link href="/atendimento">
              <span className="pr-5">Atendimento</span>
            </Link>
          </div>
        </div>
        <div
          className="
        flex
        items-center
        justify-end"
        >
          <span className="text-gray-200 pl-4">
            <a href={youtube} target="_blank" rel="noreferrer">
              <ImYoutube className="btn-media" />
            </a>
          </span>
          <span className="text-gray-200 pl-4">
            <a href={facebook} target="_blank" rel="noreferrer">
              <ImFacebook className="btn-media" />
            </a>
          </span>
          <span className="text-gray-200 pl-4">
            <a href={twitter} target="_blank" rel="noreferrer">
              <ImTwitter className="btn-media" />
            </a>
          </span>
          <span className="text-gray-200 pl-4">
            <a href={instagram} target="_blank" rel="noreferrer">
              <ImInstagram className="btn-media" />
            </a>
          </span>
        </div>
      </div>
      <div className="inset-y-0 left-0 flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center  p-4 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white w-full justify-end"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/">
                <span className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </span>
              </Link>

              <Link href="/atendimento">
                <span className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Atendimento
                </span>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Header;
