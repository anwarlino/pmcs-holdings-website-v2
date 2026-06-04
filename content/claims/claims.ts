export const claimControls = {
  requiredTone: [
    'planned',
    'intended',
    'under development',
    'subject to verification',
    'subject to approval',
    'subject to final documentation',
  ],
  prohibitedWithoutDocumentation: [
    'secured financing',
    'guaranteed returns',
    'issued carbon credits',
    'binding offtake',
    'regulatory approval',
    'fully operational platform',
    'official government partner',
  ],
  informationalOnly: 'Website content is informational only and must not be treated as an investment offer, solicitation, guarantee or final commercial representation.',
} as const;
