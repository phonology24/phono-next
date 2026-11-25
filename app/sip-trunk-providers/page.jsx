import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('sip-trunk-providers');

export default function Page() {
  return <ServicePage slug="sip-trunk-providers" />;
}
