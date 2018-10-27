defmodule GraphQL.Finance.SupportedCurrency do
  @moduledoc """
  GraphQL type representing all the supported currency.
  """

  use Absinthe.Schema.Notation

  enum :SupportedCurrency do
    value(:MXN)
  end
end
