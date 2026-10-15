/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Validation_Passwordmin2Inputs */

const en_auth_signin_validation_passwordmin2 = /** @type {(inputs: Auth_Signin_Validation_Passwordmin2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password must be at least 6 characters`)
};

const ja_auth_signin_validation_passwordmin2 = /** @type {(inputs: Auth_Signin_Validation_Passwordmin2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードは6文字以上で入力してください`)
};

/**
* | output |
* | --- |
* | "Password must be at least 6 characters" |
*
* @param {Auth_Signin_Validation_Passwordmin2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_validation_passwordmin2 = /** @type {((inputs?: Auth_Signin_Validation_Passwordmin2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Validation_Passwordmin2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_validation_passwordmin2(inputs)
	return en_auth_signin_validation_passwordmin2(inputs)
});
export { auth_signin_validation_passwordmin2 as "auth.signIn.validation.passwordMin" }