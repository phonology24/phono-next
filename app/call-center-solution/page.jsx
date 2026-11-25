import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('call-center-solution');

export default function Page() {
  return <ServicePage slug="call-center-solution" />;
}
