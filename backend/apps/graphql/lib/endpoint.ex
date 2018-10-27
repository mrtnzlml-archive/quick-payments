defmodule GraphQL.Endpoint do
  use Plug.Router

  plug(CORSPlug)
  plug(:match)

  plug(Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Poison
  )

  plug(:dispatch)

  post("/",
    to: Absinthe.Plug,
    init_opts: [
      schema: GraphQL.Schema,
      analyze_complexity: true,
      max_complexity: :infinity
    ]
  )

  get("/",
    to: Absinthe.Plug.GraphiQL,
    init_opts: [
      schema: GraphQL.Schema
    ]
  )

  match _ do
    send_resp(conn, 404, "oops 404")
  end
end
