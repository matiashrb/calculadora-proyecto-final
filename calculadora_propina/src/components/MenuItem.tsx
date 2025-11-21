import type { MenuItem } from "../types"

type MenuItemProps = {
  itemArreglo: MenuItem
  addItem: (itemArreglo:MenuItem ) => void

}

export default function MenuItem({itemArreglo, addItem}: MenuItemProps) {
    //ACA VA EL JAVASCRIPT


    //ACA VA EL HTML
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg"
      onClick={() => addItem(itemArreglo)}
    >
      <p>{itemArreglo.name}</p>
      <p className="font-black">${itemArreglo.price}</p>
    </button>
  )
}
