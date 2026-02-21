import styles from "./Banner2.module.scss";
import { bannerData } from "@/mock/banner/banner";

export default function Banner() {
  return (
    <section className={styles.banner}>
      {bannerData.map((item) => (
        <div key={item.id} className={`${styles.content} ${
    item.position === "left" ? styles.left : item.position === "right" ? styles.right : item.position === "center" ? styles.center : styles.center2
  }`}>
          
            {item.type === "video" ? (
            <video autoPlay loop muted playsInline>
              {item.src_mb && (
                <source src={item.src_mb} media="(max-width: 768px)" />
              )}
              <source src={item.src} />
            </video>
          ) : (
            <picture>
              {item.src_mb && (
                <source
                  srcSet={item.src_mb}
                  media="(max-width: 768px)"
                />
              )}
              <img
                src={item.src}
                alt={item.title || "banner"}
              />
            </picture>
          )}

          <div className={styles.overlay}>
            <div className={styles.box_layout}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <button className={styles.btn}>
                <div className={styles.btn_content}>
                  <a href="">{item.buttonText}</a>

                  <svg width="13" height="12" viewBox="0 0 13 12">
                    <path
                      d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

        </div>
      ))}
    </section>
  );
}