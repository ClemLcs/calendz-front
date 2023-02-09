import { extend } from 'vee-validate'

extend('email_valid_school', value => {
  return value.includes('@epsi.fr') || value.includes('@wis.fr') || value.includes('@ecoles-wis.net' || value.includes('@ecoles-wis.net'))
})

extend('contains_one_number', value => /\d/.test(value)
)

extend('contains_one_letter', value => /[a-zA-Z]/.test(value)
)

extend('valid_grade', value => {
  return ['SN1', 'SN2', 'B3', 'I1', 'I2', 'WIS1', 'WIS2', 'WIS3', 'WIS4', 'WIS5'].indexOf(value) !== -1
})

extend('valid_group', value => {
  return ['G1', 'G2', 'G3',
    'G1 (dev)', 'G2 (dev)', 'G3 (dev)',
    'G1 (infra-réseau)', 'G2 (infra-réseau)', 'G3 (infra-réseau)',
    'G1 (ERP)', 'G2 (ERP)'
  ].indexOf(value) !== -1
})

extend('valid_city', value => {
  return ['Arras', 'Auxerre', 'Bordeaux', 'Brest',
    'Grenoble', 'Lille', 'Lyon', 'Montpellier',
    'Nantes', 'Paris', 'Rennes', 'Toulouse', 'Dakar'].indexOf(value) !== -1
})

extend('valid_task_type', value => ['homework', 'DS', 'task'].indexOf(value) !== -1)

extend('boolean', value => ['true', 'false', true, false].includes(value))

extend('valid_role', value => ['ADMIN', 'MEMBER'].includes(value))
