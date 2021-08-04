import styles from "../styles/Email.module.css";
import { useThemeContext } from '../context/state';
import { useRouter } from 'next/router';

const Email = () => {
    const { theme } = useThemeContext();
    const location = useRouter();

    return (
        <a href='mailto:richardingwe5@gmail.com' className={styles.email} style={{ color: `${location.pathname === '/' ? '#fff' : !theme.light ? '#fff' : '#000'}` }}>
            richardingwe5@gmail.com
        </a>
    );
};

export default Email;
