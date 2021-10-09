import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Entrada from "./Entrada";

interface formularioProps {
  cliente: Client
  cancelado?: () => void
  clienteMudou?: (cliente: Client) => void
}
export default function Formulario(props: formularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
      {id ?
        <Entrada
          texto="Codigo"
          value={id}
          somenteLeitura
        // className={`mb-4`}
        /> :
        false
      }
      <Entrada
        texto="Nome"
        value={nome}
        valorMudou={setNome}
      // className={`mb-4`}
      />

      <Entrada
        texto="Idade"
        value={idade}
        tipo='number'
        valorMudou={setIdade}
      />
      <div className={`flex justify-end mt-7`}>
        <Button
          color='blue'
          classname={`mr-2`}
          onClick={() => props.clienteMudou?.(new Client(nome, +idade, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.cancelado}>Cancelar</Button>
      </div>
    </div>
  )
}