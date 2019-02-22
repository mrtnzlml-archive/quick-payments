https://cloud.google.com/cloud-build/docs/configure-third-party-notifications#slack_notifications

# Environment variables

- `SLACK_WEBHOOK`

# Triggering event

```json
{
  "data": "eyJzdGF0dXMiOiJTVUNDRVNTIn0="
}
```

What? Why?

```
▲ mrtnzlml iex
Erlang/OTP 21 [erts-10.0.8] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:1] [hipe] [dtrace]

Interactive Elixir (1.7.3) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)> Base.encode64("{\"status\":\"SUCCESS\"}")
"eyJzdGF0dXMiOiJTVUNDRVNTIn0="
```

(expects PubSub event message)
