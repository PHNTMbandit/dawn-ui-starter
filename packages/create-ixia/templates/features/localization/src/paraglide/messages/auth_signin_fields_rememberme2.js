/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Fields_Rememberme2Inputs */

const en_auth_signin_fields_rememberme2 = /** @type {(inputs: Auth_Signin_Fields_Rememberme2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remember me?`)
};

const ja_auth_signin_fields_rememberme2 = /** @type {(inputs: Auth_Signin_Fields_Rememberme2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン状態を保持する`)
};

/**
* | output |
* | --- |
* | "Remember me?" |
*
* @param {Auth_Signin_Fields_Rememberme2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_fields_rememberme2 = /** @type {((inputs?: Auth_Signin_Fields_Rememberme2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Fields_Rememberme2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_fields_rememberme2(inputs)
	return en_auth_signin_fields_rememberme2(inputs)
});
export { auth_signin_fields_rememberme2 as "auth.signIn.fields.rememberMe" }