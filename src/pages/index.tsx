import { NextPage, GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import { client } from '@/util/api';

type PrincipalType = {
  title: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  background: string;
  youtube: string;
  facebook: string;
  twitter: string;
  instagram: string;
};

const IndexPage: NextPage<PrincipalType> = (principal: PrincipalType) => {
  const style = {
    backgroundImage: `url(${principal.background})`,
  };

  return (
    <Layout
      youtube={principal.youtube}
      facebook={principal.facebook}
      twitter={principal.twitter}
      instagram={principal.instagram}
    >
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col w-auto ">
          <div className="flex flex-col px-4 xs:text-5xl sm:text-8xl font-bold text-gray-50">
            <span className="py-4">{principal.title.line1}</span>
            <span>{principal.title.line2}</span>
          </div>
          <div className="flex flex-col w-auto px-5 xs:text-base sm:text-2xl font-bold text-gray-50">
            <span className="py-4">{principal.subtitle}</span>
          </div>
        </div>
        <span
          className="flex-grow bg-cover bg-center w-full max-h-80 opacity-40 m-5"
          style={style}
        ></span>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const info = await client().getSingle('principal', {});

  const title = info.data.titulo[0].text;
  const titleArray = title.split(' ');

  const subtitle = info.data.subtitulo[0].text;

  const background = info.data.background.url;

  const youtube = info.data.youtube.url;
  const facebook = info.data.facebook.url;
  const twitter = info.data.twitter.url;
  const instagram = info.data.instagram.url;

  return {
    props: {
      title: {
        line1: titleArray[0],
        line2: titleArray[1],
      },
      subtitle,
      background,
      youtube,
      facebook,
      twitter,
      instagram,
    },
    revalidate: 60,
  };
};

export default IndexPage;
