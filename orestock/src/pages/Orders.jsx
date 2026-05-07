import { useEffect, useState }
from "react"

function Orders() {

  const [orders, setOrders] =
    useState([])

  const token =
    localStorage.getItem("token")

  useEffect(() => {

    fetch(
      "http://localhost:3001/orders/my-orders",
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    )
      .then((res) => res.json())
      .then(setOrders)

  }, [])

  return (
    <section className="
      max-w-4xl
      mx-auto
      py-12
    ">

      <h1 className="
        text-3xl
        font-bold
        mb-6
      ">
        Mis pedidos
      </h1>

      <div className="space-y-4">

        {orders.map((o) => (

          <div
            key={o.id}
            className="
              bg-white
              shadow
              rounded-xl
              p-6
            "
          >

            <div className="
              flex justify-between
            ">

              <div>

                <p className="
                  font-bold
                ">
                  Pedido #{o.id}
                </p>

                <p className="
                  text-gray-500 text-sm
                ">
                  {o.created_at}
                </p>

              </div>

              <div className="
                text-xl font-bold
              ">
                ${o.total}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Orders