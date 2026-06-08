export const claimControls = {
  requiredTone: [
    'planned',
    'intended',
    'under development',
    'subject to verification',
    'subject to applicable approvals',
    'subject to final documentation',
  ],
  prohibitedWithoutDocumentation: [
    'secured financing',
    'active fundraising',
    'guaranteed returns',
    'issued carbon credits',
    'certified net zero',
    'binding offtake',
    'regulatory approval granted',
    'fully operational platform',
    'confirmed strategic partner',
    'official government partner',
  ],
  informationalOnly: 'Website content is informational only and must not be treated as an investment offer, solicitation, guarantee or final commercial representation.',
} as const;
