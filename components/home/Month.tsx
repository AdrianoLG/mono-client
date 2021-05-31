import Image from 'next/image'
import ProgressBar from '../utils/ProgressBar'
import data from './data.json'

const Month = () => {
  const difference = (real: number, estimated: number) => {
    const dif = ((real - estimated) / estimated) * 100

    // Retrieving two decimals without rounding
    return parseFloat(
      dif.toString().slice(0, dif.toString().indexOf('.') + 3),
    )
  }

  return (
    <div className="mt-4 mb-8">
      {data.map((month) => (
        <div key={month.id} className="month">
          <h2>{month.name}</h2>
          <table className="table w-full text-left">
            <tbody>
              <tr className="bg-table-bg">
                <th className="w-1/4">Categoría</th>
                <th className="w-1/4">Descripción</th>
                <th>Estimado</th>
                <th>Real</th>
                <th className="w-1/4">Diferencia</th>
              </tr>
              <tr>
                <td className="text-lg">Ingresos</td>
              </tr>
              {month.rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <div className="flex items-center">
                      <Image
                        src={`/icons/${row.icon}.svg`}
                        width="15"
                        height="15"
                      />
                      <span className="ml-2">{row.category}</span>
                    </div>
                  </td>
                  <td>{row.description}</td>
                  <td>{row.estimated}€</td>
                  <td>{row.real}€</td>
                  <td>
                    <ProgressBar
                      value={difference(row.real, row.estimated)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default Month
