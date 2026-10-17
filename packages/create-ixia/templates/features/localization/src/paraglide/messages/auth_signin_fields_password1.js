/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Fields_Password1Inputs */

const en_auth_signin_fields_password1 = /** @type {(inputs: Auth_Signin_Fields_Password1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password`)
};

const ja_auth_signin_fields_password1 = /** @type {(inputs: Auth_Signin_Fields_Password1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワード`)
};

/**
* | output |
* | --- |
* | "Password" |
*
* @param {Auth_Signin_Fields_Password1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_fields_password1 = /** @type {((inputs?: Auth_Signin_Fields_Password1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Fields_Password1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_fields_password1(inputs)
	return en_auth_signin_fields_password1(inputs)
});
export { auth_signin_fields_password1 as "auth.signIn.fields.password" }