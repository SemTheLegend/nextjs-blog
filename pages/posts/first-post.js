import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from './alert.modules.css';
import { clsx } from 'clsx';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
}

export function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}>
      {children}
    </div>
  )
}