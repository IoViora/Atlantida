import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useProducts } from "../../contexts/ServiceContextProvider";
import "./AddService.css";
function AddService() {
  const { createProduct } = useProducts();

  const {
    user: { email, uid },
  } = useAuth();

  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    requirement: "",
    category: "",
    image: "",
    userid: uid,
  });

  const handleInp = (e) => {
    let obj = { ...product, [e.target.name]: e.target.value };
    setProduct(obj);
  };
  return (
    <>
      <Form className="mainadd">
        <h1 className="addmaintext">CREATE A NEW SERVICE</h1>
        <Form.Group className="inpblock" controlId="formBasicEmail">
          <Form.Label className="inpdescr">Name</Form.Label>
          <Form.Control
            className="serviceinput"
            onChange={handleInp}
            type="text"
            name="name"
            placeholder="Enter you name"
          />
        </Form.Group>
        <Form.Group className="inpblock" controlId="formBasicEmail">
          <Form.Label className="inpdescr">Service category</Form.Label>
          <Form.Control
            className="serviceinput"
            onChange={handleInp}
            type="text"
            name="category"
            placeholder="Enter category of your service"
          />
        </Form.Group>

        <Form.Group className="inpblock" controlId="formBasicPassword">
          <Form.Label className="inpdescr">Price</Form.Label>
          <Form.Control
            className="serviceinput"
            onChange={handleInp}
            type="text"
            name="price"
            placeholder="Enter price of your service"
          />
        </Form.Group>
        <Form.Group className="inpblock" controlId="formBasicPassword">
          <Form.Label className="inpdescr">Description</Form.Label>
          <Form.Control
            className="serviceinput"
            onChange={handleInp}
            type="text"
            name="description"
            placeholder="Enter details about service you provide"
          />
        </Form.Group>
        <Form.Group className="inpblock" controlId="formBasicEmail">
          <Form.Label className="inpdescr">Requirement</Form.Label>
          <Form.Control
            className="serviceinput"
            onChange={handleInp}
            type="text"
            name="requirement"
            placeholder="Enter your requirements on this service"
          />
        </Form.Group>
        <Form.Group className="inpblock" controlId="formBasicEmail">
          <Form.Label className="inpdescr">Image</Form.Label>
          <Form.Control
            className="serviceinput"
            onChange={handleInp}
            type="text"
            name="image"
            placeholder="Enter your image (Optional)"
          />
        </Form.Group>

        <Button
          variant="primary"
          className="addbtn"
          type="button"
          onClick={() => {
            createProduct(product);
            navigate("/servicelist");
          }}
        >
          Add Product
        </Button>
      </Form>
    </>
  );
}

export default AddService;
