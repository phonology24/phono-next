import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('ai-voice-agents');

export default function Page() {
  return <ServicePage slug="ai-voice-agents" />;
}
