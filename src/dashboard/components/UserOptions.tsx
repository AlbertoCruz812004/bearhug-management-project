import { Listbox, ListboxItem } from "@heroui/listbox";
import { options } from "../constants/user-options";

export const UserOptions = () => {
  return (
    <div className="w-[200px]">
      <Listbox items={options}>
        {(item) => (
          <ListboxItem key={item.key}>
            {item.component ? (
              item.component
            ) : (
              <span className="flex gap-2">
                {item.icon}
                {item.label}
              </span>
            )}
          </ListboxItem>
        )}
      </Listbox>
    </div>
  );
};
