import { DeleteIcon } from "../../../../../../../../assets/icons/DeleteIcon";
import { EditIcon } from "../../../../../../../../assets/icons/editIcon";
import styles from './button.module.scss';
function Button(props:any) {
  const {icon, style, action} = props;
  return ( 
    <button onClick={action} className={`${styles.button} ${style === 'delete' ? styles.delete : styles.edit}`}>
      {icon === 'delete'?<DeleteIcon/>:<EditIcon/>}
    </button>
   );
}

export {Button};