defmodule GraphQL.Scenes.DashboardScene do
  use Absinthe.Schema.Notation

  require Logger

  import_types(GraphQL.Payment.Payment)

  object :DashboardScene do
    field(:payments, list_of(:Payment)) do
      arg(:client_id, non_null(:id))

      resolve(fn %{client_id: id}, _ ->
        # TODO: connect real data!
        {:ok,
         Enum.map(1..20, fn n ->
           GraphQL.Scenes.PaymentMock.getRandomPayment()
         end)}
      end)
    end
  end
end
