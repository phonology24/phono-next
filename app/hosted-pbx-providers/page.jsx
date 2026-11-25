import ServicePage from '@/components/service/ServicePage';
import { metaFor } from '@/components/service/pages';

export const metadata = metaFor('hosted-pbx-providers');

export default function Page() {
  return <ServicePage slug="hosted-pbx-providers" />;
}
