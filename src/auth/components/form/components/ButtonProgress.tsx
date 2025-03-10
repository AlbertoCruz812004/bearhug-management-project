import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { CircularProgdatas } from "@heroui/progdatas";

interface Props {
  loading: boolean;
}

export const ButtonProgdatas = ({ loading }: Props) => {
  return (
    <Popover isOpen={loading} placement="top" backdrop="blur">
      <PopoverTrigger>
        <label></label>
      </PopoverTrigger>
      <PopoverContent>
        <CircularProgdatas />
      </PopoverContent>
    </Popover>
  );
};
