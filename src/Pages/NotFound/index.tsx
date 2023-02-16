import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import stylesTema from 'styles/Tema.module.scss';

export default function NotFound() {
  return (
    <div className={`${styles.container} ${stylesTema.container}`}>
      <NotFoundImage />
    </div>
  );
}