import Header from "./Header"
import CardPizza from "./CardPizza"

function Home() {
    return (
        <>


            <div className="Home-container">

                <Header />

                {/* <div className="Cards-container">
                    <div className="Cards-container">

                        <CardPizza
                            name="Napolitana"
                            price={5950}
                            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5oX62Jd4kjpTOiWxUVV0zNTApvQxaTMuEg&s"
                        />

                        <CardPizza
                            name="Española"
                            price={6950}
                            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                            img="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-y-verduras-1080x671.jpg"
                        />

                        <CardPizza
                            name="Pepperoni"
                            price={6950}
                            ingredients={["mozzarella", "pepperoni", "orégano"]}
                            img="https://www.paulinacocina.net/wp-content/uploads/2024/10/receta-pizza-de-pepperoni-facil-1729847335.jpg"
                        />

                    </div>
                </div> */}

            </div>
        </>
    )
}

export default Home