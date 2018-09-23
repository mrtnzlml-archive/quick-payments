defmodule GraphQL.Scenes.DashboardScene do
  use Absinthe.Schema.Notation

  require Logger

  import_types(GraphQL.Payment.Payment)

  object :DashboardScene do
    field(:payments, list_of(:Payment)) do
      arg(:client_id, non_null(:id))

      resolve(fn %{client_id: id}, _ ->
        Logger.info(id)
        {:ok, %{id: "OK"}}
      end)
    end
  end
end
