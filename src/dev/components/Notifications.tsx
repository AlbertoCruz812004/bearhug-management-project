import toast from "react-hot-toast";
import { NotificationBase } from "./NotificationBase";
import {
  NotificationType,
} from "../interfaces/notification-interface";

export const Notifications = ({
  children,
  colorButton,
  isIconOnly,
  contentButton,
  sizeButton,
  positionNotification,
  durationNotification,
}: NotificationType) => {
  const notify = () =>
    toast(children, {
      style: {
        background: "#3e3736",
        color: "#f1efef",
      },
      position: positionNotification ?? "top-center",
      duration: durationNotification ?? 2500,
    });

  return (
    <NotificationBase
      contentButton={contentButton}
      colorButton={colorButton}
      isIconOnly={isIconOnly}
      sizeButton={sizeButton}
      notify={notify}
    />
  );
};
