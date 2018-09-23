defmodule GraphQL.Customers.Retailer do
  use Absinthe.Schema.Notation

  object :Retailer do
    field(:id, non_null(:id))
    field(:name, :string)
  end
end
