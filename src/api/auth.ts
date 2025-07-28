import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  const authHeader = headers["authorization"];

  console.log("authHeader: ", authHeader);

  if (!authHeader) {
    return null;
  }

  const splitAuth = authHeader.split(" ");

  console.log("splitAuth: ", splitAuth);
  console.log("0: ", splitAuth[0]);
  console.log("length: ", splitAuth.length);

  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}
