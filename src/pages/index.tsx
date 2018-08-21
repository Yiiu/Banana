import Link from 'next/link';
import * as React from 'react';

export default () => (
  <ul>
    <li><Link href="/b" as="/a"><a>a</a></Link></li>
    <li><Link href="/a" as="/b"><a>b</a></Link></li>
  </ul>
);
