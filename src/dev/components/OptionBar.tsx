import { Tooltip } from "@heroui/tooltip";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  content: ReactNode;
}

export const OptionBar = ({ children, className, onClick, content }: Props) => {
  const style =
    className ??
    "text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-default-900 duration-400";

  return (
    <Tooltip content={content} placement="bottom">
      <span onClick={onClick} className={style}>
        {children}
      </span>
    </Tooltip>
  );
};
