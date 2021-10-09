import { useEffect, useState } from "react";
import Client from "../core/Client";
import ClientRepositorio from "../core/ClientRepositorio";
import ColecaoCliente from "../firebase/db/ColecaoClientes";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {

  const { TabelaVisivel, exibirForm, exibirTabela, formularioVisivel } = useTabelaOuForm()

  const [clientes, setClientes] = useState<Client[]>([])
  const [cliente, setCliente] = useState<Client>(Client.vazio())

  const repo: ClientRepositorio = new ColecaoCliente()

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes)
      exibirTabela()
    })

  }

  function selecionarCliente(cliente: Client) {
    setCliente(cliente)
    exibirForm()
  }
  async function excluirCliente(cliente: Client) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Client) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Client.vazio())
    exibirForm()
  }


  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    TabelaVisivel,
    exibirTabela,
  }
}