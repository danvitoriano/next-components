export default function Text(props) {
  return (
    <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        este é um texto: {props.name}
    </p>
  )
}