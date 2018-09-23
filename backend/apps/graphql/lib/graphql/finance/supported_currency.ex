defmodule GraphQL.Finance.SupportedCurrency do
  use Absinthe.Schema.Notation

  enum :SupportedCurrency do
    value(:MXN)
  end
end
