import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { CircularProgress } from "@heroui/progress";

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
        <CircularProgress />
      </PopoverContent>
    </Popover>
  );
};
