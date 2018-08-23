import Link from 'next/link';
import * as React from 'react';
import * as styles from '../styles/Home.css';
console.log(styles);
export default () => (
  <ul className={styles.css}>
    <li><Link href="/b" as="/a"><a>a</a></Link></li>
    <li><Link href="/a" as="/b"><a>b</a></Link></li>
  </ul>
);
