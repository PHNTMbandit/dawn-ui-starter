/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Errors_Network1Inputs */

const en_auth_signin_errors_network1 = /** @type {(inputs: Auth_Signin_Errors_Network1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unable to reach the server. Please try again.`)
};

const ja_auth_signin_errors_network1 = /** @type {(inputs: Auth_Signin_Errors_Network1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバーに接続できませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Unable to reach the server. Please try again." |
*
* @param {Auth_Signin_Errors_Network1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_errors_network1 = /** @type {((inputs?: Auth_Signin_Errors_Network1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Errors_Network1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_errors_network1(inputs)
	return en_auth_signin_errors_network1(inputs)
});
export { auth_signin_errors_network1 as "auth.signIn.errors.network" }