import Header from 'components/Header';

type Props = {
  youtube: string;
  facebook: string;
  twitter: string;
  instagram: string;
};

const Layout: React.FC<Props> = ({ children, youtube, facebook, twitter, instagram }) => {
  return (
    <div
      className="
      max-w-5xl
      mx-auto"
    >
      <div
        className="
        mx-auto
        flex
        flex-col
        items-center
        min-h-screen
        overflow-hidden
        bg-gray-800"
      >
        <Header youtube={youtube} facebook={facebook} twitter={twitter} instagram={instagram} />
        <div className="flex flex-1 h-full w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
