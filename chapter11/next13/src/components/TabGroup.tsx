import { Tab } from './Tab'

export interface Item {
  text: string
  slug?: string
}

export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {items.map((item) => (
        <Tab key={path + item.slug} item={item} path={path} />
      ))}
    </div>
  )
}
