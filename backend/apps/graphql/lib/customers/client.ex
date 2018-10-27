defmodule GraphQL.Customers.Client do
  @moduledoc """
  GraphQL type representing client.
  """

  use Absinthe.Schema.Notation

  object :Client do
    field(:id, non_null(:id))
    field(:name, :string)
  end
end
