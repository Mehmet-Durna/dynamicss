import {MenuProduct} from "./MenuProduct";

export function MenuCard(props) {
    const { products } = props;

    return (
        <div>
            <h1>Menu</h1>
            {products.map(p => <MenuProduct product={p} key={p.name} />)}
        </div>
    );
}