import { Button, Container } from 'reactstrap';

function TableButtons() {
    return (
        <Container>
            {/* el {"  "} es para seprarar los 2 botones */}
            <Button color='primary'>Select</Button>{"   "}
            <Button color='danger'>Delete</Button>
        </Container>
    )
}

export default TableButtons;