defmodule GraphQL.Payment.Payment do
  use Absinthe.Schema.Notation

  import_types(GraphQL.Payment.PaymentStatus)
  import_types(GraphQL.Finance.Money)
  import_types(GraphQL.Customers.Client)
  import_types(GraphQL.Customers.Retailer)

  object :Payment do
    field(:id, non_null(:id))
    field(:status, :PaymentStatus)
    field(:total, :Money)

    field(:client, :Client) do
      resolve(fn %{client_id: id}, _, _ ->
        # TODO: connect real data!
        {:ok, GraphQL.Scenes.PaymentMock.getRandomClient()}
      end)
    end

    field(:retailer, :Retailer) do
      resolve(fn %{retailer_id: id}, _, _ ->
        # TODO: connect real data!
        {:ok, GraphQL.Scenes.PaymentMock.getRandomClient()}
      end)
    end

    field(:location, :string)
    field(:date, :string)
  end
end
