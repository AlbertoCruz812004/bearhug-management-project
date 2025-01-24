import { Button } from "@heroui/button";
import { Toaster } from "react-hot-toast";
import { NotificationButton } from "../interfaces/notification-interface";

export const NotificationBase = ({
  contentButton,
  colorButton,
  isIconOnly,
  sizeButton,
  notify,
}: NotificationButton) => (
  <>
    <Button
      size={sizeButton}
      onPress={notify}
      color={colorButton}
      isIconOnly={isIconOnly}
    >
      {contentButton}
    </Button>
    <Toaster />
  </>
);
