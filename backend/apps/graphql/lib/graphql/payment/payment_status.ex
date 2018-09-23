defmodule GraphQL.Payment.PaymentStatus do
  use Absinthe.Schema.Notation

  enum :PaymentStatus do
    value(:PAID)
    value(:FAILED)
  end
end
