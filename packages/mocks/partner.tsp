import "@typespec/openapi3";
import "@typespec/openapi";
import "./shared.tsp";

namespace Partner;

/**
 * パートナー
 */
model Partner {
  /**
   * ID
   */
  @format("uuid")
  id?: string;

  /**
   * 名前
   */
  @TypeSpec.OpenAPI.extension("x-faker", "company.companyName")
  name: string;

  /**
   * イニシャル文字
   */
  @minLength(1)
  @maxLength(1)
  initial: string;

  /**
   * 電話番号
   */
  phone: Shared.PhoneNumber;
}
