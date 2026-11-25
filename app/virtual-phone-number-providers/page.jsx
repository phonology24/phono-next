import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('virtual-phone-number-providers');

export default function Page() {
  return <ServicePage slug="virtual-phone-number-providers" />;
}
