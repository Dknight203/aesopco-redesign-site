/*
 * Lead capture config for the Revenue Diagnostic (/revenue-diagnostic).
 *
 * Create a Google Form with short-answer fields matching the keys below.
 * Connect the form to a Google Sheet, then paste the formResponse URL and
 * entry IDs here. The Sheet can be exported as CSV and uploaded to Attio.
 */
window.AESOP_LEAD_FORM = {
 actionUrl: "REPLACE_WITH_GOOGLE_FORM_FORMRESPONSE_URL",
 fields: {
  name: "REPLACE_WITH_ENTRY_ID_FOR_NAME",
  email: "REPLACE_WITH_ENTRY_ID_FOR_EMAIL",
  date: "REPLACE_WITH_ENTRY_ID_FOR_DATE",
  score: "REPLACE_WITH_ENTRY_ID_FOR_SCORE",
  bucket: "REPLACE_WITH_ENTRY_ID_FOR_BUCKET",
  risk: "REPLACE_WITH_ENTRY_ID_FOR_RISK",
  weakestPillar: "REPLACE_WITH_ENTRY_ID_FOR_WEAKEST_PILLAR",
  secondWeakestPillar: "REPLACE_WITH_ENTRY_ID_FOR_SECOND_WEAKEST_PILLAR",
  strongestPillar: "REPLACE_WITH_ENTRY_ID_FOR_STRONGEST_PILLAR",
  firstKpi: "REPLACE_WITH_ENTRY_ID_FOR_FIRST_KPI",
  executiveOwner: "REPLACE_WITH_ENTRY_ID_FOR_EXECUTIVE_OWNER",
  recommendedMove: "REPLACE_WITH_ENTRY_ID_FOR_RECOMMENDED_MOVE",
  pillarRatings: "REPLACE_WITH_ENTRY_ID_FOR_PILLAR_RATINGS",
  reportSummary: "REPLACE_WITH_ENTRY_ID_FOR_REPORT_SUMMARY",
  reportText: "REPLACE_WITH_ENTRY_ID_FOR_REPORT_TEXT"
 }
};
