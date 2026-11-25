import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('voice-api');

export default function Page() {
  return <ServicePage slug="voice-api" />;
}
