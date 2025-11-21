import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder]  = useState<OrderItem[]>([]) //state del tipo ARREGLO DE OrderItem, arranca en vacio.
    const [tip, setTip] = useState(0)

    function addItem(itemArreglo: MenuItem) {

        const itemExist = order.find(orderFind => 
            orderFind.id === itemArreglo.id) // BUSCAR POR CADA ELEMENTO DE order llamandolo a cada uno (orderFind), devuelve boolean si lo encuentra
        if (itemExist) {
            console.log("ya existe")
            const updatedOrder = order.map(orderItem => orderItem.id === itemArreglo.id ? {...orderItem, quantity: orderItem.quantity + 1}  : orderItem ) //crea un arreglo con los elementos que cumplen la igualdad, VERDADERO: devuelve el objeto con quantity + 1 / FALSO: devuelve el objeto sin tocar
            setOrder(updatedOrder)
        } else {
            const newItem = {...itemArreglo, quantity: 1 } //aca se crea el item con quantity.
            setOrder([...order, newItem]) //copia el arreglo order y le agrega el elemento newItem
        }
        
    }

    function removeItem(id: MenuItem['id']) {
        setOrder(order.filter(itemOrder => itemOrder.id !== id))
    }

    function placeOrder() {
        setOrder([])
        setTip(0)
    }




    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}