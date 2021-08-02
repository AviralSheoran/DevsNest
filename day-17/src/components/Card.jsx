function Card ({calory, food}) {
    return (
        <div className ="card">
            <h1>{food}</h1>
            <h2>You have consumed {calory} today</h2>
        </div>
    )
}

export default Card;