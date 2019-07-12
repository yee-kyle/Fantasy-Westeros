import React from 'react';

export const text = {
  headline: 'Fantasy Quidditch',
  greeting: 'Hogwart Quidditch Roster Manager',
};

const AddPlayerPage = () => (
  <main className={styles.root}>
    <h1 className={styles.headline}>{text.headline}</h1>
    <section>
      <span className={styles.greeting}>{text.greeting}</span>
    </section>
  </main>
);

export { AddPlayerPage };
