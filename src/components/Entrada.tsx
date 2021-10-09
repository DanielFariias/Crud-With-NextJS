interface EntradaProps {
  texto: string
  tipo?: 'text' | 'number'
  value: any
  somenteLeitura?: boolean
  className?: string
  valorMudou?: (valor: any) => void
}
export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className={`mt-4 mb-2`}>
        {props.texto}:
      </label>
      <input
        type={props.tipo ?? "text"}
        value={props.value}
        onChange={e => props.valorMudou?.(e.target.value)}
        className={
          `border border-purple-500 rounded-lg
          bg-gray-100 px-4 py-2
          focus:outline-none 
          ${props.somenteLeitura ? '' : 'focus:bg-white'}
          `
        } />
    </div>
  )
}