import CountdownTimer from "./Time"
export default function OrderTr({order}){
  let date = `${order.created_at}`
    return (
        <tr>
              <td>{order.id}</td>
              <td>{order.title}</td>
              <td>{order.price} </td>
              <td>{order.currency}</td>
              <td>{date.slice(0 , 10)}</td>
              <td>
                {order?.status}
              </td>
              <td>
                <CountdownTimer data={`${order.created_at}`} />
              </td>
            </tr>
    )
}