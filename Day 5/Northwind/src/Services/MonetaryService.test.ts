import { monetaryService } from "./MonetaryService";

describe("Testing MonetaryService", () => {

    it("should be created", () => {
        expect(monetaryService).toBeTruthy(); // Created.
    });

    it("should calculate vat correctly", () => {
        const price = Math.floor(Math.random() * 1000);
        const percent = 17;
        const vat = monetaryService.getVat(price, percent);
        expect(vat).toEqual(price * percent / 100);
    });

});



