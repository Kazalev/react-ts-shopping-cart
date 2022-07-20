import { Button } from "react-bootstrap"
import Stack from "react-bootstrap/esm/Stack"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrenct"

type CardItemProps = {
	id: number,
	quantity: number
}

export function CardItem({ id, quantity }: CardItemProps) {
	const { removeFromCart } = useShoppingCart()
	const item = storeItems.find(i => i.id === id)
	if (item == null) return null

	return (
		<Stack direction="horizontal" gap={2} className="d-flex align-center">
			<img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />

			<div className="me-auto">
				<div>
					{item.name} {quantity > 1 && <span className="text-muted" style={{ fontSize: ".65rem" }}>{quantity}x</span>}
				</div>
				<div className="text-muted" style={{ fontSize: ".75rem" }}>
					{formatCurrency(item.price)}
				</div>
				<div>{formatCurrency(item.price * quantity)}</div>
			</div>
			<Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
		</Stack>
	)
}