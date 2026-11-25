import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('cloud-telephony-providers');

export default function Page() {
  return <ServicePage slug="cloud-telephony-providers" />;
}
