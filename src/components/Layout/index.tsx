import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  youtube: string;
  facebook: string;
  twitter: string;
  instagram: string;
  endereco: string;
};

const Layout: React.FC<Props> = ({ children, youtube, facebook, twitter, instagram, endereco }) => {
  return (
    <div
      className="
      flex
      flex-grow-0
      max-w-5xl
      overflow-y-visible
      mx-auto"
    >
      <div
        className="
        mx-auto
        flex
        flex-col
        flex-grow
        items-center"
      >
        <Header youtube={youtube} facebook={facebook} twitter={twitter} instagram={instagram} />
        <div className="flex flex-col w-full items-center">{children}</div>
        <Footer endereco={endereco} />
      </div>
    </div>
  );
};

export default Layout;
