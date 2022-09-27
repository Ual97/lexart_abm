import React from "react";
import axios from 'axios';
import Title from './components/Title';
import InsertButton from "./components/InsertButton";
import Table_clients from "./components/Table";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

const api_endpoint = 'https://crudcrud.com/api/d4b3b1d4c27c4381ae7616ab7fa210cb/users';

const data = [
  { id: 1, nombre: "Martin", apellido: "Garcia", rut: 450303670014, tipo: "empresa", telefono: '099643814', activo: "si" },
  { id: 2, nombre: "Juan", apellido: "Martinez", rut: 154852354198, tipo: "consumidor final", telefono: '098650212', activo: "no" },
  { id: 3, nombre: "Pedro", apellido: "Lopez", rut: 154763214751, tipo: "empresa", telefono: '099306598', activo: "si" },
  { id: 4, nombre: "Alfonso", apellido: "Perez", rut: 354158987452, tipo: "consumidor final", telefono: '094350218', activo: "no" },
  { id: 5, nombre: "Jorge", apellido: "Gimienez", rut: 197346285672, tipo: "empresa", telefono: '099226579', activo: "si" }
];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.PostPet = this.PostPet.bind(this);
    this.selectClient = this.selectClient.bind(this);
    this.delete = this.delete.bind(this);
  }

  state = {
    data: data,
    form: {
      id: '',
      nombre: '',
      apellido: '',
      rut: '',
      tipo: '',
      telefono: '',
      activo: ''
    },
  };

  PostPet = async () => {
    let NewValue = { ...this.state.form };
    NewValue.id = this.state.data.length + 1;
    let NewList = this.state.data;
    NewList.push(NewValue);
    this.setState({ data: NewList })
    await axios.post(api_endpoint, this.state.form)
      .catch(error => {
        console.log(error.message);
      })
  }

  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  selectClient = (client) => {
    this.setState({
      form: {
        id: client.id,
        nombre: client.nombre,
        apellido: client.apellido,
        rut: client.rut,
        tipo: client.tipo,
        telefono: client.telefono,
        activo: client.activo

      }
    })
  }

  delete = (client) => {
    let option = window.confirm("Are you sure you want to delete client "+client.id);
    if (option == true) {
      let counter = 0;
      let array = this.state.data;
      array.map((register) => {
        if (client.id == register.id) {
          array.splice(counter, 1);
        }
        counter++;
      });
      this.setState({ data: array});
    }
  };

  render() {
    return (
      <div>
        <Title></Title>
        <br />
        <Container>
          <InsertButton state={this.state} PostPet={this.PostPet} handleChange={this.handleChange}></InsertButton>
          <br />
          <Table_clients data={data} selectClient={this.selectClient} state={this.state} delete={this.delete}></Table_clients>
        </Container>
      </div >
    )
  }
}

export default App;
