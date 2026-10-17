/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Errors_Invalidcredentials2Inputs */

const en_auth_signin_errors_invalidcredentials2 = /** @type {(inputs: Auth_Signin_Errors_Invalidcredentials2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid username or password. Please try again.`)
};

const ja_auth_signin_errors_invalidcredentials2 = /** @type {(inputs: Auth_Signin_Errors_Invalidcredentials2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー名またはパスワードが無効です。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Invalid username or password. Please try again." |
*
* @param {Auth_Signin_Errors_Invalidcredentials2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_errors_invalidcredentials2 = /** @type {((inputs?: Auth_Signin_Errors_Invalidcredentials2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Errors_Invalidcredentials2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_errors_invalidcredentials2(inputs)
	return en_auth_signin_errors_invalidcredentials2(inputs)
});
export { auth_signin_errors_invalidcredentials2 as "auth.signIn.errors.invalidCredentials" }