import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    setIsOpen: (isOpen: boolean) => void;
    children: React.ReactNode;
}

function Modal({ children, setIsOpen }: ModalProps) {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>{children}</div>
            </div>
        </>
    );
}

export default Modal;
