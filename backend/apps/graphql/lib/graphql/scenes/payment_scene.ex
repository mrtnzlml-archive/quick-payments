defmodule GraphQL.Scenes.PaymentScene do
  use Absinthe.Schema.Notation

  import_types(GraphQL.Payment.Payment)

  object :PaymentScene do
    field(:checkStatus, :Payment) do
      arg(:payment_id, non_null(:id))
    end
  end
end
