import { EDITOR, PRESENTATION } from '@constants/Mode';
import EditorPage from './Editor';
import Head from 'next/head';
import { NextPage } from 'next';
import PresentationPage from './Presentation';
import { SWRConfig } from 'swr';
import get from '@api/get';
import { useState } from 'react';

const IndexPage: NextPage = () => {
  const [mode, setMode] = useState('editor');

  return (
    <div>
      <Head>
        <title>Whiteboard 360</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ refreshInterval: 50, fetcher: get, suspense: true }} />
      {mode === EDITOR ? <EditorPage action={() => setMode(PRESENTATION)} /> : <PresentationPage action={() => setMode(EDITOR)} />}
    </div>
  );
};
export default IndexPage;
