function ProductSize(props) {
    if (!props?.product?.size) return null;

    return <span className="productSize" style={{
        color: "blue",
        borderBottom: "1px solid blue"
    }}>{" - " + props.product.size + "cl"}</span>;
}

function ProductNote(props) {
    if (!props?.product?.note) return null;

    return <div className="note">{props.product.note}</div>
}

export function MenuProduct(props) {
    const {product} = props;
    if (!product.name) return null;

    return <div className="menuProduct" style={{padding: "0 1.5em 0.5em 0"}}>
        <div>{product.name}
            <ProductSize product={product}/>
            <ProductNote product={product}/>
        </div>
        <div>{product.price}</div>
    </div>
}