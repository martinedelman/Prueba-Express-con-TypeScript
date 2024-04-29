import request from "supertest";
import app from "../api";

import { checkInputIsValid } from "../api/BusinessLogic/DataLogic";

describe("Endpoints", () => {
  it("GET /datos debería devolver status 200", async () => {
    const response = await request(app).get("/v1/api/datos");
    expect(response.status).toBe(200);
  });

  it("POST /datos debería devolver status 200", async () => {
    const response = await request(app).post("/v1/api/datos");
    expect(response.status).toBe(200);
  });

  it("Check POST Inputs are valid", async () => {
    const areValid = checkInputIsValid({ nombre: "Test", id: 1 });
    expect(areValid).toBe(true);
  });
});
