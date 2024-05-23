import "@typespec/openapi3";
import "@typespec/openapi";
import "./shared.tsp";

namespace Setting;

/**
 * 休日設定
 */
model Holiday {
  /**
   * ID
   */
  @format("uuid")
  id?: string;

  /**
   * 休日
   */
  @TypeSpec.OpenAPI.extension("x-faker", "date.future")
  date: Shared.Date;

  /**
   * 休日名
   */
  name: string;

  /**
   * 祝日フラグ
   */
  isNationalHoliday: boolean;
}

/**
 * デフォルトアサイン設定
 */
model DefaultAssign {
  /**
   * 平日アサイン先
   */
  weekdayAssign: string;

  // 休日/平日フラグ
  /**
   * 月曜日
   */
  monday: boolean;

  /**
   * 火曜日
   */
  tuesday: boolean;

  /**
   * 水曜日
   */
  wednesday: boolean;

  /**
   * 木曜日
   */
  thursday: boolean;

  /**
   * 金曜日
   */
  friday: boolean;

  /**
   * 土曜日
   */
  saturday: boolean;

  /**
   * 日曜日
   */
  sunday: boolean;

  /**
   * 祝日
   */
  holiday: boolean;
}
