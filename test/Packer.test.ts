
import assert from "assert";
import common from "mocha/lib/interfaces/common";
import { pack } from "../src/Packer";

describe("Packer", () => {
    it("fileName is not empty", () => {
        const actual: string = pack('');
        const expected: string = '';

        assert.equal(actual, expected);
    });
   