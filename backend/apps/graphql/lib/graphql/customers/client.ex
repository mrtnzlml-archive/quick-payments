defmodule GraphQL.Customers.Client do
  use Absinthe.Schema.Notation

  object :Client do
    field(:id, non_null(:id))
    field(:name, :string)
  end
end
