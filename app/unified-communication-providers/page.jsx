import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('unified-communication-providers');

export default function Page() {
  return <ServicePage slug="unified-communication-providers" />;
}
