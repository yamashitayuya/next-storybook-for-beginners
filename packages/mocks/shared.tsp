import "@typespec/openapi";

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
@TypeSpec.OpenAPI.extension("x-faker", "date.recent")
scalar DateTime extends string;
