import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  
  const navigate = useNavigate();

  return (
    <div className={`${styles.container} ${stylesTema.container}`}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}