import { Tab, Tabs } from "@heroui/tabs"
import { options } from "./options"

export const NavBar = () => {
  return (
    <nav className="py-5">
      <Tabs
        aria-label="Options"
        isVertical
        classNames={{ tabList: "grid gap-6 py-5 px-2" }}
        radius="lg"
        color="primary"
      >
        {
          options.map(item => (
            <Tab key={item.key} title={item.title}>
              {item.element}
            </Tab>
          ))
        }
      </Tabs>

    </nav>
  )
}
