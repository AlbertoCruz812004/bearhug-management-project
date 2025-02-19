import { Tab, Tabs } from "@heroui/tabs"
import { options } from "./options"

export const NavBar = () => {
  return (
    <nav className="flex flex-col items-center py-5">
      <Tabs
        aria-label="Options"
        isVertical
        classNames={{ tabList: "grid gap-9" }}
        radius="lg"
        color="primary"
      >
        {
          options.map(item => (
            <Tab {...item} />
          ))
        }
      </Tabs>

    </nav>
  )
}
