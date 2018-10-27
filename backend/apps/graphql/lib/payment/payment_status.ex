defmodule GraphQL.Payment.PaymentStatus do
  @moduledoc """
  GraphQL type representing current payment status.
  """

  use Absinthe.Schema.Notation

  enum :PaymentStatus do
    value(:PAID)
    value(:FAILED)
  end
end
