import { useMyContext } from './MyContext'; 
import { MdCancel } from "react-icons/md";




function Modal() {
  const { selectedItem, setIsModalOpen, isModalOpen } = useMyContext();

  const handleCancelModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
<> 
{selectedItem && isModalOpen ? (
        <div className='modalcontainer'>
          <MdCancel className='btn-cancel' onClick={handleCancelModal} />
          <h2 className='titlecard'>{selectedItem.title}</h2>
          <img src={selectedItem?.image} alt="" />
          <div className='div-modal'>
          <div >Preparation Time: {selectedItem.readyInMinutes}min</div>
          <div>Potions: {selectedItem.servings}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Modal