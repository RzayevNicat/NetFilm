import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			Made with ❤️ by&nbsp;
			<Link href="https://www.linkedin.com/in/nicat-rzayev-374463219/" target="_blank">
				Rzayev Nicat
			</Link>
		</footer>
	);
}

export default Footer;
