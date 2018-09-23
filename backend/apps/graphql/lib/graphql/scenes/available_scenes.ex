defmodule GraphQL.Scenes.AvailableScenes do
  use Absinthe.Schema.Notation

  import_types(GraphQL.Scenes.DashboardScene)
  import_types(GraphQL.Scenes.PaymentScene)

  object :AvailableScenes do
    field(:dashboard, :DashboardScene) do
      # passthrough
      resolve(fn _, _ -> {:ok, %{}} end)
    end

    field(:payment, :PaymentScene) do
      # passthrough
      resolve(fn _, _ -> {:ok, %{}} end)
    end
  end
end
