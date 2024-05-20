import "@typespec/openapi3";
import "@typespec/openapi";
import "./shared.tsp";

namespace Dashboard;

/**
 * ダッシュボードの注文情報
 */
model Order {
  @minValue(1)
  @TypeSpec.OpenAPI.extension("x-faker", "datatype.number")
  id: int32;

  date: Shared.DateTime;

  @minValue(0)
  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      `finance.amount`: [100, 100000, 0],
    }
  )
  amount: int32;

  @TypeSpec.OpenAPI.extension("x-faker", "address.country")
  shipTo: string;

  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      fake: ["VISA •••• {{helpers.replaceSymbolWithNumber(####)}}"],
    }
  )
  paymentMethod: string;

  @TypeSpec.OpenAPI.extension("x-faker", "name.findName")
  name: string;
}

/**
 * 最新の決済情報
 */
model Deposit {
  @minValue(0)
  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      `finance.amount`: [0, 1000000, 0],
    }
  )
  amount: int32;

  @TypeSpec.OpenAPI.extension("x-faker", "date.soon")
  date: Shared.Date;
}

/**
 * チャート情報
 */
model Chart {}
