import Client from "../core/Client";
import { IconEdit, IconTrash } from "./Icones";

interface TableProps {
  clientes: Client[]
  clienteSelecionado?: (cliente: Client) => void
  clienteExcluido?: (cliente: Client) => void
}

export default function Table(props: TableProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
  return (
    <table className={
      `w-full rounded-xl overflow-hidden`
    }>
      <thead className={
        `text-gray-100 
        bg-gradient-to-r from-purple-500 to-purple-800`
      }>
        <tr>
          <th className={`text-left p-4`}>Codigo</th>
          <th className={`text-left p-4`}>Nome</th>
          <th className={`text-left p-4`}>Idade</th>
          {exibirAcoes && <th className={`text-center p-4`}>Ações</th>}
        </tr>
      </thead>
      <tbody>
        {props.clientes?.map((cliente, i) => (
          <tr key={`${cliente.id}-${i}`} className={i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}>
            <td className={`text-left p-4`}>{cliente.id}</td>
            <td className={`text-left p-4`}>{cliente.nome}</td>
            <td className={`text-left p-4`}>{cliente.idade}</td>
            <td className={`flex justify-center items-center`}>
              {props.clienteSelecionado &&
                <button
                  onClick={() => props.clienteSelecionado?.(cliente)}
                  className={
                    `flex justify-center items-center text-green-600 rounded-full p-2 m-1
                  hover:bg-purple-50`
                  }>{IconEdit}</button>
              }
              {props.clienteExcluido &&
                <button
                  onClick={() => props.clienteExcluido?.(cliente)}
                  className={
                    `flex justify-center items-center text-red-600 rounded-full p-2 m-1
                hover:bg-purple-50`
                  }>{IconTrash}</button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}