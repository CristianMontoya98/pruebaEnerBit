import { useState } from 'react';
import axios from 'axios';
import { Modal } from '../../../../../../modal/modal';
import styles from './cardItem.module.scss';
import { Button } from './components/button/button';
function CardItem(props:any) {
  const {item, setItems, filterItems} = props;
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalNotification, setShowModalNotification] = useState(false);
  const [serial, setSerial] = useState(item?.serial);
  const [conection, setConection] = useState(item?.connection_type);
  const [storage, setStorage] = useState(item?.storage_system);
  const [condition, setCondition] = useState(item?.condition);
  const [owner, setOwner] = useState(item?.owner);
  const [location, setLocation] = useState(item?.location);
  const [purchase, setPurchase] = useState(item?.purchase);
  const [iMax, setIMax] = useState(item?.i_max);
  const [iB, setIB] = useState(item?.i_b);
  const [iN, setIN] = useState(item?.i_n);
  const [manufacturer, setManufacturer] = useState(item?.manufacturer);
  const [seals, setSeals] = useState(item?.seals);

  
  const fillBody =()=>{
    return {
      "connection_type": conection,
      "storage_system": storage,
      "condition": condition,
      "owner": owner,
      "serial": serial,
      "location": location,
      "purchase": purchase,
      "i_max": iMax,
      "i_b": iB,
      "i_n": iN,
      "manufacturer": manufacturer,
      "seals": seals
    }
  }
  const deleteMeter = async()=>{
    await axios.delete(`https://ops.enerbit.dev/learning/api/v1/meters/${item?.id}`).then(
      (res)=>{
        if(res.status === 202){
          handleOpenModalNotification();
          getItems();
        }
      }
    );
  }

  const sendUpdate =()=>{
    updateMeter(fillBody());
  }
  const getItems = async () => { 
    await axios.get(`https://ops.enerbit.dev/learning/api/v1/meters`).then(
      (res) => {
        if(res.status === 200){
          setItems(res?.data?.items);
          filterItems();
        }
      });
  };
  const updateMeter = async(body:any)=>{
    await axios.patch(`https://ops.enerbit.dev/learning/api/v1/meters/${item?.id}`, body).then(
      (res)=>{
        getItems();
        
      }
    )
  }

  const handleChangeConection=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setConection(evt.target.value);
  }
  const handleChangeSerial=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setSerial(evt.target.value);
  }
  const handleChangeStorage=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setStorage(evt.target.value);
  }
  const handleChangeCondition=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setCondition(evt.target.value);
  }
  const handleChangeOwner=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setOwner(evt.target.value);
  }
  const handleChangeLocation=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setLocation(evt.target.value);
  }
  const handleChangePurchase=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setPurchase(evt.target.value);
  }
  const handleChangeIMAX=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setIMax(evt.target.value);
  }
  const handleChangeIB=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setIB(evt.target.value);
  }
  const handleChangeIN=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setIN(evt.target.value);
  }
  const handleChangeManufacturer=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setManufacturer(evt.target.value);
  }
  const handleChangeSeals=(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setSeals(evt.target.value);
  }
  const handleOpenModal = ()=>{
    setShowModal(true);
  }
  const handleCloseModal = ()=>{
    setShowModal(false);
  }
  const handleOpenModalEdit = ()=>{
    setShowModal(false);
    setShowModalEdit(true);
  }
  const handleCloseModalEdit = ()=>{
    setShowModalEdit(false);
  }
  const handleOpenModalDelete = ()=>{
    setShowModal(false);
    setShowModalDelete(true);
  }
  const handleCloseModalDelete = ()=>{
    setShowModalDelete(false);
  }
  const handleOpenModalNotification = ()=>{
    setShowModalDelete(false);
    setShowModalNotification(true);
  }
  const handleCloseModalNotification = ()=>{
    setShowModalNotification(false);
  }
  return ( 
    <div>
      <div className={styles.card}>
        <div onClick={handleOpenModal} >
        <p>Item: {item?.serial}</p>
        <p>ID: {item?.id}</p>
        </div>
        <div>
          <Button action={handleOpenModalDelete} icon='delete' style='delete'/>
          <Button action={handleOpenModalEdit} icon='edit'/>
        </div>
        
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} item={item}>
          <div className={styles.infoModal}>
            <p>id: {item?.id}</p>
            <p>Serial: {item?.serial}</p>
            <p>Conection: {item?.connection_type}</p>
            <p>Storage: {item?.storage_system}</p>
            <p>Condition: {item?.condition}</p>
            <p>Owner: {item?.owner}</p>
            <p>location: {item?.location}</p>
            <p>Manufacturer: {item?.manufacturer}</p>
            <p>Purchase: {item?.purchase}</p>
            <p>i_max: {item?.i_max}</p>
            <p>i_b: {item?.i_b}</p>
            <p>i_n: {item?.i_n}</p>
            <p>seals: {item?.seals}</p>
            <div className={styles.infoModal__buttons}>
              <Button action={handleOpenModalDelete} icon='delete' style='delete'/>
              <Button action={handleOpenModalEdit} icon='edit'/>
            </div>
          </div>
      </Modal>
      <Modal showModal={showModalEdit} setShowModal={setShowModalEdit} item={item}>
          <div className={styles.infoModal}>
            <h2>Edit</h2>
            <div>
              <p>Conection: <input type="text" value={conection} onChange={handleChangeConection}/></p>
            </div>
            <div>
              <p>Storage: <input type="text" value={storage} onChange={handleChangeStorage}/></p>
            </div>
            <div>
              <p>Condition: <input type="text" value={condition} onChange={handleChangeCondition}/></p>
            </div>
            <div>
              <p>Owner: <input type="text" value={owner} onChange={handleChangeOwner}/></p>
            </div>
            <div>
              <p>Serial: <input type="text" value={serial} onChange={handleChangeSerial}/></p>
            </div>
            <div>
              <p>location: <input type="text" value={location} onChange={handleChangeLocation}/></p>
            </div>
            <div>
              <p>Prchase: <input type="text" value={purchase} onChange={handleChangePurchase}/></p>
            </div>
            <div>
              <p>i_max: <input type="text" value={iMax} onChange={handleChangeIMAX}/></p>
            </div>
            <div>
              <p>i_b: <input type="text" value={iB} onChange={handleChangeIB}/></p>
            </div>
            <div>
              <p>i_n: <input type="text" value={iN} onChange={handleChangeIN}/></p>
            </div>
            <div>
              <p>Manufacturer: <input type="text" value={manufacturer} onChange={handleChangeManufacturer}/></p>
            </div>
            <div>
              <p>Seals: <input type="text" value={seals} onChange={handleChangeSeals}/></p>
            </div>
            <div className={styles.editButtons}>
              <button className={styles.buttonSave} onClick={sendUpdate}>Save</button>
              <button className={styles.buttonCancel} onClick={handleCloseModalEdit}>Cancel</button>
            </div>
          </div>
      </Modal>
      <Modal showModal={showModalDelete} setShowModal={setShowModalEdit} item={item}>
          <div className={styles.infoModal}>
            <h2>Do you really want to delete this item?</h2>
            <div className={styles.editButtons}>
              <button onClick={deleteMeter} className={styles.buttonSave}>Yes</button>
              <button onClick={handleCloseModalDelete} className={styles.buttonCancel}>No</button>
            </div>
          </div>
      </Modal>
      <Modal showModal={showModalNotification} setShowModal={setShowModalNotification} item={item}>
          <div className={styles.infoModal}>
            <h2>Item deleted Succesfully</h2>
            <div className={styles.editButtons}>
              <button onClick={handleCloseModalNotification} className={styles.buttonSave}>Continue</button>
            </div>
          </div>
      </Modal>
    </div> 
  );
}

export {CardItem};