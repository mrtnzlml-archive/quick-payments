defmodule QuickPayments.MixProject do
  use Mix.Project

  # TODO: maybe re-init Distillery to support umbrella differently? (currently not needed)

  def project do
    [
      app: :backend,
      version: "0.1.0",
      apps_path: "apps",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Dependencies listed here are available only for this
  # project and cannot be accessed from applications inside
  # the apps folder.
  #
  # Run "mix help deps" for examples and options.
  defp deps do
    [
      {:credo, "~> 0.10.2", only: [:dev, :test], runtime: false},
      {:distillery, "~> 2.0"}
    ]
  end
end
