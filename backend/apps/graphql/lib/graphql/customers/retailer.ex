defmodule GraphQL.Customers.Retailer do
  @moduledoc """
  GraphQL type representing retailer (upgraded client).
  """

  use Absinthe.Schema.Notation

  object :Retailer do
    field(:id, non_null(:id))
    field(:name, :string)
  end
end
