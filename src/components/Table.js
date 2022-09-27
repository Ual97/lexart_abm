import React from 'react';
import { Button, Table, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from 'reactstrap';

class Table_clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
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
                        {this.props.state.data.map((elemento) => (
                            <tr key={elemento.id}>
                                <td>{elemento.id}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.apellido}</td>
                                <td>{elemento.rut}</td>
                                <td>{elemento.tipo}</td>
                                <td>{elemento.telefono}</td>
                                <td>{elemento.activo}</td>
                                <td>
                                    <Button color='primary' onClick={()=>{this.setState({modal: !this.state.modal}); this.props.selectClient(elemento)}}>Select</Button>{"   "}
                                    <Button color='danger' onClick={()=>{this.props.delete(elemento)}}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Insertar Nuevo Cliente</ModalHeader>
                    <ModalBody>
                        <form>
                            <FormGroup>
                                <label>
                                    Id:
                                </label>
                                <input
                                    className="form-control"
                                    readOnly
                                    type="text"
                                    value={this.props.state.form.id}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Nombre:
                                </label>
                                <input
                                    className="form-control"
                                    name="nombre"
                                    type="text"
                                    onChange={this.props.handleChange}
                                    value={this.props.state.form.nombre}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Apellido:
                                </label>
                                <input
                                    className="form-control"
                                    name="apellido"
                                    type="text"
                                    onChange={this.props.handleChange}
                                    value={this.props.state.form.apellido}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Rut:
                                </label>
                                <input
                                    className="form-control"
                                    name="rut"
                                    type="text"
                                    onChange={this.props.handleChange}
                                    value={this.props.state.form.rut}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Tipo:
                                </label>
                                <input
                                    className="form-control"
                                    name="tipo"
                                    type="text"
                                    onChange={this.props.handleChange}
                                    value={this.props.state.form.tipo}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Telefono:
                                </label>
                                <input
                                    className="form-control"
                                    name="telefono"
                                    type="number"
                                    onChange={this.props.handleChange}
                                    value={this.props.state.form.telefono}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Activo:
                                </label>
                                <input
                                    className="form-control"
                                    name="activo"
                                    type="text"
                                    onChange={this.props.handleChange}
                                    value={this.props.state.form.activo}
                                />
                            </FormGroup>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Insert</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}

export default Table_clients;