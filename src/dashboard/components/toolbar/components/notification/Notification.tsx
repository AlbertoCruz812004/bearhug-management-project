import {NotificationPending} from "./icons/NotificationPending.tsx";
import Modal from "../../../../../core/components/Modal.tsx";
import {useState} from "react";
import {ListProductAlert} from "./components/ListProductAlert.tsx";

export const Notification = () => {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => setOpen(true)}>
            <NotificationPending />
            <Modal isOpen={open} setIsOpen={setOpen}>
                <ListProductAlert />
            </Modal>
        </div>
    );
};