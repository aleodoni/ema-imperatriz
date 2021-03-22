import { ImInstagram, ImYoutube, ImFacebook, ImTwitter } from 'react-icons/im';
import Link from 'next/link';

type Props = {
  youtube: string;
  facebook: string;
  twitter: string;
  instagram: string;
};

const Header: React.FC<Props> = ({ youtube, facebook, twitter, instagram }) => {
  return (
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
        <div className="flex items-center xs:text-xl md:text-xl transition duration-300 ease-in-out hover:text-white cursor-pointer">
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
        justify-end
        h-20
        px-4
        bg-gray-800"
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
  );
};

export default Header;
