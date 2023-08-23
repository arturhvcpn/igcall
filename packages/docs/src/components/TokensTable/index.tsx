import '../../styles/tokens-table.css'

interface TokensTableProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

function TokensTable({ tokens, hasRemValue = false }: TokensTableProps) {
  return (
    <table className="tokens-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value?.replace('rem', '')) * 16}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { TokensTable }
