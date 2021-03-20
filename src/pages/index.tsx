import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import ReactHtmlParser from 'react-html-parser';
import PrismicDOM from 'prismic-dom';

import Layout from '@/components/Layout';
import { PrincipalType, getMainInfo } from '@/util/helper';

type PropsType = {
  principal: PrincipalType;
};

const IndexPage: NextPage<PropsType> = ({ principal }) => {
  const style = {
    backgroundImage: `url(${principal.background})`,
  };

  return (
    <Layout
      youtube={principal.youtube}
      facebook={principal.facebook}
      twitter={principal.twitter}
      instagram={principal.instagram}
      endereco={principal.endereco}
    >
      <div className="flex w-full min-h-screen flex-col items-center">
        <div className="flex flex-col w-auto">
          <div className="flex flex-col px-4 xs:text-5xl sm:text-8xl font-bold text-gray-50">
            <span className="py-4">{principal.title.line1}</span>
            <span>{principal.title.line2}</span>
          </div>
          <div className="flex flex-col w-auto px-5 xs:text-base sm:text-2xl font-bold text-gray-50">
            <span className="py-4">{principal.subtitle}</span>
          </div>
        </div>
        <span className="flex-grow bg-cover bg-center w-full h-64 opacity-40 m-10" style={style}>
          &nbsp;
        </span>
        <span className="flex-grow bg-cover bg-center w-full opacity-70 space-y-12 xs:text-xl md:text-3xl p-10 font-bold">
          {ReactHtmlParser(PrismicDOM.RichText.asHtml(principal.intro))}
        </span>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const infoPrincipal = await getMainInfo(context);

  return {
    props: {
      principal: infoPrincipal,
    },
    revalidate: 60,
  };
};

export default IndexPage;
