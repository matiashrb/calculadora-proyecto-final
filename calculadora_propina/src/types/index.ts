export type MenuItem = { //TIPOS DE DATOS DE CADA ITEM
    id: number,
    name: string,
    price: number
} 

export type OrderItem = MenuItem & { //HEREDA EL TIPO DE CADA ITEM AGREGANDOLE CANTIDADES
    quantity: number
}