import Button from "../components/Button";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente, clientes,
    selecionarCliente,
    salvarCliente,
    excluirCliente,
    novoCliente,
    TabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={
      `flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-600
      text-white`
    }>
      <Layout title={'Cadastro Simples'}>
        {TabelaVisivel ? (
          <>
            <div className={`flex justify-end`}>
              <Button
                onClick={novoCliente}
                classname={`mb-4`} color='green'
              >
                Novo Cliente
              </Button>
            </div>
            <Table
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
