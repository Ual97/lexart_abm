import { Button, Table, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from 'reactstrap';
import TableButtons from './TableButtons';

function Table_clients(state) {
    return (
        <Container>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rut</th>
                        <th>Tipo</th>
                        <th>Telefono</th>
                        <th>Activo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {state.data.map((elemento) => (
                        <tr key={elemento.id}>
                            <td>{elemento.id}</td>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.apellido}</td>
                            <td>{elemento.rut}</td>
                            <td>{elemento.tipo}</td>
                            <td>{elemento.telefono}</td>
                            <td>{elemento.activo}</td>
                            <td>
                                <TableButtons></TableButtons>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Table_clients;