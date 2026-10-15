/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Validation_Usernamemin2Inputs */

const en_auth_signin_validation_usernamemin2 = /** @type {(inputs: Auth_Signin_Validation_Usernamemin2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Username must be at least 3 characters`)
};

const ja_auth_signin_validation_usernamemin2 = /** @type {(inputs: Auth_Signin_Validation_Usernamemin2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー名は3文字以上で入力してください`)
};

/**
* | output |
* | --- |
* | "Username must be at least 3 characters" |
*
* @param {Auth_Signin_Validation_Usernamemin2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_validation_usernamemin2 = /** @type {((inputs?: Auth_Signin_Validation_Usernamemin2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Validation_Usernamemin2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_validation_usernamemin2(inputs)
	return en_auth_signin_validation_usernamemin2(inputs)
});
export { auth_signin_validation_usernamemin2 as "auth.signIn.validation.usernameMin" }