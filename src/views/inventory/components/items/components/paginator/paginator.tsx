import { NextIcon } from '../../../../../../assets/icons/nextIcon';
import { PrevIcon } from '../../../../../../assets/icons/prevIcon';
import styles from './paginator.module.scss';

function Paginator(props:any) {
  const {page,prevPage, nextPage} = props;
  return ( 
    <div className={styles.paginator}>
      <button onClick={prevPage}><PrevIcon/></button>
      <p>{page}</p>
      <button onClick={nextPage}><NextIcon/></button>
    </div>
   );
}

export {Paginator} ;