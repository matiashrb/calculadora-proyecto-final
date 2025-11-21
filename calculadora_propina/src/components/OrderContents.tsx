import type { MenuItem, OrderItem } from "../types"
import { formatCurrency } from "../helpers"
//DECLARAMOS EL TIPO DE LA FUNCION
type orderContentsProps = {
  order: OrderItem[],
  removeItem: (id:MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : orderContentsProps) {
  //JAVASCRIPT



  return (
    <div>
      <h2 className='font-black text-4xl'> Consumo </h2>
      <div className="space-y-3 mt-10">
        {order.length === 0 ? <p className="text-center">ESTA VACIO</p> : 
        (
          //por cada item del arreglo order, hacemos...
          order.map ( orderItem => (
            <div key={orderItem.id}
                  className="flex justify-between border-t items-center border-gray-200 py-5 last-of-type:border-b"

            >
              <div>
                <p className="text-lg">
                  {orderItem.name} - {formatCurrency(orderItem.price)}
                </p>
                <p className="font-black">
                  Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.price * orderItem.quantity)}
                </p>
              </div>
              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={()=> removeItem(orderItem.id)}
              
              >
                X
              </button>
            </div>
          ) )

        )}

      </div>
    </div>
  )
}
