# TODO: == or === (?)

Compilation mode:

```
elixirc math.ex     # produces Elixir.Math.beam
iex
iex(1)> Math.sum(2, 3)
```

Scripted mode:

```
elixir math.exs
```

```
mix compile
MIX_ENV=prod mix compile

iex -S mix
mix test
mix test test/kv_test.exs:6
mix format
mix format --check-formatted                # CI only
```

```
iex> :observer.start
iex> runtime_info
```

TODO:

```
dialyzer
```

Agents - simple wrappers around state (processes identified by PID)
GenServer


WTFs:
====

Both OK:

assert KV.Registry.lookup(registry, "shopping") == :error
vs.
assert KV.Registry.lookup(registry, "shopping")
