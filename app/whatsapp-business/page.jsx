import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('whatsapp-business');

export default function Page() {
  return <ServicePage slug="whatsapp-business" />;
}
