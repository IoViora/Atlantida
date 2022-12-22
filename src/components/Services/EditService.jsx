import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ServiceContextProvider";

function EditService() {
  const { id } = useParams();
  const { getOneProductDetails, productDetails, updateProduct } = useProducts();

  const [editedProduct, setEditedProduct] = useState();

  useEffect(() => {
    getOneProductDetails(id);
  }, []);

  useEffect(() => {
    setEditedProduct(productDetails);
  }, [productDetails]);
  const navigate = useNavigate();

  const handleInp = (e) => {
    let obj = { ...editedProduct, [e.target.name]: e.target.value };
    setEditedProduct(obj);
  };
  return (
    <>
      {editedProduct && (
        <Form className="mainadd">
          <h1 className="addmaintext">EDIT SERVICE</h1>

          <Form.Group className="inpblock">
            <Form.Label className="inpdescr">Name</Form.Label>
            <Form.Control
              value={editedProduct.name || ""}
              className="serviceinput"
              onChange={handleInp}
              type="text"
              name="name"
              placeholder="Enter employer's new name"
            />
          </Form.Group>

          <Form.Group className="inpblock">
            <Form.Label className="inpdescr">Price</Form.Label>
            <Form.Control
              value={editedProduct.price || ""}
              className="serviceinput"
              onChange={handleInp}
              type="text"
              name="price"
              placeholder="Enter your services new price"
            />
          </Form.Group>
          <Form.Group className="inpblock">
            <Form.Label className="inpdescr">Description</Form.Label>
            <Form.Control
              value={editedProduct.description || ""}
              className="serviceinput"
              onChange={handleInp}
              type="text"
              name="description"
              placeholder="Enter your product's new description"
            />
          </Form.Group>
          <Form.Group className="inpblock">
            <Form.Label className="inpdescr">Product Category</Form.Label>
            <Form.Control
              value={editedProduct.category || ""}
              className="serviceinput"
              onChange={handleInp}
              type="text"
              name="category"
              placeholder="Enter product's new category"
            />
          </Form.Group>
          <Form.Group className="inpblock" controlId="formBasicEmail">
            <Form.Label className="inpdescr">Requirement</Form.Label>
            <Form.Control
              values={editedProduct.requirement || ""}
              className="serviceinput"
              onChange={handleInp}
              type="text"
              name="requirement"
              placeholder="Enter your requirements on this service"
            />
          </Form.Group>
          <Form.Group className="inpblock">
            <Form.Label className="inpdescr">Image</Form.Label>
            <Form.Control
              values={editedProduct.image || ""}
              className="serviceinput"
              onChange={handleInp}
              type="text"
              name="image"
              placeholder="Enter services new image url"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            className="addbtn"
            onClick={() => {
              updateProduct(id, editedProduct);

              navigate("/servicelist");
            }}
          >
            Save changes
          </Button>
        </Form>
      )}
    </>
  );
}

export default EditService;
