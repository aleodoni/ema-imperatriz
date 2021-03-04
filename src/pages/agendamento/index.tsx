import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
import PrismicDOM from 'prismic-dom';
import { ImWhatsapp } from 'react-icons/im';
import { client } from '@/util/api';

import { PrincipalType, getMainInfo } from '@/util/helper';
import Layout from '@/components/Layout';

type AtendimentoType = {
  principal: PrincipalType;
  atendimento: {
    titulo: string;
    horario: Document[];
    linkAgendamento: string;
  };
};

const htmlSerializer = function (type: any, element: any, content: any, children: any): string {
  switch (type) {
    case PrismicDOM.RichText.Elements.paragraph:
      if (children.join('') === '') {
        return '<br/>';
      }
      return '<p>' + children.join('') + '</p>';

    case PrismicDOM.RichText.Elements.heading3:
      return `<h3>${children.join('')}</h3>`;

    default:
      return '';
  }
};

const AtendimentoPage: NextPage<AtendimentoType> = ({ principal, atendimento }) => {
  return (
    <Layout
      youtube={principal.youtube}
      facebook={principal.facebook}
      twitter={principal.twitter}
      instagram={principal.instagram}
      endereco={principal.endereco}
    >
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col w-auto">
          <div className="flex flex-col p-8 m-4 rounded-lg bg-gray-700 border-2 border-gray-600">
            {ReactHtmlParser(
              PrismicDOM.RichText.asHtml(atendimento.horario, undefined, htmlSerializer)
            )}
          </div>
          <Link href={atendimento.linkAgendamento}>
            <div className="flex flex-grow items-center justify-center rounded-xl p-6 m-4 xs:text-xl md:text-4xl transition duration-300 ease-in-out bg-green-700 text-white hover:bg-green-600 cursor-pointer">
              <ImWhatsapp />
              <span className="pl-4">Agende sua consulta</span>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const infoPrincipal = await getMainInfo(context);

  const infoAtendimento = await client().getSingle('atendimento', {});

  const atendimento = {
    titulo: infoAtendimento.data.titulo[0].text,
    horario: infoAtendimento.data.horario,
    linkAgendamento: `https://api.whatsapp.com/send?phone=${infoAtendimento.data.foneagendamento[0].text}&text=${infoAtendimento.data.textoagendamento[0].text}`,
  };

  return {
    props: {
      principal: infoPrincipal,
      atendimento,
    },
    revalidate: 60,
  };
};

export default AtendimentoPage;
