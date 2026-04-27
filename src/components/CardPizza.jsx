import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPizza({ name, price, ingredients, img }) {
    
  return (
    <Card className="pizza-card">
      
      <Card.Img variant="top" src={img} />

      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>

        <hr />

        <Card.Text className="text-center">
          <strong>Ingredientes:</strong>
        </Card.Text>

        {/* INGREDIENTES EN LÍNEA */}
        <Card.Text className="ingredients">
          🍕 {ingredients.join(", ")}
        </Card.Text>

        <hr />

        <Card.Text className="price">
          Precio: ${price.toLocaleString('es-CL')}
        </Card.Text>

        {/* BOTONES */}
        <div className="buttons">
          <Button variant="outline-dark" size="sm">Ver Más 👀</Button>
          <Button variant="dark" size="sm">Añadir 🛒</Button>
        </div>

      </Card.Body>
    </Card>
  );
}

export default CardPizza;