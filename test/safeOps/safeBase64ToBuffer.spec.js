// /*jshint expr: true*/

// require("mocha");
// require("chai/register-should");
// const Result = require("folktale/result");
// const fc = require('fast-check');
// const { expect } = require("chai");
// const { safeBase64ToBuffer } = require("../../lib/fpcore/safeOps");
// const { compose } = require("ramda");

// const fcAssertProperty = compose(fc.assert, fc.property);

// describe("when safeBase64ToBuffer is called", () => {
//     it("should be a function", () => {
//         safeBase64ToBuffer.should.be.a("function");
//     });

//     it("should create Result for any input", () => {
//         fcAssertProperty(fc.anything(), input => {
//             Result.hasInstance(safeBase64ToBuffer(input)).should.be.true;
//         });
//     });

//     it("should create Result that holds a Buffer for any string", () => {
//         fcAssertProperty(fc.string(), input => {
//             safeBase64ToBuffer(input).getOrElse(null).should.be.an.instanceof(Buffer);
//         });
//     });

//     it("should create Result that holds null for any non-string", () => {
//         fcAssertProperty(fc.anything(), input => {
//             if(typeof input !== 'string')
//                 expect(safeBase64ToBuffer(input).getOrElse(null)).to.be.null;
//         });
//     });

//     it("should not throw when not fed an argument", () => {
//         safeBase64ToBuffer.should.not.throw();
//     });

//     it("should not throw for any argument", () => {
//         fcAssertProperty(fc.anything(), input => {
//             expect(() => safeBase64ToBuffer(input)).to.not.throw();
//         });
//     });
// });