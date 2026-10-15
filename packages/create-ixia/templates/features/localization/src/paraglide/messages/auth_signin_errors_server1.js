/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Errors_Server1Inputs */

const en_auth_signin_errors_server1 = /** @type {(inputs: Auth_Signin_Errors_Server1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong. Please try again later.`)
};

const ja_auth_signin_errors_server1 = /** @type {(inputs: Auth_Signin_Errors_Server1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラーが発生しました。しばらくしてからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Something went wrong. Please try again later." |
*
* @param {Auth_Signin_Errors_Server1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_errors_server1 = /** @type {((inputs?: Auth_Signin_Errors_Server1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Errors_Server1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_errors_server1(inputs)
	return en_auth_signin_errors_server1(inputs)
});
export { auth_signin_errors_server1 as "auth.signIn.errors.server" }