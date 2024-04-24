import styles from '../../styles/Home.module.css'

export default function About(pageProps) {
  console.log(pageProps)

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

export const getServerSideProps = async ({ res }) => {
  const result = await fetch("https://osina.microcms.io/api/v1/blogs/o3wcvyx-3", {
    method: "GET", // HTTPメソッド
    headers: {
      "X-MICROCMS-API-KEY": "7SQn9ZBtNH7XWVGr18jTWmIdMjLbMMGiqNHu"
    }
  })


  return {
    props: {
      data: await result.json(),
    },
  };
};