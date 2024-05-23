import "@typespec/openapi3";
import "@typespec/openapi";
import "./shared.tsp";

namespace Aggregate;

/**
 * 夜間勤務回数
 */
model NightShift {
  /**
   * 名前
   */
  @TypeSpec.OpenAPI.extension("x-faker", "name.findName")
  name: string;

  /**
   * 回数
   */
  @minValue(0)
  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      `datatype.number`: [
        {
          min: 0,
          max: 30,
        }
      ],
    }
  )
  count: int32;
}

/**
 * 工数
 */
model ManHour {
  /**
   * 現場名
   */
  @TypeSpec.OpenAPI.extension("x-faker", "address.city")
  name: string;

  /**
   * 現場開始日時
   */
  @TypeSpec.OpenAPI.extension("x-faker", "date.past")
  startAt: Shared.Date;

  /**
   * 現場終了日時
   */
  @format("date")
  @TypeSpec.OpenAPI.extension("x-faker", "date.future")
  endAt: Shared.Date;

  /**
   * 対象月の工数
   */
  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      `datatype.number`: [
        {
          min: 0,
          max: 30,
        }
      ],
    }
  )
  manHour: int32;

  /**
   * 総工数
   */
  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      `datatype.number`: [
        {
          min: 0,
          max: 500,
        }
      ],
    }
  )
  totalManHour: int32;
}

/**
 * 今日までの有給休暇
 */
model PaidVacation {
  /**
   * 名前
   */
  @TypeSpec.OpenAPI.extension("x-faker", "name.findName")
  name: string;

  /**
   * 有給休暇日数
   */
  @minValue(0)
  @TypeSpec.OpenAPI.extension(
    "x-faker",
    {
      `datatype.number`: [
        {
          min: 0,
          max: 30,
        }
      ],
    }
  )
  count: int32;

  /**
   * 人ごとによる今日までの集計期間
   */
  @format("date")
  @TypeSpec.OpenAPI.extension("x-faker", "date.past")
  aggregationPeriod: string;
}
