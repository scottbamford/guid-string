/**
 * Utility methods that allow us to do simple management of Guids within strings.
 */
export class Guid {
    /**
     * Generate a new guid. 
     */
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     * Returns true if value should be treated as an empty guid, false otherwise.
     * 
     * "00000000-0000-0000-0000-000000000000", "", undefined, and null are all considered empty.
     * @param value
     */
    static isEmpty(value: string | undefined | null) {
        if (!value) {
            return true;
        }

        if (value == this.empty) {
            return true;
        }

        return false;
    }

    /**
     * Value of an empty Guid that is valid passing to strict Guid processing.
     */
    static empty: string = '00000000-0000-0000-0000-000000000000';

    /**
     * Returns true if value is a valid guid, false otherwise.
     * @param value
     */
    static isGuid(value: string): boolean {
        // This method is an exact copy of isGuid from https://github.com/Frederick-S/is-guid/blob/master/index.ts
        // The original license for that code is also MIT, and can be found here:
        // https://github.com/Frederick-S/is-guid/blob/master/LICENSE

        return /^\{?[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}?$/.test(value);
    }
}