defmodule GraphQLTest do
  use ExUnit.Case
  doctest GraphQL

  test "greets the world" do
    assert GraphQL.hello() == :world
  end
end
