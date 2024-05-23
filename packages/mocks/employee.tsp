import "@typespec/openapi3";
import "@typespec/openapi";
import "./shared.tsp";

namespace Employee;

/**
 * 社員
 */
model Employee {
  /**
   * ID
   */
  @format("uuid")
  id?: string;

  /**
   * 名前
   */
  @TypeSpec.OpenAPI.extension("x-faker", "name.findName")
  name: string;

  /**
   * メールアドレス
   */
  @format("email")
  email: string;

  /**
   * 電話番号
   */
  phone: Shared.PhoneNumber;

  /**
   * イニシャル文字
   */
  @minLength(1)
  @maxLength(1)
  initial: string;

  /**
   * 入社日
   */
  @format("date")
  hiredDate: string;

  /**
   * カラーコード
   */
  color: Color;

  /**
   * カレンダー表示フラグ
   */
  isCalendarVisible: boolean;

  /**
   * 権限
   */
  role: Role;
}

/**
 * 社員登録・編集
 */
model CreateOrUpdate extends Employee {
  /**
   * パスワード
   */
  @format("password")
  password: string;
}

/**
 * 権限
 */
union Role {
  "admin",
  "employee",
}

/**
 * カラーコード
 */
union Color {
  "#ffffff",
  "#000000",
  "#ff0000",
  "#00ff00",
  "#0000ff",
}
