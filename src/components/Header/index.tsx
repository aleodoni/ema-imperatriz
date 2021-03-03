import { ImInstagram, ImYoutube, ImFacebook, ImTwitter } from 'react-icons/im';

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
      overflow-hidden
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
  );
};

export default Header;
