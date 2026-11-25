import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('about-phonology');

export default function Page() {
  return <ServicePage slug="about-phonology" />;
}
