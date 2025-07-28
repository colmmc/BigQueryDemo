import type { Team } from './types';
import { EngineeringIcon, SalesIcon, HRIcon, MarketingIcon } from './components/icons';

export const TEAMS: Team[] = [
  {
    id: 'site-ops',
    name: 'Site Operations',
    description: 'Upload reports on site performance, uptime, and infrastructure metrics.',
    icon: EngineeringIcon,
    expectedColumns: ['week', 'project_name', 'ui', 'task', 'owner', 'patients_screened', 'patients_recruited', 'patients_followed_up', 'patients_engaged', 'update', 'estimated_time'],
    color: 'bg-teal-500/20 text-teal-400',
    hoverColor: 'hover:border-teal-500',
  },
  {
    id: 'data-team',
    name: 'Data Team',
    description: 'Submit data quality audits, validation results, and pipeline health reports.',
    icon: SalesIcon,
    expectedColumns: ['week', 'project_name', 'ui', 'task', 'deliverable', 'owner', 'current_status', 'update', 'estimated_time'],
    color: 'bg-cyan-500/20 text-cyan-400',
    hoverColor: 'hover:border-cyan-500',
  },
  {
    id: 'trial-ops',
    name: 'Trial Operations',
    description: 'Provide weekly updates on clinical trial enrollment, site progress, and patient data.',
    icon: HRIcon,
    expectedColumns: ['week', 'project_name', 'ui', 'task', 'deliverable', 'owner', 'current_status', 'update', 'estimated_time'],
    color: 'bg-fuchsia-500/20 text-fuchsia-400',
    hoverColor: 'hover:border-fuchsia-500',
  },
  {
    id: 'scientific-services',
    name: 'Scientific Services',
    description: 'Upload lab results, sample tracking information, and experiment outcomes.',
    icon: MarketingIcon,
    expectedColumns: ['project_name', 'ui', 'task', 'owner', 'current_status', 'update', 'estimated_time'],
    color: 'bg-orange-500/20 text-orange-400',
    hoverColor: 'hover:border-orange-500',
  },
];