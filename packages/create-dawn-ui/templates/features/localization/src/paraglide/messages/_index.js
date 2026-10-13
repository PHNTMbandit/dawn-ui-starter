/* eslint-disable */
import { getLocale, experimentalStaticLocale } from "../runtime.js"

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Auth_Layout_BadgeInputs */
/** @typedef {{}} Auth_Layout_Builtwith1Inputs */
/** @typedef {{}} Auth_Layout_DescriptionInputs */
/** @typedef {{}} Auth_Layout_Highlights_Authdescription1Inputs */
/** @typedef {{}} Auth_Layout_Highlights_Authtitle1Inputs */
/** @typedef {{}} Auth_Layout_Highlights_I18ndescription1Inputs */
/** @typedef {{}} Auth_Layout_Highlights_I18ntitle1Inputs */
/** @typedef {{}} Auth_Layout_Highlights_Themedescription1Inputs */
/** @typedef {{}} Auth_Layout_Highlights_Themetitle1Inputs */
/** @typedef {{}} Auth_Layout_Highlights_Toolingdescription1Inputs */
/** @typedef {{}} Auth_Layout_Highlights_Toolingtitle1Inputs */
/** @typedef {{}} Auth_Layout_TitleInputs */
/** @typedef {{}} Auth_Signin_Buttons_Forgotpassword2Inputs */
/** @typedef {{}} Auth_Signin_Buttons_Signin2Inputs */
/** @typedef {{}} Auth_Signin_Description1Inputs */
/** @typedef {{}} Auth_Signin_Errors_Invalidcredentials2Inputs */
/** @typedef {{}} Auth_Signin_Errors_Network1Inputs */
/** @typedef {{}} Auth_Signin_Errors_Server1Inputs */
/** @typedef {{}} Auth_Signin_Errors_Title1Inputs */
/** @typedef {{}} Auth_Signin_Fields_Password1Inputs */
/** @typedef {{}} Auth_Signin_Fields_Rememberme2Inputs */
/** @typedef {{}} Auth_Signin_Fields_Username1Inputs */
/** @typedef {{}} Auth_Signin_Title1Inputs */
/** @typedef {{}} Auth_Signin_Validation_Passwordmin2Inputs */
/** @typedef {{}} Auth_Signin_Validation_Usernamemin2Inputs */
/** @typedef {{}} Auth_Signout1Inputs */
/** @typedef {{}} Common_Languageselector1Inputs */
/** @typedef {{}} Common_Languages_EnInputs */
/** @typedef {{}} Common_Languages_JaInputs */
/** @typedef {{}} Common_Themes_DarkInputs */
/** @typedef {{}} Common_Themes_LightInputs */
/** @typedef {{}} Common_Themes_SystemInputs */
/** @typedef {{}} Dashboard_Activity_AlexInputs */
/** @typedef {{}} Dashboard_Activity_DescriptionInputs */
/** @typedef {{}} Dashboard_Activity_Fourhoursago2Inputs */
/** @typedef {{}} Dashboard_Activity_JordanInputs */
/** @typedef {{}} Dashboard_Activity_Onehourago2Inputs */
/** @typedef {{}} Dashboard_Activity_SamInputs */
/** @typedef {{}} Dashboard_Activity_TitleInputs */
/** @typedef {{}} Dashboard_Activity_Twominutesago2Inputs */
/** @typedef {{}} Dashboard_Activity_Viewall1Inputs */
/** @typedef {{}} Dashboard_Nav_AnalyticsInputs */
/** @typedef {{}} Dashboard_Nav_DashboardInputs */
/** @typedef {{}} Dashboard_Nav_SettingsInputs */
/** @typedef {{}} Dashboard_Nav_TeamInputs */
/** @typedef {{}} Dashboard_NavigationInputs */
/** @typedef {{}} Dashboard_Profileinitials1Inputs */
/** @typedef {{}} Dashboard_Profilename1Inputs */
/** @typedef {{}} Dashboard_Stats_Activeusers1Inputs */
/** @typedef {{}} Dashboard_Stats_ConversionInputs */
/** @typedef {{}} Dashboard_Stats_RevenueInputs */
/** @typedef {{}} Dashboard_TitleInputs */
/** @typedef {{}} Dashboard_WelcomeInputs */
/** @typedef {{}} Navigation_Groups_Designtools1Inputs */
/** @typedef {{}} Navigation_Groups_Mylibrary1Inputs */
/** @typedef {{}} Navigation_Items_Colourpalette1Inputs */
/** @typedef {{}} Navigation_Items_Designsystems1Inputs */
/** @typedef {{}} Navigation_Items_ExploreInputs */
/** @typedef {{}} Navigation_Items_FavouritesInputs */
/** @typedef {{}} Navigation_Items_Mylibrary1Inputs */
/** @typedef {{}} Navigation_Items_SpacingInputs */
/** @typedef {{}} Navigation_Items_TypographyInputs */
/** @typedef {{}} Site_Cta_DescriptionInputs */
/** @typedef {{}} Site_Cta_TitleInputs */
/** @typedef {{}} Site_Cta_Viewongithub2Inputs */
/** @typedef {{}} Site_Docs_Betterauth1Inputs */
/** @typedef {{}} Site_Docs_Dawnui1Inputs */
/** @typedef {{}} Site_Docs_Githooks1Inputs */
/** @typedef {{}} Site_Docs_Githubactions1Inputs */
/** @typedef {{}} Site_Docs_NeonInputs */
/** @typedef {{}} Site_Docs_ParaglideInputs */
/** @typedef {{}} Site_Docs_ReactInputs */
/** @typedef {{}} Site_Docs_Reactcompiler1Inputs */
/** @typedef {{}} Site_Docs_StorybookInputs */
/** @typedef {{}} Site_Docs_TanstackInputs */
/** @typedef {{}} Site_Docs_Tanstackstart1Inputs */
/** @typedef {{}} Site_Docs_Viteplus1Inputs */
/** @typedef {{}} Site_Features_Auth_DescriptionInputs */
/** @typedef {{}} Site_Features_Auth_TitleInputs */
/** @typedef {{}} Site_Features_Cicd_DescriptionInputs */
/** @typedef {{}} Site_Features_Cicd_TitleInputs */
/** @typedef {{}} Site_Features_Database_DescriptionInputs */
/** @typedef {{}} Site_Features_Database_TitleInputs */
/** @typedef {{}} Site_Features_Dawnui_Description1Inputs */
/** @typedef {{}} Site_Features_Dawnui_Title1Inputs */
/** @typedef {{}} Site_Features_I18n_DescriptionInputs */
/** @typedef {{}} Site_Features_I18n_TitleInputs */
/** @typedef {{}} Site_Features_React_DescriptionInputs */
/** @typedef {{}} Site_Features_React_TitleInputs */
/** @typedef {{}} Site_Features_Storybook_DescriptionInputs */
/** @typedef {{}} Site_Features_Storybook_TitleInputs */
/** @typedef {{}} Site_Features_Tanstack_DescriptionInputs */
/** @typedef {{}} Site_Features_Tanstack_TitleInputs */
/** @typedef {{}} Site_Features_Toolchain_DescriptionInputs */
/** @typedef {{}} Site_Features_Toolchain_TitleInputs */
/** @typedef {{}} Site_Footer_Builtwith1Inputs */
/** @typedef {{}} Site_Footer_LicenseInputs */
/** @typedef {{}} Site_Hero_BadgeInputs */
/** @typedef {{}} Site_Hero_DescriptionInputs */
/** @typedef {{}} Site_Hero_Starongithub2Inputs */
/** @typedef {{}} Site_Hero_Styledwith1Inputs */
/** @typedef {{}} Site_Hero_TitleInputs */
/** @typedef {{}} Site_Signin1Inputs */
/** @typedef {{}} Site_SponsorInputs */
import * as __en from "./en.js"
import * as __ja from "./ja.js"
/**
* | output |
* | --- |
* | "Full-stack React starter" |
*
* @param {Auth_Layout_BadgeInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_badge = /** @type {((inputs?: Auth_Layout_BadgeInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_BadgeInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_badge(inputs)
	return __en.auth_layout_badge(inputs)
});
export { auth_layout_badge as "auth.layout.badge" }
/**
* | output |
* | --- |
* | "Built with Dawn UI · TanStack Start · Better Auth" |
*
* @param {Auth_Layout_Builtwith1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_builtwith1 = /** @type {((inputs?: Auth_Layout_Builtwith1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Builtwith1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_builtwith1(inputs)
	return __en.auth_layout_builtwith1(inputs)
});
export { auth_layout_builtwith1 as "auth.layout.builtWith" }
/**
* | output |
* | --- |
* | "Authentication, theming, and internationalization come preconfigured so you can focus on the features that matter." |
*
* @param {Auth_Layout_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_description = /** @type {((inputs?: Auth_Layout_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_description(inputs)
	return __en.auth_layout_description(inputs)
});
export { auth_layout_description as "auth.layout.description" }
/**
* | output |
* | --- |
* | "Sessions, usernames, and protected routes wired up." |
*
* @param {Auth_Layout_Highlights_Authdescription1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_authdescription1 = /** @type {((inputs?: Auth_Layout_Highlights_Authdescription1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Authdescription1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_highlights_authdescription1(inputs)
	return __en.auth_layout_highlights_authdescription1(inputs)
});
export { auth_layout_highlights_authdescription1 as "auth.layout.highlights.authDescription" }
/**
* | output |
* | --- |
* | "Secure auth" |
*
* @param {Auth_Layout_Highlights_Authtitle1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_authtitle1 = /** @type {((inputs?: Auth_Layout_Highlights_Authtitle1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Authtitle1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_highlights_authtitle1(inputs)
	return __en.auth_layout_highlights_authtitle1(inputs)
});
export { auth_layout_highlights_authtitle1 as "auth.layout.highlights.authTitle" }
/**
* | output |
* | --- |
* | "Type-safe, compiled messages for every locale." |
*
* @param {Auth_Layout_Highlights_I18ndescription1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_i18ndescription1 = /** @type {((inputs?: Auth_Layout_Highlights_I18ndescription1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_I18ndescription1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_highlights_i18ndescription1(inputs)
	return __en.auth_layout_highlights_i18ndescription1(inputs)
});
export { auth_layout_highlights_i18ndescription1 as "auth.layout.highlights.i18nDescription" }
/**
* | output |
* | --- |
* | "i18n ready" |
*
* @param {Auth_Layout_Highlights_I18ntitle1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_i18ntitle1 = /** @type {((inputs?: Auth_Layout_Highlights_I18ntitle1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_I18ntitle1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_highlights_i18ntitle1(inputs)
	return __en.auth_layout_highlights_i18ntitle1(inputs)
});
export { auth_layout_highlights_i18ntitle1 as "auth.layout.highlights.i18nTitle" }
/**
* | output |
* | --- |
* | "Light and dark themes with system sync built in." |
*
* @param {Auth_Layout_Highlights_Themedescription1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_themedescription1 = /** @type {((inputs?: Auth_Layout_Highlights_Themedescription1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Themedescription1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_highlights_themedescription1(inputs)
	return __en.auth_layout_highlights_themedescription1(inputs)
});
export { auth_layout_highlights_themedescription1 as "auth.layout.highlights.themeDescription" }
/**
* | output |
* | --- |
* | "Themeable UI" |
*
* @param {Auth_Layout_Highlights_Themetitle1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_themetitle1 = /** @type {((inputs?: Auth_Layout_Highlights_Themetitle1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Themetitle1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_highlights_themetitle1(inputs)
	return __en.auth_layout_highlights_themetitle1(inputs)
});
export { auth_layout_highlights_themetitle1 as "auth.layout.highlights.themeTitle" }
/**
* | output |
* | --- |
* | "TanStack Start on the Vite+ toolchain." |
*
* @param {Auth_Layout_Highlights_Toolingdescription1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_toolingdescription1 = /** @type {((inputs?: Auth_Layout_Highlights_Toolingdescription1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Toolingdescription1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_highlights_toolingdescription1(inputs)
	return __en.auth_layout_highlights_toolingdescription1(inputs)
});
export { auth_layout_highlights_toolingdescription1 as "auth.layout.highlights.toolingDescription" }
/**
* | output |
* | --- |
* | "Fast by default" |
*
* @param {Auth_Layout_Highlights_Toolingtitle1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_toolingtitle1 = /** @type {((inputs?: Auth_Layout_Highlights_Toolingtitle1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Toolingtitle1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_highlights_toolingtitle1(inputs)
	return __en.auth_layout_highlights_toolingtitle1(inputs)
});
export { auth_layout_highlights_toolingtitle1 as "auth.layout.highlights.toolingTitle" }
/**
* | output |
* | --- |
* | "Everything you need to ship your next product." |
*
* @param {Auth_Layout_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_title = /** @type {((inputs?: Auth_Layout_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_layout_title(inputs)
	return __en.auth_layout_title(inputs)
});
export { auth_layout_title as "auth.layout.title" }
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
	if (locale === "ja") return __ja.auth_signin_buttons_forgotpassword2(inputs)
	return __en.auth_signin_buttons_forgotpassword2(inputs)
});
export { auth_signin_buttons_forgotpassword2 as "auth.signIn.buttons.forgotPassword" }
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
	if (locale === "ja") return __ja.auth_signin_buttons_signin2(inputs)
	return __en.auth_signin_buttons_signin2(inputs)
});
export { auth_signin_buttons_signin2 as "auth.signIn.buttons.signIn" }
/**
* | output |
* | --- |
* | "Use your credentials to sign in to your account" |
*
* @param {Auth_Signin_Description1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_description1 = /** @type {((inputs?: Auth_Signin_Description1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Description1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_signin_description1(inputs)
	return __en.auth_signin_description1(inputs)
});
export { auth_signin_description1 as "auth.signIn.description" }
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
	if (locale === "ja") return __ja.auth_signin_errors_invalidcredentials2(inputs)
	return __en.auth_signin_errors_invalidcredentials2(inputs)
});
export { auth_signin_errors_invalidcredentials2 as "auth.signIn.errors.invalidCredentials" }
/**
* | output |
* | --- |
* | "Unable to reach the server. Please try again." |
*
* @param {Auth_Signin_Errors_Network1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_errors_network1 = /** @type {((inputs?: Auth_Signin_Errors_Network1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Errors_Network1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_signin_errors_network1(inputs)
	return __en.auth_signin_errors_network1(inputs)
});
export { auth_signin_errors_network1 as "auth.signIn.errors.network" }
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
	if (locale === "ja") return __ja.auth_signin_errors_server1(inputs)
	return __en.auth_signin_errors_server1(inputs)
});
export { auth_signin_errors_server1 as "auth.signIn.errors.server" }
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
	if (locale === "ja") return __ja.auth_signin_errors_title1(inputs)
	return __en.auth_signin_errors_title1(inputs)
});
export { auth_signin_errors_title1 as "auth.signIn.errors.title" }
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
	if (locale === "ja") return __ja.auth_signin_fields_password1(inputs)
	return __en.auth_signin_fields_password1(inputs)
});
export { auth_signin_fields_password1 as "auth.signIn.fields.password" }
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
	if (locale === "ja") return __ja.auth_signin_fields_rememberme2(inputs)
	return __en.auth_signin_fields_rememberme2(inputs)
});
export { auth_signin_fields_rememberme2 as "auth.signIn.fields.rememberMe" }
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
	if (locale === "ja") return __ja.auth_signin_fields_username1(inputs)
	return __en.auth_signin_fields_username1(inputs)
});
export { auth_signin_fields_username1 as "auth.signIn.fields.username" }
/**
* | output |
* | --- |
* | "Hello there!" |
*
* @param {Auth_Signin_Title1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_title1 = /** @type {((inputs?: Auth_Signin_Title1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Title1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_signin_title1(inputs)
	return __en.auth_signin_title1(inputs)
});
export { auth_signin_title1 as "auth.signIn.title" }
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
	if (locale === "ja") return __ja.auth_signin_validation_passwordmin2(inputs)
	return __en.auth_signin_validation_passwordmin2(inputs)
});
export { auth_signin_validation_passwordmin2 as "auth.signIn.validation.passwordMin" }
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
	if (locale === "ja") return __ja.auth_signin_validation_usernamemin2(inputs)
	return __en.auth_signin_validation_usernamemin2(inputs)
});
export { auth_signin_validation_usernamemin2 as "auth.signIn.validation.usernameMin" }
/**
* | output |
* | --- |
* | "Sign out" |
*
* @param {Auth_Signout1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signout1 = /** @type {((inputs?: Auth_Signout1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signout1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.auth_signout1(inputs)
	return __en.auth_signout1(inputs)
});
export { auth_signout1 as "auth.signOut" }
/**
* | output |
* | --- |
* | "Language" |
*
* @param {Common_Languageselector1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_languageselector1 = /** @type {((inputs?: Common_Languageselector1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Languageselector1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.common_languageselector1(inputs)
	return __en.common_languageselector1(inputs)
});
export { common_languageselector1 as "common.languageSelector" }
/**
* | output |
* | --- |
* | "English" |
*
* @param {Common_Languages_EnInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_languages_en = /** @type {((inputs?: Common_Languages_EnInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Languages_EnInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.common_languages_en(inputs)
	return __en.common_languages_en(inputs)
});
export { common_languages_en as "common.languages.en" }
/**
* | output |
* | --- |
* | "Japanese" |
*
* @param {Common_Languages_JaInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_languages_ja = /** @type {((inputs?: Common_Languages_JaInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Languages_JaInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.common_languages_ja(inputs)
	return __en.common_languages_ja(inputs)
});
export { common_languages_ja as "common.languages.ja" }
/**
* | output |
* | --- |
* | "Dark" |
*
* @param {Common_Themes_DarkInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_themes_dark = /** @type {((inputs?: Common_Themes_DarkInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Themes_DarkInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.common_themes_dark(inputs)
	return __en.common_themes_dark(inputs)
});
export { common_themes_dark as "common.themes.dark" }
/**
* | output |
* | --- |
* | "Light" |
*
* @param {Common_Themes_LightInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_themes_light = /** @type {((inputs?: Common_Themes_LightInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Themes_LightInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.common_themes_light(inputs)
	return __en.common_themes_light(inputs)
});
export { common_themes_light as "common.themes.light" }
/**
* | output |
* | --- |
* | "System" |
*
* @param {Common_Themes_SystemInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_themes_system = /** @type {((inputs?: Common_Themes_SystemInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Themes_SystemInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.common_themes_system(inputs)
	return __en.common_themes_system(inputs)
});
export { common_themes_system as "common.themes.system" }
/**
* | output |
* | --- |
* | "signed in from a new device" |
*
* @param {Dashboard_Activity_AlexInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_alex = /** @type {((inputs?: Dashboard_Activity_AlexInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_AlexInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_activity_alex(inputs)
	return __en.dashboard_activity_alex(inputs)
});
export { dashboard_activity_alex as "dashboard.activity.alex" }
/**
* | output |
* | --- |
* | "The latest updates across your workspace." |
*
* @param {Dashboard_Activity_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_description = /** @type {((inputs?: Dashboard_Activity_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_activity_description(inputs)
	return __en.dashboard_activity_description(inputs)
});
export { dashboard_activity_description as "dashboard.activity.description" }
/**
* | output |
* | --- |
* | "4h ago" |
*
* @param {Dashboard_Activity_Fourhoursago2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_fourhoursago2 = /** @type {((inputs?: Dashboard_Activity_Fourhoursago2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_Fourhoursago2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_activity_fourhoursago2(inputs)
	return __en.dashboard_activity_fourhoursago2(inputs)
});
export { dashboard_activity_fourhoursago2 as "dashboard.activity.fourHoursAgo" }
/**
* | output |
* | --- |
* | "updated the billing settings" |
*
* @param {Dashboard_Activity_JordanInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_jordan = /** @type {((inputs?: Dashboard_Activity_JordanInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_JordanInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_activity_jordan(inputs)
	return __en.dashboard_activity_jordan(inputs)
});
export { dashboard_activity_jordan as "dashboard.activity.jordan" }
/**
* | output |
* | --- |
* | "1h ago" |
*
* @param {Dashboard_Activity_Onehourago2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_onehourago2 = /** @type {((inputs?: Dashboard_Activity_Onehourago2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_Onehourago2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_activity_onehourago2(inputs)
	return __en.dashboard_activity_onehourago2(inputs)
});
export { dashboard_activity_onehourago2 as "dashboard.activity.oneHourAgo" }
/**
* | output |
* | --- |
* | "invited 3 new team members" |
*
* @param {Dashboard_Activity_SamInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_sam = /** @type {((inputs?: Dashboard_Activity_SamInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_SamInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_activity_sam(inputs)
	return __en.dashboard_activity_sam(inputs)
});
export { dashboard_activity_sam as "dashboard.activity.sam" }
/**
* | output |
* | --- |
* | "Recent activity" |
*
* @param {Dashboard_Activity_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_title = /** @type {((inputs?: Dashboard_Activity_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_activity_title(inputs)
	return __en.dashboard_activity_title(inputs)
});
export { dashboard_activity_title as "dashboard.activity.title" }
/**
* | output |
* | --- |
* | "2m ago" |
*
* @param {Dashboard_Activity_Twominutesago2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_twominutesago2 = /** @type {((inputs?: Dashboard_Activity_Twominutesago2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_Twominutesago2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_activity_twominutesago2(inputs)
	return __en.dashboard_activity_twominutesago2(inputs)
});
export { dashboard_activity_twominutesago2 as "dashboard.activity.twoMinutesAgo" }
/**
* | output |
* | --- |
* | "View full activity log" |
*
* @param {Dashboard_Activity_Viewall1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_viewall1 = /** @type {((inputs?: Dashboard_Activity_Viewall1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_Viewall1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_activity_viewall1(inputs)
	return __en.dashboard_activity_viewall1(inputs)
});
export { dashboard_activity_viewall1 as "dashboard.activity.viewAll" }
/**
* | output |
* | --- |
* | "Analytics" |
*
* @param {Dashboard_Nav_AnalyticsInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_nav_analytics = /** @type {((inputs?: Dashboard_Nav_AnalyticsInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Nav_AnalyticsInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_nav_analytics(inputs)
	return __en.dashboard_nav_analytics(inputs)
});
export { dashboard_nav_analytics as "dashboard.nav.analytics" }
/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {Dashboard_Nav_DashboardInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_nav_dashboard = /** @type {((inputs?: Dashboard_Nav_DashboardInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Nav_DashboardInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_nav_dashboard(inputs)
	return __en.dashboard_nav_dashboard(inputs)
});
export { dashboard_nav_dashboard as "dashboard.nav.dashboard" }
/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Dashboard_Nav_SettingsInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_nav_settings = /** @type {((inputs?: Dashboard_Nav_SettingsInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Nav_SettingsInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_nav_settings(inputs)
	return __en.dashboard_nav_settings(inputs)
});
export { dashboard_nav_settings as "dashboard.nav.settings" }
/**
* | output |
* | --- |
* | "Team" |
*
* @param {Dashboard_Nav_TeamInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_nav_team = /** @type {((inputs?: Dashboard_Nav_TeamInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Nav_TeamInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_nav_team(inputs)
	return __en.dashboard_nav_team(inputs)
});
export { dashboard_nav_team as "dashboard.nav.team" }
/**
* | output |
* | --- |
* | "Navigation" |
*
* @param {Dashboard_NavigationInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_navigation = /** @type {((inputs?: Dashboard_NavigationInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_NavigationInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_navigation(inputs)
	return __en.dashboard_navigation(inputs)
});
export { dashboard_navigation as "dashboard.navigation" }
/**
* | output |
* | --- |
* | "DU" |
*
* @param {Dashboard_Profileinitials1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_profileinitials1 = /** @type {((inputs?: Dashboard_Profileinitials1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Profileinitials1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_profileinitials1(inputs)
	return __en.dashboard_profileinitials1(inputs)
});
export { dashboard_profileinitials1 as "dashboard.profileInitials" }
/**
* | output |
* | --- |
* | "Demo User" |
*
* @param {Dashboard_Profilename1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_profilename1 = /** @type {((inputs?: Dashboard_Profilename1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Profilename1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_profilename1(inputs)
	return __en.dashboard_profilename1(inputs)
});
export { dashboard_profilename1 as "dashboard.profileName" }
/**
* | output |
* | --- |
* | "Active users" |
*
* @param {Dashboard_Stats_Activeusers1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_stats_activeusers1 = /** @type {((inputs?: Dashboard_Stats_Activeusers1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stats_Activeusers1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_stats_activeusers1(inputs)
	return __en.dashboard_stats_activeusers1(inputs)
});
export { dashboard_stats_activeusers1 as "dashboard.stats.activeUsers" }
/**
* | output |
* | --- |
* | "Conversion" |
*
* @param {Dashboard_Stats_ConversionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_stats_conversion = /** @type {((inputs?: Dashboard_Stats_ConversionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stats_ConversionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_stats_conversion(inputs)
	return __en.dashboard_stats_conversion(inputs)
});
export { dashboard_stats_conversion as "dashboard.stats.conversion" }
/**
* | output |
* | --- |
* | "Revenue" |
*
* @param {Dashboard_Stats_RevenueInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_stats_revenue = /** @type {((inputs?: Dashboard_Stats_RevenueInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stats_RevenueInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_stats_revenue(inputs)
	return __en.dashboard_stats_revenue(inputs)
});
export { dashboard_stats_revenue as "dashboard.stats.revenue" }
/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {Dashboard_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_title = /** @type {((inputs?: Dashboard_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_title(inputs)
	return __en.dashboard_title(inputs)
});
export { dashboard_title as "dashboard.title" }
/**
* | output |
* | --- |
* | "Welcome back — here's what's happening today." |
*
* @param {Dashboard_WelcomeInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_welcome = /** @type {((inputs?: Dashboard_WelcomeInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_WelcomeInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.dashboard_welcome(inputs)
	return __en.dashboard_welcome(inputs)
});
export { dashboard_welcome as "dashboard.welcome" }
/**
* | output |
* | --- |
* | "Design tools" |
*
* @param {Navigation_Groups_Designtools1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_groups_designtools1 = /** @type {((inputs?: Navigation_Groups_Designtools1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Groups_Designtools1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.navigation_groups_designtools1(inputs)
	return __en.navigation_groups_designtools1(inputs)
});
export { navigation_groups_designtools1 as "navigation.groups.designTools" }
/**
* | output |
* | --- |
* | "My library" |
*
* @param {Navigation_Groups_Mylibrary1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_groups_mylibrary1 = /** @type {((inputs?: Navigation_Groups_Mylibrary1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Groups_Mylibrary1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.navigation_groups_mylibrary1(inputs)
	return __en.navigation_groups_mylibrary1(inputs)
});
export { navigation_groups_mylibrary1 as "navigation.groups.myLibrary" }
/**
* | output |
* | --- |
* | "Color palette" |
*
* @param {Navigation_Items_Colourpalette1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_colourpalette1 = /** @type {((inputs?: Navigation_Items_Colourpalette1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_Colourpalette1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.navigation_items_colourpalette1(inputs)
	return __en.navigation_items_colourpalette1(inputs)
});
export { navigation_items_colourpalette1 as "navigation.items.colourPalette" }
/**
* | output |
* | --- |
* | "Design systems" |
*
* @param {Navigation_Items_Designsystems1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_designsystems1 = /** @type {((inputs?: Navigation_Items_Designsystems1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_Designsystems1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.navigation_items_designsystems1(inputs)
	return __en.navigation_items_designsystems1(inputs)
});
export { navigation_items_designsystems1 as "navigation.items.designSystems" }
/**
* | output |
* | --- |
* | "Explore" |
*
* @param {Navigation_Items_ExploreInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_explore = /** @type {((inputs?: Navigation_Items_ExploreInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_ExploreInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.navigation_items_explore(inputs)
	return __en.navigation_items_explore(inputs)
});
export { navigation_items_explore as "navigation.items.explore" }
/**
* | output |
* | --- |
* | "Favorites" |
*
* @param {Navigation_Items_FavouritesInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_favourites = /** @type {((inputs?: Navigation_Items_FavouritesInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_FavouritesInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.navigation_items_favourites(inputs)
	return __en.navigation_items_favourites(inputs)
});
export { navigation_items_favourites as "navigation.items.favourites" }
/**
* | output |
* | --- |
* | "My library" |
*
* @param {Navigation_Items_Mylibrary1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_mylibrary1 = /** @type {((inputs?: Navigation_Items_Mylibrary1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_Mylibrary1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.navigation_items_mylibrary1(inputs)
	return __en.navigation_items_mylibrary1(inputs)
});
export { navigation_items_mylibrary1 as "navigation.items.myLibrary" }
/**
* | output |
* | --- |
* | "Spacing" |
*
* @param {Navigation_Items_SpacingInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_spacing = /** @type {((inputs?: Navigation_Items_SpacingInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_SpacingInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.navigation_items_spacing(inputs)
	return __en.navigation_items_spacing(inputs)
});
export { navigation_items_spacing as "navigation.items.spacing" }
/**
* | output |
* | --- |
* | "Typography" |
*
* @param {Navigation_Items_TypographyInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_typography = /** @type {((inputs?: Navigation_Items_TypographyInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_TypographyInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.navigation_items_typography(inputs)
	return __en.navigation_items_typography(inputs)
});
export { navigation_items_typography as "navigation.items.typography" }
/**
* | output |
* | --- |
* | "Clone the starter and get a production-ready foundation in minutes — authentication, database, and UI included." |
*
* @param {Site_Cta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_cta_description = /** @type {((inputs?: Site_Cta_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Cta_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_cta_description(inputs)
	return __en.site_cta_description(inputs)
});
export { site_cta_description as "site.cta.description" }
/**
* | output |
* | --- |
* | "Start building today" |
*
* @param {Site_Cta_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_cta_title = /** @type {((inputs?: Site_Cta_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Cta_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_cta_title(inputs)
	return __en.site_cta_title(inputs)
});
export { site_cta_title as "site.cta.title" }
/**
* | output |
* | --- |
* | "View on GitHub" |
*
* @param {Site_Cta_Viewongithub2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_cta_viewongithub2 = /** @type {((inputs?: Site_Cta_Viewongithub2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Cta_Viewongithub2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_cta_viewongithub2(inputs)
	return __en.site_cta_viewongithub2(inputs)
});
export { site_cta_viewongithub2 as "site.cta.viewOnGithub" }
/**
* | output |
* | --- |
* | "Better Auth docs" |
*
* @param {Site_Docs_Betterauth1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_betterauth1 = /** @type {((inputs?: Site_Docs_Betterauth1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Betterauth1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_betterauth1(inputs)
	return __en.site_docs_betterauth1(inputs)
});
export { site_docs_betterauth1 as "site.docs.betterAuth" }
/**
* | output |
* | --- |
* | "Dawn UI docs" |
*
* @param {Site_Docs_Dawnui1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_dawnui1 = /** @type {((inputs?: Site_Docs_Dawnui1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Dawnui1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_dawnui1(inputs)
	return __en.site_docs_dawnui1(inputs)
});
export { site_docs_dawnui1 as "site.docs.dawnUi" }
/**
* | output |
* | --- |
* | "Git hooks" |
*
* @param {Site_Docs_Githooks1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_githooks1 = /** @type {((inputs?: Site_Docs_Githooks1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Githooks1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_githooks1(inputs)
	return __en.site_docs_githooks1(inputs)
});
export { site_docs_githooks1 as "site.docs.gitHooks" }
/**
* | output |
* | --- |
* | "GitHub Actions" |
*
* @param {Site_Docs_Githubactions1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_githubactions1 = /** @type {((inputs?: Site_Docs_Githubactions1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Githubactions1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_githubactions1(inputs)
	return __en.site_docs_githubactions1(inputs)
});
export { site_docs_githubactions1 as "site.docs.githubActions" }
/**
* | output |
* | --- |
* | "Neon docs" |
*
* @param {Site_Docs_NeonInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_neon = /** @type {((inputs?: Site_Docs_NeonInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_NeonInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_neon(inputs)
	return __en.site_docs_neon(inputs)
});
export { site_docs_neon as "site.docs.neon" }
/**
* | output |
* | --- |
* | "Paraglide JS docs" |
*
* @param {Site_Docs_ParaglideInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_paraglide = /** @type {((inputs?: Site_Docs_ParaglideInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_ParaglideInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_paraglide(inputs)
	return __en.site_docs_paraglide(inputs)
});
export { site_docs_paraglide as "site.docs.paraglide" }
/**
* | output |
* | --- |
* | "React docs" |
*
* @param {Site_Docs_ReactInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_react = /** @type {((inputs?: Site_Docs_ReactInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_ReactInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_react(inputs)
	return __en.site_docs_react(inputs)
});
export { site_docs_react as "site.docs.react" }
/**
* | output |
* | --- |
* | "React Compiler" |
*
* @param {Site_Docs_Reactcompiler1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_reactcompiler1 = /** @type {((inputs?: Site_Docs_Reactcompiler1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Reactcompiler1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_reactcompiler1(inputs)
	return __en.site_docs_reactcompiler1(inputs)
});
export { site_docs_reactcompiler1 as "site.docs.reactCompiler" }
/**
* | output |
* | --- |
* | "Storybook docs" |
*
* @param {Site_Docs_StorybookInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_storybook = /** @type {((inputs?: Site_Docs_StorybookInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_StorybookInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_storybook(inputs)
	return __en.site_docs_storybook(inputs)
});
export { site_docs_storybook as "site.docs.storybook" }
/**
* | output |
* | --- |
* | "TanStack docs" |
*
* @param {Site_Docs_TanstackInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_tanstack = /** @type {((inputs?: Site_Docs_TanstackInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_TanstackInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_tanstack(inputs)
	return __en.site_docs_tanstack(inputs)
});
export { site_docs_tanstack as "site.docs.tanstack" }
/**
* | output |
* | --- |
* | "TanStack Start docs" |
*
* @param {Site_Docs_Tanstackstart1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_tanstackstart1 = /** @type {((inputs?: Site_Docs_Tanstackstart1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Tanstackstart1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_tanstackstart1(inputs)
	return __en.site_docs_tanstackstart1(inputs)
});
export { site_docs_tanstackstart1 as "site.docs.tanstackStart" }
/**
* | output |
* | --- |
* | "Vite+ docs" |
*
* @param {Site_Docs_Viteplus1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_viteplus1 = /** @type {((inputs?: Site_Docs_Viteplus1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Viteplus1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_docs_viteplus1(inputs)
	return __en.site_docs_viteplus1(inputs)
});
export { site_docs_viteplus1 as "site.docs.vitePlus" }
/**
* | output |
* | --- |
* | "Better Auth handles sessions, usernames, and protected routes securely." |
*
* @param {Site_Features_Auth_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_auth_description = /** @type {((inputs?: Site_Features_Auth_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Auth_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_auth_description(inputs)
	return __en.site_features_auth_description(inputs)
});
export { site_features_auth_description as "site.features.auth.description" }
/**
* | output |
* | --- |
* | "Authentication built in" |
*
* @param {Site_Features_Auth_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_auth_title = /** @type {((inputs?: Site_Features_Auth_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Auth_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_auth_title(inputs)
	return __en.site_features_auth_title(inputs)
});
export { site_features_auth_title as "site.features.auth.title" }
/**
* | output |
* | --- |
* | "A GitHub Actions test workflow and Vite+ Git hooks run checks before every commit, push, and pull request." |
*
* @param {Site_Features_Cicd_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_cicd_description = /** @type {((inputs?: Site_Features_Cicd_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Cicd_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_cicd_description(inputs)
	return __en.site_features_cicd_description(inputs)
});
export { site_features_cicd_description as "site.features.cicd.description" }
/**
* | output |
* | --- |
* | "CI/CD included" |
*
* @param {Site_Features_Cicd_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_cicd_title = /** @type {((inputs?: Site_Features_Cicd_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Cicd_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_cicd_title(inputs)
	return __en.site_features_cicd_title(inputs)
});
export { site_features_cicd_title as "site.features.cicd.title" }
/**
* | output |
* | --- |
* | "Drizzle ORM with Neon Postgres gives you type-safe, serverless data access." |
*
* @param {Site_Features_Database_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_database_description = /** @type {((inputs?: Site_Features_Database_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Database_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_database_description(inputs)
	return __en.site_features_database_description(inputs)
});
export { site_features_database_description as "site.features.database.description" }
/**
* | output |
* | --- |
* | "Type-safe database" |
*
* @param {Site_Features_Database_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_database_title = /** @type {((inputs?: Site_Features_Database_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Database_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_database_title(inputs)
	return __en.site_features_database_title(inputs)
});
export { site_features_database_title as "site.features.database.title" }
/**
* | output |
* | --- |
* | "Provides accessible, themeable components with light and dark modes." |
*
* @param {Site_Features_Dawnui_Description1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_dawnui_description1 = /** @type {((inputs?: Site_Features_Dawnui_Description1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Dawnui_Description1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_dawnui_description1(inputs)
	return __en.site_features_dawnui_description1(inputs)
});
export { site_features_dawnui_description1 as "site.features.dawnUi.description" }
/**
* | output |
* | --- |
* | "Dawn UI included" |
*
* @param {Site_Features_Dawnui_Title1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_dawnui_title1 = /** @type {((inputs?: Site_Features_Dawnui_Title1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Dawnui_Title1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_dawnui_title1(inputs)
	return __en.site_features_dawnui_title1(inputs)
});
export { site_features_dawnui_title1 as "site.features.dawnUi.title" }
/**
* | output |
* | --- |
* | "Paraglide compiles type-safe messages, pre-configured for English and Japanese." |
*
* @param {Site_Features_I18n_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_i18n_description = /** @type {((inputs?: Site_Features_I18n_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_I18n_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_i18n_description(inputs)
	return __en.site_features_i18n_description(inputs)
});
export { site_features_i18n_description as "site.features.i18n.description" }
/**
* | output |
* | --- |
* | "Internationalized" |
*
* @param {Site_Features_I18n_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_i18n_title = /** @type {((inputs?: Site_Features_I18n_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_I18n_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_i18n_title(inputs)
	return __en.site_features_i18n_title(inputs)
});
export { site_features_i18n_title as "site.features.i18n.title" }
/**
* | output |
* | --- |
* | "React 19 with the React Compiler for automatic memoization — fast UIs without manual tuning." |
*
* @param {Site_Features_React_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_react_description = /** @type {((inputs?: Site_Features_React_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_React_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_react_description(inputs)
	return __en.site_features_react_description(inputs)
});
export { site_features_react_description as "site.features.react.description" }
/**
* | output |
* | --- |
* | "React 19 + Compiler" |
*
* @param {Site_Features_React_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_react_title = /** @type {((inputs?: Site_Features_React_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_React_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_react_title(inputs)
	return __en.site_features_react_title(inputs)
});
export { site_features_react_title as "site.features.react.title" }
/**
* | output |
* | --- |
* | "Develop and document components in isolation with Storybook, plus ready-made example stories." |
*
* @param {Site_Features_Storybook_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_storybook_description = /** @type {((inputs?: Site_Features_Storybook_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Storybook_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_storybook_description(inputs)
	return __en.site_features_storybook_description(inputs)
});
export { site_features_storybook_description as "site.features.storybook.description" }
/**
* | output |
* | --- |
* | "Storybook ready" |
*
* @param {Site_Features_Storybook_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_storybook_title = /** @type {((inputs?: Site_Features_Storybook_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Storybook_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_storybook_title(inputs)
	return __en.site_features_storybook_title(inputs)
});
export { site_features_storybook_title as "site.features.storybook.title" }
/**
* | output |
* | --- |
* | "Start, Router, Query, Form, and Table deliver type-safe routing, data, and forms end to end." |
*
* @param {Site_Features_Tanstack_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_tanstack_description = /** @type {((inputs?: Site_Features_Tanstack_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Tanstack_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_tanstack_description(inputs)
	return __en.site_features_tanstack_description(inputs)
});
export { site_features_tanstack_description as "site.features.tanstack.description" }
/**
* | output |
* | --- |
* | "TanStack suite" |
*
* @param {Site_Features_Tanstack_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_tanstack_title = /** @type {((inputs?: Site_Features_Tanstack_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Tanstack_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_tanstack_title(inputs)
	return __en.site_features_tanstack_title(inputs)
});
export { site_features_tanstack_title as "site.features.tanstack.title" }
/**
* | output |
* | --- |
* | "Vite+ unifies dev, build, test, lint, and format behind a single CLI." |
*
* @param {Site_Features_Toolchain_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_toolchain_description = /** @type {((inputs?: Site_Features_Toolchain_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Toolchain_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_toolchain_description(inputs)
	return __en.site_features_toolchain_description(inputs)
});
export { site_features_toolchain_description as "site.features.toolchain.description" }
/**
* | output |
* | --- |
* | "Vite+ toolchain" |
*
* @param {Site_Features_Toolchain_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_toolchain_title = /** @type {((inputs?: Site_Features_Toolchain_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Toolchain_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_features_toolchain_title(inputs)
	return __en.site_features_toolchain_title(inputs)
});
export { site_features_toolchain_title as "site.features.toolchain.title" }
/**
* | output |
* | --- |
* | "Built with" |
*
* @param {Site_Footer_Builtwith1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_footer_builtwith1 = /** @type {((inputs?: Site_Footer_Builtwith1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Footer_Builtwith1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_footer_builtwith1(inputs)
	return __en.site_footer_builtwith1(inputs)
});
export { site_footer_builtwith1 as "site.footer.builtWith" }
/**
* | output |
* | --- |
* | "MIT License" |
*
* @param {Site_Footer_LicenseInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_footer_license = /** @type {((inputs?: Site_Footer_LicenseInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Footer_LicenseInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_footer_license(inputs)
	return __en.site_footer_license(inputs)
});
export { site_footer_license as "site.footer.license" }
/**
* | output |
* | --- |
* | "Full-stack React starter" |
*
* @param {Site_Hero_BadgeInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_badge = /** @type {((inputs?: Site_Hero_BadgeInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_BadgeInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_hero_badge(inputs)
	return __en.site_hero_badge(inputs)
});
export { site_hero_badge as "site.hero.badge" }
/**
* | output |
* | --- |
* | "Authentication, theming, type-safe data, and internationalization are already wired up on TanStack Start — so you can skip the boilerplate and ship your prod..." |
*
* @param {Site_Hero_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_description = /** @type {((inputs?: Site_Hero_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_hero_description(inputs)
	return __en.site_hero_description(inputs)
});
export { site_hero_description as "site.hero.description" }
/**
* | output |
* | --- |
* | "Star on GitHub" |
*
* @param {Site_Hero_Starongithub2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_starongithub2 = /** @type {((inputs?: Site_Hero_Starongithub2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_Starongithub2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_hero_starongithub2(inputs)
	return __en.site_hero_starongithub2(inputs)
});
export { site_hero_starongithub2 as "site.hero.starOnGithub" }
/**
* | output |
* | --- |
* | "Styled with" |
*
* @param {Site_Hero_Styledwith1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_styledwith1 = /** @type {((inputs?: Site_Hero_Styledwith1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_Styledwith1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_hero_styledwith1(inputs)
	return __en.site_hero_styledwith1(inputs)
});
export { site_hero_styledwith1 as "site.hero.styledWith" }
/**
* | output |
* | --- |
* | "The full-stack React starter that's ready on day one" |
*
* @param {Site_Hero_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_title = /** @type {((inputs?: Site_Hero_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_hero_title(inputs)
	return __en.site_hero_title(inputs)
});
export { site_hero_title as "site.hero.title" }
/**
* | output |
* | --- |
* | "Get started" |
*
* @param {Site_Signin1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_signin1 = /** @type {((inputs?: Site_Signin1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Signin1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_signin1(inputs)
	return __en.site_signin1(inputs)
});
export { site_signin1 as "site.signIn" }
/**
* | output |
* | --- |
* | "Support me" |
*
* @param {Site_SponsorInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_sponsor = /** @type {((inputs?: Site_SponsorInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_SponsorInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return __ja.site_sponsor(inputs)
	return __en.site_sponsor(inputs)
});
export { site_sponsor as "site.sponsor" }