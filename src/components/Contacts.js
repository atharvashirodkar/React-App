import { Fragment } from "react";
import { Button, Container, Input, Form, FormGroup, Label } from "reactstrap";

function Contacts() {
    return (
        <div>
            <Container className="text-center bg-light">
                <h3>Connect with us</h3>
                <p><b>1234567891, 7896542398<br></br>sakshi123@gmail.com</b></p>
            </Container>
            <Fragment>
            <Form>
                <h4>Enter Your Query</h4>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input
                        id="Name"
                        name="Name"
                        placeholder="Enter Your Name"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="emailId">
                        Email Id
                    </Label>
                    <Input
                        id="emailId"
                        name="emailId"
                        placeholder="Enter your Email"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="question">
                        Question
                    </Label>
                    <Input
                        id="question"
                        name="question"
                        placeholder="Enter your Question Regarding Books"
                        type="text"
                    />
                </FormGroup>
                <Container>
                    <Button color="info">Submit</Button>
                </Container>
            </Form>
        </Fragment>
        </div>
    );
}
export default Contacts;