import styles from './Modal.module.css';

interface ModalProps {
    setIsOpen: (isOpen: boolean) => void;
}

function Modal({ setIsOpen }: ModalProps) {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Dialog</h5>
                    </div>
                    <div className={styles.modalContent}>
                        Are you sure you want to delete the item?
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button
                                className={styles.deleteBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                Delete
                            </button>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
