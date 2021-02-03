import { EDITOR, PRESENTATION } from '@constants/Mode';
import { getStandup, getStandupIds } from '@api/getStandups';
import EditorView from '@components/EditorView';
import Head from 'next/head';
import { NextPage } from 'next';
import PathParam from '@models/next/PathParam';
import PresentationView from '@components/PresentationView';
import StandupDto from '@models/StandupDto';
import StaticPaths from '@models/next/StaticPaths';
import StaticProps from '@models/next/StaticProps';
import { getCategories } from '@api/getCategories';
import { useState } from 'react';

export async function getStaticProps({ params }: PathParam): Promise<StaticProps> {
  const standup = getStandup(params.id);
  return {
    props: {
      standup,
    },
  };
}

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = getStandupIds();
  return {
    paths,
    fallback: false,
  };
}

interface StandupPageProps {
  standup: StandupDto;
}

const StandupPage: NextPage<StandupPageProps> = ({ standup }) => {
  const [mode, setMode] = useState(EDITOR);
  const categories = getCategories();

  return (
    <>
      <Head>
        <title>Whiteboard 360 - {standup.name} Standup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mode === EDITOR ? (
        <EditorView handleModeChange={() => setMode(PRESENTATION)} categories={categories} />
      ) : (
        <PresentationView handleModeChange={() => setMode(EDITOR)} categories={categories} />
      )}
    </>
  );
};
export default StandupPage;
