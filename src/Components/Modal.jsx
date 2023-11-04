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
          <h3 className='titlecard'>{selectedItem.title}</h3>
          <img src={selectedItem?.image} alt="" />
         

          <p>Preparation Time:</p>
          <h4> {selectedItem.readyInMinutes}min</h4>
          <br />
          <p>Potions:</p>
          <h4>{selectedItem.servings}</h4>
          
        </div>
      ) : null}
    </>
  );
}
export default Modal