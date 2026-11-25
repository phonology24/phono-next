import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('messaging-services');

export default function Page() {
  return <ServicePage slug="messaging-services" />;
}
