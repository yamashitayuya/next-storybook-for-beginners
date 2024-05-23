import "@typespec/openapi3";
import "@typespec/openapi";
import "./shared.tsp";

namespace Dashboard;

/**
 * ダッシュボードの注文情報
 */
model Order {
  /**
   * 注文ID
   */
  @minValue(1)
  @TypeSpec.OpenAPI.extension("x-faker", "datatype.number")
  id: int32;

  /**
   * 注文日
   */
  @TypeSpec.OpenAPI.extension("x-faker", "date.recent")
  date: Shared.DateTime;

  /**
   * 金額
   */
  @minValue(0)
  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      `finance.amount`: [100, 100000, 0],
    }
  )
  amount: int32;

  /**
   * お届け先
   */
  @TypeSpec.OpenAPI.extension("x-faker", "address.country")
  shipTo: string;

  /**
   * 支払い方法
   */
  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      fake: ["VISA •••• {{helpers.replaceSymbolWithNumber(####)}}"],
    }
  )
  paymentMethod: string;

  /**
   * 注文者
   */
  @TypeSpec.OpenAPI.extension("x-faker", "name.findName")
  name: string;
}

/**
 * 最新の決済情報
 */
model Deposit {
  /**
   * 金額
   */
  @minValue(0)
  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      `finance.amount`: [0, 1000000, 0],
    }
  )
  amount: int32;

  /**
   * 日付
   */
  @TypeSpec.OpenAPI.extension("x-faker", "date.soon")
  date: Shared.Date;
}

@TypeSpec.OpenAPI.extension(
  "x-faker",
  {
    `datatype.number`: [
      {
        min: 0,
        max: 5000,
        precision: 100,
      }
    ],
  }
)
scalar ChartAmount extends int32;
/**
 * チャート情報
 */
model Chart {
  @minItems(0)
  @maxItems(9)
  amount: ChartAmount[];
}
