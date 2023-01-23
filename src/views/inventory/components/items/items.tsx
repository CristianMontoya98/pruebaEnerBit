import { useEffect, useState } from 'react';
import styles from './items.module.scss';
import axios from "axios";
import { CardItem } from './components/cardItem/cardItem';
import { Paginator } from './components/paginator/paginator';
function Items() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(1);

  /* Filtrado de los items para la paginación */  
  const filterItems = () => {
    return items.slice(currentPage,currentPage + 6);
  }
  const nextPage = () => {
    
      if(items.length > currentPage + 6){
        setCurrentPage(currentPage + 6);
        setPage(page + 1);
      }
      
      
  }
  const prevPage =() => {
    if(currentPage > 0){
      setCurrentPage(currentPage - 6);
      setPage(page - 1);
    }
  }
  /* Consumo de la api y almacenamiento en el estado items */
  useEffect(()=>{
    const getItems = async () => { 
      await axios.get(`https://ops.enerbit.dev/learning/api/v1/meters`).then(
        (res) => {
          if(res.status === 200){
            setItems(res?.data?.items);
          }
        });
    };
    getItems();
  },[]);

  return (
    <div className={styles.items}>
      {filterItems().map((value:any, index) =>(
        <CardItem key={index} item={value.serial} itemID={value?.id}/>
      ))}
      <Paginator page={page} prevPage={prevPage} nextPage={nextPage}/>
    </div>
    );
}

export {Items};