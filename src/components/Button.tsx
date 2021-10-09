interface ButtonProps {
  children: any
  classname?: string
  color?: 'green' | 'blue' | 'grey'
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  const cor = props.color ?? 'gray'
  return (
    <button onClick={props.onClick} className={
      `bg-gradient-to-r from-${cor}-400 to-${cor}-700
      text-white px-4 py-2 rounded-md ${props.classname}`
    }>
      {props.children}
    </button>
  )
}