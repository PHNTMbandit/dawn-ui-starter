/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Buttons_Signin2Inputs */

const en_auth_signin_buttons_signin2 = /** @type {(inputs: Auth_Signin_Buttons_Signin2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign In`)
};

const ja_auth_signin_buttons_signin2 = /** @type {(inputs: Auth_Signin_Buttons_Signin2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サインイン`)
};

/**
* | output |
* | --- |
* | "Sign In" |
*
* @param {Auth_Signin_Buttons_Signin2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_buttons_signin2 = /** @type {((inputs?: Auth_Signin_Buttons_Signin2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Buttons_Signin2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_buttons_signin2(inputs)
	return en_auth_signin_buttons_signin2(inputs)
});
export { auth_signin_buttons_signin2 as "auth.signIn.buttons.signIn" }