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
    presencial: Document[];
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
      <div className="flex flex-col">
        <div className="flex flex-col mt-10">
          <div className="flex px-4 xs:text-4xl sm:text-7xl font-bold text-gray-50">
            Atendimento presencial
          </div>
          <div className="flex flex-col px-4 pt-10 text-2xl ">
            {ReactHtmlParser(
              PrismicDOM.RichText.asHtml(atendimento.presencial, undefined, htmlSerializer)
            )}
          </div>
        </div>

        <div className="flex xs:flex-col md:flex-row md:items-center mt-20">
          <div className="flex px-4 xs:text-4xl sm:text-7xl font-bold text-gray-50">
            Horário de atentimento
          </div>
          <div className="flex flex-col xs:pt-10 px-4 w-full text-2xl items-end">
            {ReactHtmlParser(
              PrismicDOM.RichText.asHtml(atendimento.horario, undefined, htmlSerializer)
            )}
          </div>
        </div>

        <div className="flex w-auto xs:flex-col md:flex-row md:items-center mt-20">
          <div className="flex px-4 xs:text-4xl sm:text-7xl font-bold text-gray-50">
            Agende sua consulta
          </div>
          <div className="xs:mt-4 md:mt-0 text-2xl">
            <Link href={atendimento.linkAgendamento}>
              <div className="flex items-center justify-center rounded-xl p-6 m-4 xs:text-xl md:text-4xl transition duration-300 ease-in-out bg-green-700 text-white hover:bg-green-600 cursor-pointer">
                <ImWhatsapp />
                <span className="flex flex-nowrap pl-4 ">Whatsapp</span>
              </div>
            </Link>
          </div>
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
    presencial: infoAtendimento.data.presencial,
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
