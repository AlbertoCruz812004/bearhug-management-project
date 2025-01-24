import { ReactNode } from "react";
import { ToastPosition } from "react-hot-toast";

export interface NotificationToast {
  children: JSX.Element;
  positionNotification?: ToastPosition;
  durationNotification?: number;
}

export interface NotificationButton {
  colorButton?: "warning" | "primary" | "danger" | "default" | "success";
  contentButton: ReactNode;
  isIconOnly?: boolean;
  sizeButton?: "sm" | "md" | "lg";
  notify: () => string;
}

export type NotificationType = NotificationToast &
  Omit<NotificationButton, "notify">;
