defmodule GraphQL.Schema do
  @moduledoc """
  GraphQL type representing GraphQL schema.
  """

  use Absinthe.Schema

  import_types(GraphQL.Scenes.AvailableScenes)

  # TODO: implement `node` query for Payment, Client and Retailer types

  query name: "RootQuery" do
    field(:scenes, :AvailableScenes) do
      # passthrough
      resolve(fn _, _ -> {:ok, %{}} end)
    end
  end

  mutation name: "RootMutation" do
    field :test, type: :string do
      arg(:input, non_null(:string))
      resolve(fn %{input: input}, _ -> {:ok, input} end)
    end
  end
end
