defmodule GraphQL.Scenes.PaymentScene do
  use Absinthe.Schema.Notation

  import_types(GraphQL.Payment.Payment)

  object :PaymentScene do
    field(:check_status, :Payment) do
      arg(:payment_id, non_null(:id))
      resolve(fn %{payment_id: id}, _ -> {:ok, GraphQL.Scenes.PaymentMock.getRandomPayment()} end)
    end
  end
end
