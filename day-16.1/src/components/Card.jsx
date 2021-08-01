function Image () {
    return (
            <img src="https://images.hindustantimes.com/img/2021/06/29/1600x900/m3_1624953455100_1624953498280.PNG" alt="" />
    )
}

function Card () {
    return (
        <div className = "card">
            <Image />
            <h1>React Card</h1>
            <p>your main THA is to make meme cards</p>
        </div>
    )
}

export default Card;