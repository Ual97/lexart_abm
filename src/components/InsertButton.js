import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import React from 'react';
import './InsertButton.css'



class InsertButton extends React.Component {
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
            <div>
                <Button className='ins_button' color="success" onClick={this.toggle}>{this.props.buttonLabel}Nuevo Cliente</Button>
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
                                    value={this.props.state.data.length + 1}
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
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Tipo:
                                </label>
                                <select
                                    className="form-control"
                                    name="tipo"
                                    type="text"
                                    onChange={this.props.handleChange}
                                    value={this.props.state.form.tipo}
                                >
                                    <option value="empresa">empresa</option>
                                    <option value="consumidor final">consumidor final</option>
                                </select>
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
                                />
                            </FormGroup>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => { this.setState({ modal: !this.state.modal }); this.props.PostPet() }}>Insert</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default InsertButton;