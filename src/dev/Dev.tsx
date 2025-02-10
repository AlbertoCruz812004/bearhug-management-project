import { ToolBar } from "./../dashboard/components";
//import { AlertInventory } from "./AlertInventory";

export default function Dev() {
  return (
    <div>
      <ToolBar />
      {/* <Button onPress={() => setState(!state)} isIconOnly color="warning">
        <NotificationPending />
      </Button> */}
      {/* <AlertInventory isOpen={state} setIsOpen={() => setState(!state)} /> */}
      {/* <ListProductAlert /> */}
      {/* <Notifications
        positionNotification="top-left"
        sizeButton="sm"
        contentButton={<EyeIcon />}
        isIconOnly
        colorButton="primary"
      >
        <div className="flex items-center text-sm gap-2">
          <ExclamationIcon />
          Tienes inventario bajo
        </div>
      </Notifications>
      <Notifications
        positionNotification="top-left"
        sizeButton="sm"
        contentButton={<TrashIcon />}
        isIconOnly
        colorButton="danger"
      >
        <div className="flex items-center text-sm gap-2">
          <TrashIcon />
          Producto Eliminado
        </div>
      </Notifications>
      <Notifications
        positionNotification="top-left"
        contentButton={<CheckIcon />}
        isIconOnly
        colorButton="default"
      >
        <div className="flex items-center text-sm gap-2">
          <CheckIcon />
          Producto agregado
        </div>
      </Notifications> */}
    </div>
  );
}
