/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Fields_Username1Inputs */

const en_auth_signin_fields_username1 = /** @type {(inputs: Auth_Signin_Fields_Username1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Username`)
};

const ja_auth_signin_fields_username1 = /** @type {(inputs: Auth_Signin_Fields_Username1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー名`)
};

/**
* | output |
* | --- |
* | "Username" |
*
* @param {Auth_Signin_Fields_Username1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_fields_username1 = /** @type {((inputs?: Auth_Signin_Fields_Username1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Fields_Username1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_fields_username1(inputs)
	return en_auth_signin_fields_username1(inputs)
});
export { auth_signin_fields_username1 as "auth.signIn.fields.username" }