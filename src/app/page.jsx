import styles from "./page.module.scss";
import Privacy from "./components/privacy";

export default function Home() {
  return (
    <main className={styles.main}>
      <Privacy />
    </main>
  );
}
