import { Icon } from "@/components/ui/Icon";
import { euro, report, reportPdf, totalFunded } from "@/data/transparency";
import styles from "./Transparency.module.scss";

export function Transparency() {
  return (
    <section id="trasparenza" className="section section--dark">
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="eyebrow" data-reveal>
              Trasparenza
            </p>
            <h2 className="display-l" data-split>
              Dove vanno le vostre donazioni
            </h2>
          </div>
          <div className={styles.total} data-reveal>
            <p className={styles.totalValue}>{euro(totalFunded)}</p>
            <p className="muted">destinati ai progetti dal 2014 al 2018</p>
            <a
              href={reportPdf}
              className="btn btn--yellow"
              target="_blank"
              rel="noopener"
            >
              Scarica il rendiconto <Icon name="download" />
            </a>
          </div>
        </div>

        <div className={styles.years}>
          {report.map((year) => (
            <article key={year.year} className={styles.year} data-reveal>
              <h3 className={styles.yearTitle}>{year.year}</h3>
              <dl className={styles.income}>
                {year.donations && (
                  <div>
                    <dt>Donazioni</dt>
                    <dd>{euro(year.donations)}</dd>
                  </div>
                )}
                <div>
                  <dt>5×1000 ({year.fivePerThousand.referenceYear})</dt>
                  <dd>{euro(year.fivePerThousand.amount)}</dd>
                </div>
              </dl>
              <table className={styles.table}>
                <caption className="sr-only">
                  Progetti finanziati nel {year.year}
                </caption>
                <tbody>
                  {year.funded.map((item) => (
                    <tr key={item.name}>
                      <th scope="row">{item.name}</th>
                      <td>{euro(item.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
