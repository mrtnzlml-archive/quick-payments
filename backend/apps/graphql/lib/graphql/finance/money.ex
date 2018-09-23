defmodule GraphQL.Finance.Money do
  use Absinthe.Schema.Notation

  import_types(GraphQL.Finance.SupportedCurrency)

  object :Money do
    field(:amount, :string)
    field(:currency, :SupportedCurrency)
  end
end
