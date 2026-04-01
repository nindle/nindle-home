import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nindle | Home",
  description: "极简风个人主页。",
};

const links = [
  { label: "GitHub", href: "https://github.com/nindle" },
  { label: "X / Twitter", href: "#" },
  { label: "Email", href: "mailto:hello@nindle.com" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.kicker}>Nindle</span>
        <h1>
          极简，克制，
          <br />
          但要有点锋利。
        </h1>
        <p className={styles.description}>
          这是 Nindle 的个人主页。先保持简单：一个清晰的自我介绍，一点作品/链接入口，干净到不碍眼。
        </p>

        <div className={styles.links}>
          {links.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
