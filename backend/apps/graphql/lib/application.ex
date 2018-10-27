defmodule GraphQL.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  require Logger

  def start(_type, _args) do
    port = Application.get_env(:graphql, :port)

    # List all child processes to be supervised
    children = [
      # Starts a worker by calling: GraphQL.Worker.start_link(arg)
      # {GraphQL.Worker, arg},
      Plug.Adapters.Cowboy2.child_spec(
        scheme: :http,
        plug: GraphQL.Endpoint,
        options: [port: port]
      )
    ]

    Logger.info("🚀 http://127.0.0.1:#{port}")

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: GraphQL.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
