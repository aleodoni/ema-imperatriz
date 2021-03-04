/* eslint-disable @typescript-eslint/no-unused-vars */
import { client } from '@/util/api';
import { GetStaticPropsContext } from 'next';

export type PrincipalType = {
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
  endereco: string;
};

export async function getMainInfo(context: GetStaticPropsContext): Promise<PrincipalType> {
  const info = await client().getSingle('principal', {});

  const title = info.data.titulo[0].text;
  const titleArray = title.split(' ');

  const subtitle = info.data.subtitulo[0].text;

  const background = info.data.background.url;

  const youtube = info.data.youtube.url;
  const facebook = info.data.facebook.url;
  const twitter = info.data.twitter.url;
  const instagram = info.data.instagram.url;
  const endereco = info.data.endereco[0].text;

  return {
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
    endereco,
  };
}
