import style from './Loader.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={style.container}>
      <Triangle heigth="100" width="100" color="maroon" ariaLabel="loading" />
    </div>
  );
};
