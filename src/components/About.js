import { Container } from "reactstrap";

function About() {
    return (
        <div>
            <Container className="text-left bg-light">
                <h2><b>About Us</b></h2>
                <h4>Welcome to Library Management System</h4>
                <p>At Library Management System Name, we are dedicated to transforming the way libraries operate and serve their communities. Our innovative software solution is designed to streamline library operations, enhance user experiences, and support librarians in their mission to promote knowledge and learning.</p>
                <h4>Our Mission</h4>
                <p>Our mission is to provide libraries with a comprehensive and user-friendly management system that simplifies administrative tasks, improves efficiency, and enhances the accessibility of resources. We believe that technology should empower libraries to focus on what they do best: fostering a love of reading and learning.</p>
            </Container>
        </div>
    );
}
export default About;