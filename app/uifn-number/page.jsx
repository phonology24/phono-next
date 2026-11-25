import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('uifn-number');

export default function Page() {
  return <ServicePage slug="uifn-number" />;
}
