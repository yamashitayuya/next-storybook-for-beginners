import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "./dashboard.tsp";

using TypeSpec.Http;

@service({
  title: "Service",
})
namespace Service;

@route("/v1/dashboard")
interface V1 {
  @get
  @route("/order")
  Order(): BaseResponse<Dashboard.Order[]>;
  @get
  @route("/deposit")
  Deposit(): BaseResponse<Dashboard.Deposit>;
}

model BaseResponse<T> {
  data: T;
}
