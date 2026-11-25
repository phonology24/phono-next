import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('voip-service-providers-in-india');

export default function Page() {
  return <ServicePage slug="voip-service-providers-in-india" />;
}
