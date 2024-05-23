import "@typespec/openapi";
using TypeSpec.OpenAPI;

namespace Shared;

/**
 * Date
 * Not timestamp
 * ex. 2021-01-01
 */
@format("date")
scalar Date extends string;

/**
 * DateTime
 * timestamp with timezone
 */
@format("timestamp")
scalar DateTime extends string;

/**
 * Phone number
 * ex. 090-1234-5678
 */
@extension(
  "x-faker",
  {
    `phone.phoneNumber`: ["###-####-####"],
  }
)
scalar PhoneNumber extends string;
