import React from "react";
import Title from './components/Title';
import InsertButton from "./components/InsertButton";
import Table_clients from "./components/Table";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

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

    this.insertVar = this.insertVar.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    modalInsert: false,
  };

  insertVar = () => {
    let NewValue = { ...this.state.form };
    NewValue.id = this.state.data.length + 1;
    let NewList = this.state.data;
    NewList.push(NewValue);
    this.setState({ data: NewList })
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Title></Title>
        <br />
        <Container>
          <InsertButton state={this.state} insertVar={this.insertVar} handleChange={this.handleChange}></InsertButton>
          <br />
          <Table_clients data={data}></Table_clients>
        </Container>
      </div>
    )
  }
}

export default App;
