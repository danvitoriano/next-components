export default function Button({ children, ...props }) {
  return (
    <button
      className='rounded-lg border border-gray-300 bg-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
    >
      {children}
    </button>
  )
}