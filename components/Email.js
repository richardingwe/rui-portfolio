import styles from "../styles/Email.module.css";
import { useThemeContext } from '../context/state';

const Email = () => {
    const { theme } = useThemeContext();
    return (
        <a href='mailto:richardingwe5@gmail.com' className={styles.email} style={{ color: `${!theme.light ? '#fff' : '#11161f'}`, }}>
            richardingwe5@gmail.com
        </a>
    );
};

export default Email;
