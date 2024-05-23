import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "./dashboard.tsp";
import "./employee.tsp";
import "./partner.tsp";
import "./aggregate.tsp";
import "./setting.tsp";

using TypeSpec.Http;

@service({
  title: "Service",
})
namespace Service;

model BaseResponse<T> {
  data: T;
}

/**
 * ダッシュボードAPI
 */
@route("/v1/dashboard")
interface V1 {
  /**
   * 受注情報
   */
  @get
  @route("/order")
  Order(): BaseResponse<Dashboard.Order[]>;
  /**
   * 入金情報
   */
  @get
  @route("/deposit")
  Deposit(): BaseResponse<Dashboard.Deposit>;
  /**
   * 日時売上推移
   */
  @get
  @route("/chart")
  Chart(): BaseResponse<Dashboard.Chart>;
}

/**
 * 社員API
 */
@route("/v1/employee")
interface V1Employee {
  /**
   * 一覧取得
   */
  @get
  @route("/")
  List(): BaseResponse<Employee.Employee[]>;
  /**
   * 詳細取得
   */
  @get
  @route("/{id}")
  Get(id: string): BaseResponse<Employee.Employee>;
  /**
   * 登録
   */
  @post
  @route("/")
  Create(...Employee.CreateOrUpdate): BaseResponse<Employee.Employee>;
  /**
   * 更新
   */
  @put
  @route("/{id}")
  Update(
    @body data: Employee.CreateOrUpdate,
    @format("uuid") @path id: string,
  ): BaseResponse<Employee.Employee>;
  /**
   * 削除
   */
  @delete
  @route("/{id}")
  Delete(id: string): BaseResponse<Employee.Employee>;
}

/**
 * 協力会社API
 */
@route("/v1/partner")
interface V1Partner {
  /**
   * 一覧取得
   */
  @get
  @route("/")
  List(): BaseResponse<Partner.Partner[]>;
  /**
   * 詳細取得
   */
  @get
  @route("/{id}")
  Get(id: string): BaseResponse<Partner.Partner>;
  /**
   * 登録
   */
  @post
  @route("/")
  Create(...Partner.Partner): BaseResponse<Partner.Partner>;
  /**
   * 更新
   */
  @put
  @route("/{id}")
  Update(
    @body data: Partner.Partner,
    @format("uuid") @path id: string,
  ): BaseResponse<Partner.Partner>;
  /**
   * 削除
   */
  @delete
  @route("/{id}")
  Delete(id: string): BaseResponse<Partner.Partner>;
}

/**
 * 集計API
 */
@route("v1/aggregate")
interface V1Aggregate {
  /**
   * 夜間勤務集計
   */
  @get
  @route("/nightshift")
  NightShift(): BaseResponse<Aggregate.NightShift[]>;
  /**
   * 現場工数集計
   */
  @get
  @route("/manhour/{date}")
  ManHour(date: Shared.Date): BaseResponse<Aggregate.ManHour[]>;
  /**
   * 有給休暇集計
   */
  @get
  @route("/paidvacation")
  PaidVacation(): BaseResponse<Aggregate.PaidVacation[]>;
}

/**
 * カレンダー休日設定API
 */
@route("/v1/setting/holiday")
interface V1SettingHoliday {
  /**
   * 一覧取得
   */
  @get
  @route("/{month}")
  List(@path month: string): BaseResponse<Setting.Holiday[]>;
  /**
   * 詳細取得
   */
  @get
  @route("/{id}")
  Get(id: string): BaseResponse<Setting.Holiday>;
  /**
   * 登録
   */
  @post
  @route("/")
  Create(@body data: Setting.Holiday[]): BaseResponse<Setting.Holiday[]>;
  /**
   * 更新
   */
  @put
  @route("/{id}")
  Update(
    @body data: Setting.Holiday,
    @format("uuid") @path id: string,
  ): BaseResponse<Setting.Holiday>;
  /**
   * 削除
   */
  @delete
  @route("/{id}")
  Delete(@format("uuid") @path id: string): BaseResponse<Setting.Holiday>;
}

/**
 * デフォルトアサイン設定API
 */
@route("/v1/setting/defaultassign")
interface V1DefaultAssign {
  /**
   * 取得
   */
  @get
  @route("/")
  Get(): BaseResponse<Setting.DefaultAssign>;
  /**
   * 更新
   */
  @put
  @route("/")
  Update(...Setting.DefaultAssign): BaseResponse<Setting.DefaultAssign>;
}
