/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Buttons_Forgotpassword2Inputs */

const en_auth_signin_buttons_forgotpassword2 = /** @type {(inputs: Auth_Signin_Buttons_Forgotpassword2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forgot Password?`)
};

const ja_auth_signin_buttons_forgotpassword2 = /** @type {(inputs: Auth_Signin_Buttons_Forgotpassword2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードをお忘れですか？`)
};

/**
* | output |
* | --- |
* | "Forgot Password?" |
*
* @param {Auth_Signin_Buttons_Forgotpassword2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_buttons_forgotpassword2 = /** @type {((inputs?: Auth_Signin_Buttons_Forgotpassword2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Buttons_Forgotpassword2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_buttons_forgotpassword2(inputs)
	return en_auth_signin_buttons_forgotpassword2(inputs)
});
export { auth_signin_buttons_forgotpassword2 as "auth.signIn.buttons.forgotPassword" }