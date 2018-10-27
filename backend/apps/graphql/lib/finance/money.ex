defmodule GraphQL.Finance.Money do
  @moduledoc """
  GraphQL type representing money.
  """

  use Absinthe.Schema.Notation

  import_types(GraphQL.Finance.SupportedCurrency)

  object :Money do
    field(:amount, :string)
    field(:currency, :SupportedCurrency)
  end
end
