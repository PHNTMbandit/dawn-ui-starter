/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Errors_Title1Inputs */

const en_auth_signin_errors_title1 = /** @type {(inputs: Auth_Signin_Errors_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unable to sign in`)
};

const ja_auth_signin_errors_title1 = /** @type {(inputs: Auth_Signin_Errors_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サインインできませんでした`)
};

/**
* | output |
* | --- |
* | "Unable to sign in" |
*
* @param {Auth_Signin_Errors_Title1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_errors_title1 = /** @type {((inputs?: Auth_Signin_Errors_Title1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Errors_Title1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_errors_title1(inputs)
	return en_auth_signin_errors_title1(inputs)
});
export { auth_signin_errors_title1 as "auth.signIn.errors.title" }