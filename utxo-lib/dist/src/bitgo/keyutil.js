var BigInteger = require('bigi');
var ECPair = require('../ecpair');
/**
 * Create an ECPair from the raw private key bytes
 * @param {Buffer} buffer - Private key for the ECPair. Must be exactly 32 bytes.
 * @param {Object} [network] - Network for the ECPair. Defaults to bitcoin.
 * @return {ECPair}
 */
function privateKeyBufferToECPair(buffer, network) {
    if (!Buffer.isBuffer(buffer) || buffer.length !== 32) {
        throw new Error('invalid private key buffer');
    }
    var d = BigInteger.fromBuffer(buffer);
    return new ECPair(d, null, { network: network });
}
/**
 * Get the private key as a 32 bytes buffer. If it is smaller than 32 bytes, pad it with zeros
 * @param {ECPair} ecPair
 * @return {Buffer} 32 bytes
 */
function privateKeyBufferFromECPair(ecPair) {
    if (!(ecPair instanceof ECPair)) {
        throw new TypeError("invalid argument ecpair");
    }
    if (!ecPair.d)
        throw new Error('Missing private key');
    return ecPair.d.toBuffer(32);
}
module.exports = {
    privateKeyBufferToECPair: privateKeyBufferToECPair,
    privateKeyBufferFromECPair: privateKeyBufferFromECPair
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5dXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaXRnby9rZXl1dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNsQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFbkM7Ozs7O0dBS0c7QUFDSCxTQUFTLHdCQUF3QixDQUFFLE1BQU0sRUFBRSxPQUFPO0lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1FBQ3BELE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtLQUM5QztJQUVELElBQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdkMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFBO0FBQ3pDLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBUywwQkFBMEIsQ0FBRSxNQUFNO0lBQ3pDLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxNQUFNLENBQUMsRUFBRTtRQUMvQixNQUFNLElBQUksU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUE7S0FDL0M7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFFckQsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM5QixDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLHdCQUF3QiwwQkFBQTtJQUN4QiwwQkFBMEIsNEJBQUE7Q0FDM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJpZ0ludGVnZXIgPSByZXF1aXJlKCdiaWdpJylcbmNvbnN0IEVDUGFpciA9IHJlcXVpcmUoJy4uL2VjcGFpcicpXG5cbi8qKlxuICogQ3JlYXRlIGFuIEVDUGFpciBmcm9tIHRoZSByYXcgcHJpdmF0ZSBrZXkgYnl0ZXNcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgLSBQcml2YXRlIGtleSBmb3IgdGhlIEVDUGFpci4gTXVzdCBiZSBleGFjdGx5IDMyIGJ5dGVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtuZXR3b3JrXSAtIE5ldHdvcmsgZm9yIHRoZSBFQ1BhaXIuIERlZmF1bHRzIHRvIGJpdGNvaW4uXG4gKiBAcmV0dXJuIHtFQ1BhaXJ9XG4gKi9cbmZ1bmN0aW9uIHByaXZhdGVLZXlCdWZmZXJUb0VDUGFpciAoYnVmZmVyLCBuZXR3b3JrKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZmZlcikgfHwgYnVmZmVyLmxlbmd0aCAhPT0gMzIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgcHJpdmF0ZSBrZXkgYnVmZmVyJylcbiAgfVxuXG4gIGNvbnN0IGQgPSBCaWdJbnRlZ2VyLmZyb21CdWZmZXIoYnVmZmVyKVxuICByZXR1cm4gbmV3IEVDUGFpcihkLCBudWxsLCB7IG5ldHdvcmsgfSlcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByaXZhdGUga2V5IGFzIGEgMzIgYnl0ZXMgYnVmZmVyLiBJZiBpdCBpcyBzbWFsbGVyIHRoYW4gMzIgYnl0ZXMsIHBhZCBpdCB3aXRoIHplcm9zXG4gKiBAcGFyYW0ge0VDUGFpcn0gZWNQYWlyXG4gKiBAcmV0dXJuIHtCdWZmZXJ9IDMyIGJ5dGVzXG4gKi9cbmZ1bmN0aW9uIHByaXZhdGVLZXlCdWZmZXJGcm9tRUNQYWlyIChlY1BhaXIpIHtcbiAgaWYgKCEoZWNQYWlyIGluc3RhbmNlb2YgRUNQYWlyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGludmFsaWQgYXJndW1lbnQgZWNwYWlyYClcbiAgfVxuXG4gIGlmICghZWNQYWlyLmQpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwcml2YXRlIGtleScpXG5cbiAgcmV0dXJuIGVjUGFpci5kLnRvQnVmZmVyKDMyKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJpdmF0ZUtleUJ1ZmZlclRvRUNQYWlyLFxuICBwcml2YXRlS2V5QnVmZmVyRnJvbUVDUGFpclxufVxuIl19