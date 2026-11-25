import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('contact-us');

export default function Page() {
  return <ServicePage slug="contact-us" />;
}
