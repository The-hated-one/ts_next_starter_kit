import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import GlobalStyle from '../styles/globalStyles';
import HeadingMd from '../styles/HeadingMd';
import ListItem from '../styles/ListItem';
import LightText from '../styles/LightText';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <HeadingMd>…</HeadingMd>
        <HeadingMd style={{ paddingTop: 1 }}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <ListItem key={id}>
                <Link href={'/posts/[id]'} as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <LightText>
                  <Date dateString={date} />
                </LightText>
              </ListItem>
            ))}
          </ul>
        </HeadingMd>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
