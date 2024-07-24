import React from "react";
import styles from "./Certifications.module.css";
import certificate from "../../data/certifications.json";
import { getImageUrl } from "../../utils";

function Certifications() {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.containerGrid}>
        {certificate.map((certificateItem, id) => {
          return (
            <a
              href={certificateItem.url}
              target="_blank"
              className={styles.link}
              key={id}
            >
              <li className={styles.certificateItem}>
                <img
                  src={getImageUrl(certificateItem.imageSrc)}
                  className={styles.certificateImg}
                />
                <div className={styles.certificateItemDetails}>
                  <h3>{certificateItem.name}</h3>
                  <p>{certificateItem.organization}</p>
                </div>
              </li>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;
