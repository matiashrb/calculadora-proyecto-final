import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip:number
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}:OrderTotalsProps) {
    //JAVASCRIPT
    const subtotalAmount = useMemo(() => order.reduce((total,item) => total + (item.quantity * item.price), 0 ),[order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]) //SE EJECUTA EL MEMO CUANDO CAMBIA TIP O ORDER, POR ESO [TIP, ORDER]
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])
   //HTML
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y propina:</h2>
            <p>SUBTOTAL A PAGAR: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>   
            </p>
            <p>propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>   
            </p>
            <p>TOTAL A PAGAR: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>   
            </p>
            
        </div>

        <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
            
            disabled={totalAmount === 0}
            onClick={placeOrder}
        
        >Guardar Orden</button>
    </>
    
  )
}
