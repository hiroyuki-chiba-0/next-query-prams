import styles from '../../styles/Home.module.css'

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, max-age=10');
  return {
    props: {
      description: 'This is the about page',
    },
  };
};

export default function About(pageProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          About Page
        </h1>
        <p>{pageProps.description}</p>
        <div className={styles.grid}>
          <next-link className={styles.card}>
            <a href="/">
              Back
            </a>
          </next-link>
        </div>
      </main>
    </div>
  )
}
