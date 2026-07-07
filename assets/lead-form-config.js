/*
 * Lead capture config for the Revenue Diagnostic (/revenue-diagnostic/).
 *
 * Setup (~5 minutes):
 * 1. Create a Google Form with two short-answer fields, in this order: "Email", "Score".
 * 2. Open the live form (not the editor), right-click -> View Page Source.
 * 3. Search for `action="` to find the formResponse URL, and search for
 *    `entry.` to find the numeric field IDs for Email and Score, in the
 *    order the fields appear on the form.
 * 4. Paste the three values below. The Sheet is created automatically the
 *    first time you open the form's "Responses" tab -> the Sheets icon.
 *
 * Until these are filled in, the diagnostic still works end to end for
 * visitors (it reveals results locally) -- it just skips the network call
 * and logs a console warning instead of silently failing.
 */
window.AESOP_LEAD_FORM = {
  actionUrl: "REPLACE_WITH_GOOGLE_FORM_FORMRESPONSE_URL",
  emailField: "REPLACE_WITH_ENTRY_ID_FOR_EMAIL",
  scoreField: "REPLACE_WITH_ENTRY_ID_FOR_SCORE"
};
