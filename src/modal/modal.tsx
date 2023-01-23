import styles from './modal.module.scss';
function Modal({children, showModal, setShowModal, item}:any) {
  const handleCloseModal = ()=>{
    setShowModal(false);
    
  }
  return ( 
    <>
      {showModal && <div className={styles.overlay}>
        <div className={styles.contenedorModal}>
          <div className={styles.encabezado}>
            <h3>Details</h3>
            <button onClick={handleCloseModal}>X</button>
          </div>
            {children}
        </div>
      </div>}
    </>
   );
}

export {Modal} ;