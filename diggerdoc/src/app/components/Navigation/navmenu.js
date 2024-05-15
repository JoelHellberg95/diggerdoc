import styles from "./navmenu.module.css";
import Link from 'next/link';

export default function Navigation() {
    const LINKS = [ 
        { href: '/', text: 'Hem'},
        { href: '/work', text: 'Alla Uppdrag'}, 
        { href: '/work/create', text: 'Skapa Uppdrag'}
    ];

    return(
        <header>
        <nav className={styles.navbar}>
            {LINKS.map((link, index) => (
                <NavigationLink key={index} href={link.href} text={link.text} />
            ))}
        </nav>
        </header>
    );    
}

function NavigationLink({ text, href }) {
  return (
      <Link href={href} className={styles.navlinks}>
          <h2>{text}</h2>
      </Link>
  );
}