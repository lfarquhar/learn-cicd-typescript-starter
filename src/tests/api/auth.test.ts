import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../api/auth";
import { IncomingHttpHeaders } from "http";

const headers: IncomingHttpHeaders = {};
headers["authorization"] = "ApiKey 12345";

describe("isAuthorized", () => {
  test("authorization is on the headers is defined", () => {
    const result = getAPIKey(headers);
    expect(result).equal("123456");
  });
});

/*
https://vitest.dev/guide/

1. npm install -D vitest
2. add to package.json
  "scripts": {
    "test": "vitest --run"
  },
3. create the test
4. npm run test

*/
