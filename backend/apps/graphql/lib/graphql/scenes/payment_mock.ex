defmodule GraphQL.Scenes.PaymentMock do
  @moduledoc """
  This module provides helper functions to mock GraphQL responses.
  """

  # TODO: remove and replace with real data!
  def get_random_payment do
    %{
      :id => UUID.uuid4(),
      :client_id => "ea53a691-9970-46bb-bacd-80d4a120334e",
      :retailer_id => "5b3d42c0-a0ef-4f69-8af6-f8162f2acb60",
      :status => Enum.random([:PAID, :FAILED]),
      :total => %{
        :amount => :rand.uniform(10_000) / 100,
        :currency => :MXN
      },
      :location => "Mexico City",
      :date => "1537727279539"
    }
  end

  def get_random_client do
    %{
      :id => UUID.uuid4(),
      :name => "John Doe"
    }
  end
end
