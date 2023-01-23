import styles from './cardItem.module.scss';
import { Button } from './components/button/button';
function CardItem(props:any) {
  const {item, itemID} = props;
  return (  
    <div className={styles.card}>
      <div>
      <p>Item: {item}</p>
      <p>ID: {itemID}</p>
      </div>
      <div>
        <Button icon='delete' style='delete'/>
        <Button icon='edit'/>
      </div>
    </div>
  );
}

export {CardItem};